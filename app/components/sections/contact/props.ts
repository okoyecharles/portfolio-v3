import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { FormValidationError } from "../../utils/validation";

export type ContactFormInputName = 'name' | 'email' | 'message';
export type ContactFormData = Record<ContactFormInputName, string>;

export type ContactFormInputState = 'empty' | 'typing' | 'loading' | 'success' | 'error';
export type ContactFormState = Record<ContactFormInputName, ContactFormInputState>;

export type ContactFormInputProps = {
  type?: 'input' | 'textarea';
  id: string;
  name: string;
  value: string;
  children: string;
  placeholder: string;
  required?: boolean;
  state: ContactFormInputState;
  maxLength?: number;
  error: FormValidationError | null;
  disabled?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export type ContactFormSuccessModalProps = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

export type ContactFormSubmitButtonProps = {
  formSending: boolean;
  disabled: boolean;
}