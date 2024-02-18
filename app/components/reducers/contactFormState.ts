import { useReducer } from "react";
import { ContactFormInputName, ContactFormInputState, ContactFormState } from "../sections/contact/props";

type FormStateReducerAction = {
  type: `set_${ContactFormInputState}`;
  payload: ContactFormInputName;
};

const initialFormState: ContactFormState = {
  name: "empty",
  email: "empty",
  message: "empty",
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

const contactFormStateReducer = () => useReducer(formStateReducer, initialFormState);
export default contactFormStateReducer;