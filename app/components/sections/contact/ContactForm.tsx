import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import {
  ContactFormData,
  ContactFormInputName,
  ContactFormInputState,
} from "./props";
import {
  FormValidationError,
  validateEmail,
  validateMessage,
  validateName,
  verifyEmail,
} from "../../utils/validation";
import contactFormStateReducer from "../../reducers/contactFormState";
import { a, to, useSpring } from "@react-spring/web";
import animation from "../../animations/animations";
import { useObservedSprings } from "../../utils/useObservedSpring";
import ContactFormInput from "@/app/components/sections/contact/ContactFormInput";
import ContactFormSubmitButton from "@/app/components/sections/contact/ContactFormSubmitButton";
import ContactFormSuccessModal from "./ContactFormSuccessModal";

export default function ContactForm() {
  const initialFormData: ContactFormData = {name: "", email: "", message: ""};
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formSending, setFormSending] = useState<boolean>(false);
  const [formState, setFormState] = contactFormStateReducer();
  const [error, setError] = useState<FormValidationError | null>(null);
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(true);
  const isSubmitDisabled = useMemo(handleSubmitDisabled, [formState]);
  const areInputsDisabled = useMemo(handleInputsDisabled, [formState]);
  useEffect(processInputChange, [formData]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function processInputChange() {
    (["name", "email", "message"] as const).forEach((input) => {
      const inputValue = formData[input];

      if (inputValue.trim()) {
        setFormState({type: "set_typing", payload: input});
      } else {
        setFormState({type: "set_empty", payload: input});
      }
    });
  }

  function handleSubmitDisabled() {
    const inputStates: Array<ContactFormInputState> = [
      formState.name,
      formState.email,
      formState.message,
    ];

    const submitDisabledStates = new Set<ContactFormInputState>(["empty", "loading"]);
    const submitDisabled = inputStates.some((state) => submitDisabledStates.has(state));
    return submitDisabled;
  }

  function handleInputsDisabled() {
    const inputStates: Array<ContactFormInputState> = [
      formState.name,
      formState.email,
      formState.message,
    ];

    const inputsDisabledStates = new Set<ContactFormInputState>(["loading"]);
    const inputsDisabled = inputStates.some((state) => inputsDisabledStates.has(state));
    return inputsDisabled;
  }

  function handleError(name: ContactFormInputName, error: FormValidationError) {
    setFormState({type: "set_error", payload: name});
    setError(error);
    setFormSending(false);
  }

  function clearFormData() {
    setFormData(initialFormData);
  }

  async function sendFormData() {
    const API_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_API_URL!;

    const formSubmissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formSubmissionData.append(key, value)
    );

    const fetchOptions = {
      method: "POST",
      body: formSubmissionData,
      headers: {
        Accept: "application/json",
      },
    };

    try {
      await fetch(API_URL, fetchOptions);
      clearFormData();
      setFormSending(false);
      setSuccessModalOpen(true);
    } catch (err) {
      setFormSending(false);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSending(true);
    const {name, email, message} = formData;

    const isNameValidated = validateName(name);
    if (isNameValidated.error) {
      handleError("name", isNameValidated.error);
      return;
    }

    const isEmailValidated = validateEmail(email);
    if (isEmailValidated.error) {
      handleError("email", isEmailValidated.error);
      return;
    }

    const isMessageVerified = validateMessage(message);
    if (isMessageVerified.error) {
      handleError("message", isMessageVerified.error);
      return;
    }

    setFormState({type: "set_loading", payload: "email"});
    const isEmailVerified = await verifyEmail(email);
    if (isEmailVerified.error) {
      handleError("email", isEmailVerified.error);
      return;
    } else {
      setFormState({type: "set_success", payload: "email"});
    }

    await sendFormData();
    setError(null);
  }

  // Reveal animation
  const {
    observedRef,
    springAnimate: [layoutTransformSpring, layoutOpacitySpring],
  } = useObservedSprings(
    [...animation.layout.revealSlow.start],
    [...animation.layout.revealSlow.end.map((x) => x())],
    [useSpring, useSpring]
  );

  return (
    <div className="form-container mx-auto max-w-[512px] w-full mt-4 md:mt-6">
      <a.form
        className="grid"
        onSubmit={handleSubmit}
        ref={observedRef}
        style={{
          transform: to(layoutTransformSpring.y, (y) => `translateY(${y}px)`),
          opacity: to(layoutOpacitySpring.opacity, (op: number) => `${op}`),
        }}
      >
        <ContactFormInput
          id="contact-form/name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          maxLength={100}
          state={formState.name}
          error={error}
          disabled={areInputsDisabled}
          required
        >
          Name
        </ContactFormInput>
        <ContactFormInput
          id="contact-form/email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          maxLength={320}
          state={formState.email}
          error={error}
          disabled={areInputsDisabled}
          required
        >
          Email
        </ContactFormInput>
        <ContactFormInput
          id="contact-form/message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          type="textarea"
          maxLength={1500}
          state={formState.message}
          error={error}
          disabled={areInputsDisabled}
          required
        >
          Message
        </ContactFormInput>
        <ContactFormSubmitButton formSending={formSending} disabled={isSubmitDisabled} />
      </a.form>
      <ContactFormSuccessModal open={successModalOpen} setOpen={setSuccessModalOpen} />
    </div>
  );
}
