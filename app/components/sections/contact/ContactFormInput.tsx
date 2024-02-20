import { ContactFormInputProps, ContactFormInputState } from "@/app/components/sections/contact/props";
import { a, useSpringRef, useTransition } from "@react-spring/web";
import { useEffect } from "react";
import InputErrorIcon from "@/app/components/svg/abstract/InputErrorIcon";
import InputLoadingIcon from "@/app/components/svg/abstract/InputLoadingIcon";
import InputVerifiedIcon from "@/app/components/svg/abstract/InputVerifiedIcon";

export default function ContactFormInput({
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
    from: {opacity: 0, rotate: -20, scale: 0.9},
    enter: {opacity: 1, rotate: 0, scale: 1},
    leave: {opacity: 0, rotate: 0, scale: 0.8},
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
