import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  ContactFormData,
  ContactFormInputName,
  ContactFormInputProps,
  ContactFormInputState,
  ContactFormState,
} from "./props";
import Button from "../../clickable/Button";
import PlaneIcon from "../../svg/icons/PlaneIcon";
import InputLoadingIcon from "../../svg/abstract/InputLoadingIcon";
import InputVerifiedIcon from "../../svg/abstract/InputVerifiedIcon";
import InputErrorIcon from "../../svg/abstract/InputErrorIcon";
import {
  FormValidation,
  FormValidationError,
  validateEmail,
  validateMessage,
  validateName,
  verifyEmail,
} from "../../utils/validation";
import Loading from "../../svg/icons/Loading";

type FormStateReducerAction = {
  type: `set_${ContactFormInputState}`;
  payload: ContactFormInputName;
};
function formStateReducer(
  state: ContactFormState,
  action: FormStateReducerAction
): ContactFormState {
  switch (action.type) {
    case "set_error":
      return { ...state, [action.payload]: "error" };
    case "set_empty":
      return { ...state, [action.payload]: "empty" };
    case "set_typing":
      return { ...state, [action.payload]: "typing" };
    case "set_success":
      return { ...state, [action.payload]: "success" };
    case "set_loading":
      return { ...state, [action.payload]: "loading" };
    default:
      return state;
  }
}

export default function ContactForm() {
  const initialFormData: ContactFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formSending, setFormSending] = useState<boolean>(false);

  const initialFormState: ContactFormState = {
    name: "empty",
    email: "empty",
    message: "empty",
  };
  const [formState, setFormState] = useReducer(
    formStateReducer,
    initialFormState
  );

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function processChange() {
    (["name", "email", "message"] as const).forEach((input) => {
      const inputValue = formData[input];

      if (inputValue.trim()) {
        setFormState({ type: "set_typing", payload: input });
      } else {
        setFormState({ type: "set_empty", payload: input });
      }
    });
  }
  useEffect(processChange, [formData]);

  async function submitForm(e: FormEvent<HTMLFormElement>) {
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
      setFormSending(false);
    } catch (err) {
      setFormSending(false);
    }
  }

  const [error, setError] = useState<FormValidationError | null>(null);
  function handleError(name: ContactFormInputName, error: FormValidationError) {
    setFormState({ type: "set_error", payload: name });
    setError(error);
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

    await submitForm(e);
    setError(null);
  }

  function handleSubmitDisabled() {
    const inputStates: Array<ContactFormInputState> = [
      formState.name,
      formState.email,
      formState.message,
    ];

    const someInputEmpty = inputStates.some((state) => state === "empty");
    const someInputLoading = inputStates.some((state) => state === "loading");

    if (someInputEmpty || someInputLoading) return true;
    return false;
  }
  const isSubmitDisabled = useMemo(handleSubmitDisabled, [formState]);

  function handleInputsDisabled() {
    const inputStates: Array<ContactFormInputState> = [
      formState.name,
      formState.email,
      formState.message,
    ];

    const someInputLoading = inputStates.some((state) => state === "loading");
    return someInputLoading;
  }
  const areInputsDisabled = useMemo(handleInputsDisabled, [formState]);

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
      <div className="flex justify-center mt-8 form-button">
        <Button disabled={isSubmitDisabled}>
          Send { formSending ? <Loading /> : <PlaneIcon /> }
        </Button>
      </div>
    </form>
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
  disabled
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

  return (
    <>
      <label
        htmlFor={id}
        className={`
          relative
          text-xs font-bold
          mb-2 mt-4 first-of-type:mt-0
          ${state === "error" ? "text-error dark:text-error-dark" : ""}
        `}
      >
        {children}
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
        <div
          className={`
            input-status
            absolute top-4 right-3
          `}
        >
          {state === "error" ? (
            <InputErrorIcon />
          ) : state === "loading" ? (
            <InputLoadingIcon />
          ) : state === "success" ? (
            <InputVerifiedIcon />
          ) : null}
        </div>
      </div>
    </>
  );
}
