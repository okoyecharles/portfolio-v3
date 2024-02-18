import { ChangeEvent, FormEvent, useEffect, useMemo, useReducer, useState } from "react";
import {
  ContactFormData,
  ContactFormInputName,
  ContactFormInputProps,
  ContactFormInputState,
  ContactFormSubmitButtonProps,
} from "./props";
import Button from "../../clickable/Button";
import PlaneIcon from "../../svg/icons/PlaneIcon";
import InputLoadingIcon from "../../svg/abstract/InputLoadingIcon";
import InputVerifiedIcon from "../../svg/abstract/InputVerifiedIcon";
import InputErrorIcon from "../../svg/abstract/InputErrorIcon";
import {
  FormValidationError,
  validateEmail,
  validateMessage,
  validateName,
  verifyEmail,
} from "../../utils/validation";
import Loading from "../../svg/icons/Loading";
import contactFormStateReducer from "../../reducers/contactFormState";
import { a, useSpringRef, useTransition } from "@react-spring/web";

export default function ContactForm() {
  const initialFormData: ContactFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formSending, setFormSending] = useState<boolean>(false);
  const [formState, setFormState] = contactFormStateReducer();
  const [error, setError] = useState<FormValidationError | null>(null);
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
        setFormState({ type: "set_typing", payload: input });
      } else {
        setFormState({ type: "set_empty", payload: input });
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
    setFormState({ type: "set_error", payload: name });
    setError(error);
    setFormSending(false);
  }

  function clearFormData() {
    setFormData(initialFormData);
  }

  async function sendFormData(e: FormEvent<HTMLFormElement>) {
    const API_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_API_URL!;
    const formSubmissionData = new FormData(e.target as HTMLFormElement);

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
    } catch (err) {
      setFormSending(false);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSending(true);
    const { name, email, message } = formData;

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

    setFormState({ type: "set_loading", payload: "email" });
    const isEmailVerified = await verifyEmail(email);
    if (isEmailVerified.error) {
      handleError("email", isEmailVerified.error);
      return;
    } else {
      setFormState({ type: "set_success", payload: "email" });
    }

    await sendFormData(e);
    setError(null);
  }

  return (
    <form className="grid" onSubmit={handleSubmit}>
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
      >
        Message
      </ContactFormInput>
      <ContactFormSubmitButton formSending={formSending} disabled={isSubmitDisabled} />
    </form>
  );
}

function ContactFormSubmitButton({
  formSending,
  disabled,
}: ContactFormSubmitButtonProps) {
  const submitButtonStateTransRef = useSpringRef();
  const submitButtonStateTransition = useTransition(formSending, {
    ref: submitButtonStateTransRef,
    keys: null,
    from: { opacity: 0, x: formSending ? 0 : -8, scale: 0.9 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: formSending ? 5 : 0, scale: 0.9 },
    exitBeforeEnter: true
  });
  useEffect(() => {
    submitButtonStateTransRef.start();
  }, [formSending]);

  return (
    <div className="flex justify-center mt-8 form-button">
      <Button disabled={disabled}>
        Send{" "}
        {submitButtonStateTransition((style, sending) => (
          <a.div style={style}>{sending ? <Loading /> : <PlaneIcon />}</a.div>
        ))}
      </Button>
    </div>
  );
}

function ContactFormInput({
  type = "input",
  id,
  name,
  value,
  children,
  placeholder,
  maxLength,
  state,
  error,
  onChange,
  disabled,
}: ContactFormInputProps) {
  const className = {
    shared: `
      text-sm rounded-[6px] py-3 px-3 pr-9 outline-none w-full
      
      ring-0 ring-grey-ea dark:ring-grey-3
      focus:ring-4
      
      border border-grey-ea dark:border-grey-3
      hover:border-grey-b dark:hover:border-grey-5
      focus:border-grey-9 dark:focus:border-grey-7

      bg-white dark:bg-black
      placeholder:text-grey-9 dark:placeholder:text-grey-6
      text-grey-4 dark:text-grey-b

      disabled:bg-grey-fb dark:disabled:bg-grey-0a
      disabled:border-grey-ea dark:disabled:border-grey-3
      
      transition
    `,
  };

  const inputStateTransRef = useSpringRef();
  const inputStateTransition = useTransition(state, {
    ref: inputStateTransRef,
    keys: null,
    from: { opacity: 0, rotate: -20, scale: 0.9 },
    enter: { opacity: 1, rotate: 0, scale: 1 },
    leave: { opacity: 0, rotate: 0, scale: 0.8 },
  });
  useEffect(() => {
    inputStateTransRef.start();
  }, [state]);

  return (
    <>
      <label
        htmlFor={id}
        className={`
          relative
          text-xs font-semibold
          mb-2 mt-4 first-of-type:mt-0
          ${state === "error" ? "text-error dark:text-error-dark" : ""}
          transition-colors
        `}
      >
        {children}
        {/* temporary */}
        <span className="absolute right-0 top-0 select-none text-error dark:text-error-dark">
          {state === "error" && error ? error.message : ""}
        </span>
      </label>
      <div className="relative input-container">
        {type === "input" ? (
          <input
            id={id}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className={`${className.shared}`}
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={disabled}
          />
        ) : (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`${className.shared} resize-none`}
            placeholder={placeholder}
            rows={4}
            maxLength={maxLength}
            disabled={disabled}
          />
        )}
        {inputStateTransition((style, state) => {
          const icons: Record<ContactFormInputState, React.ReactNode> = {
            error: <InputErrorIcon />,
            loading: <InputLoadingIcon />,
            success: <InputVerifiedIcon />,
            typing: "",
            empty: "",
          };
          return (
            <a.div
              className={`
                input-status
                absolute top-4 right-3
              `}
              style={style}
            >
              {icons[state]}
            </a.div>
          );
        })}
      </div>
    </>
  );
}
