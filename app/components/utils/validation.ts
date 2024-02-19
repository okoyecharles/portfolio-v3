export type FormValidationError = {
  message: string;
  field: 'name' | 'email' | 'message';
}

export type FormValidation = {
  success: boolean;
  error: FormValidationError | null;
}

const defaultValidation: FormValidation = {
  error: null,
  success: true
};

function assignError(
  validation: FormValidation,
  errorField: FormValidationError['field'],
  errorMessage: FormValidationError['message']
): void {
  validation.success = false;
  validation.error = {
    message: errorMessage,
    field: errorField
  }
}

export function validateName(name: string): FormValidation {
  const returnValidation = Object.assign({}, defaultValidation);
  return returnValidation;
}

export function validateEmail(email: string): FormValidation {
  const returnValidation = Object.assign({}, defaultValidation);
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!EMAIL_REGEX.test(email)) {
    assignError(returnValidation, 'email', 'Please enter a valid email');
    return returnValidation;
  }

  return returnValidation;
}

export async function verifyEmail(email: string): Promise<FormValidation> {
  const returnValidation = Object.assign({}, defaultValidation);

  const API_URL = `${process.env.NEXT_PUBLIC_EMAIL_VERIFICATION_API_URL!}?email=${email}`;
  const API_KEY = process.env.NEXT_PUBLIC_EMAIL_VERIFICATION_API_KEY!;
  const API_HOST = process.env.NEXT_PUBLIC_EMAIL_VERIFICATION_API_HOST!;

  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  }

  try {
    const response = await fetch(API_URL, fetchOptions);

    if (response.status === 200) {
      const verificationResult = await response.json();
      if (verificationResult.status === 'invalid') {
        assignError(returnValidation, "email", "This email does not exist");
        return returnValidation;
      }
    }
  } catch(err) {
    assignError(returnValidation, "email", "Something went wrong");
    return returnValidation;
  }

  return returnValidation;
}

export function validateMessage(message: string): FormValidation {
  const returnValidation = Object.assign({}, defaultValidation);
  const MIN_MESSAGE_LENGTH = 15;

  if (message.length < MIN_MESSAGE_LENGTH) {
    assignError(
      returnValidation,
      'message',
      `Message cannot be less than ${MIN_MESSAGE_LENGTH} characters`
    );
  }

  return returnValidation;
}
