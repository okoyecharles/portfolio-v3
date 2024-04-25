import { SyntheticEvent, useEffect, useRef } from "react";
import { ContactFormSuccessModalProps } from "./props";
import { a, useSpring } from "@react-spring/web";
import Link from "../../clickable/Link";
import { socials } from "@/app/data/navigation";
import Button from "../../clickable/Button";
import PlaneGraphicLarge from "../../svg/abstract/PlaneGraphicLarge";
import PlaneGraphicSmall from "../../svg/abstract/PlaneGraphicSmall";

export default function ContactFormSuccessModal({
  open,
  setOpen,
}: ContactFormSuccessModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  function handleBgClose(event: SyntheticEvent) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function closeModal() {
    setOpen(false);
  }

  const openModalSpring = useSpring({
    scale: open ? 1 : 0.95,
    y: open ? 0 : 16,
    opacity: open ? 1 : 0,
    config: {
      tension: 300,
    },
  });

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, [open])

  return (
    <div
      className={`
        form-success-background fixed inset-0 bg-black/30 dark:bg-black/50 z-50 transition-opacity duration-300
        ${open ? "visible" : "invisible pointer-events-none"}
      `}
    >
      <div
        className="form-success-container relative w-full h-full"
        onClick={handleBgClose}
      >
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[calc(100%-48px)] max-w-[480px] md:max-w-[720px]
          `}
        >
          <a.div
            className={`
              rounded-[10px] overflow-hidden
              bg-white dark:bg-black
              ring-grey-9 dark:ring-grey-2 ring-1
              grid grid-cols-1 md:grid-cols-2 h-[450px]
            `}
            style={openModalSpring}
          >
            <article className="p-6 bg-grey-fb dark:bg-grey-12 dark:md:bg-black ring-grey-d dark:ring-grey-2 ring-1 w-full flex flex-col relative isolate">
              <div className="contact-form-success-mobile-graphic absolute inset-0 -z-10 flex justify-center ring-1 md:hidden">
                <div className="h-[450px] w-[484px]">
                  <PlaneGraphicSmall />
                </div>
              </div>
              <header className="flex flex-col items-center md:items-start">
                <h3 className="font-visby font-extrabold text-[22px] md:text-[24px] leading-[1] text-grey-1 dark:text-grey-d">
                  Thanks for reaching out <span className="font-lato font-black">!</span>
                </h3>
                <span
                  className="text-sm text-grey-9 dark:text-grey-6"
                  aria-live="polite"
                  aria-hidden={!open}
                >
                  Your message was sent successfully.
                </span>
              </header>
              <div className="grid gap-4 my-4">
                <p className="text-center md:text-left">
                  I will be in touch shortly, I aim to respond to inquiries within 24
                  hours.
                </p>
                <p className="text-center md:text-left">
                  In the mean time, feel free to explore{" "}
                  <Link internal href="#more-projects" onClick={() => setOpen(false)}>
                    more projects
                  </Link>{" "}
                  I have worked on 🚀
                </p>
                <p className="text-center md:text-left">
                  Want to connect further? <br /> You can find me hanging out on{" "}
                  <Link href={socials.find((social) => social.name === "X")?.link || ""}>
                    X
                  </Link>
                  .
                </p>
              </div>
              <Button
                className="mt-auto mx-auto md:mx-0 w-fit"
                variant="black"
                onClick={closeModal}
                buttonRef={closeButtonRef}
                ariaLabel="close modal"
              >
                Close
              </Button>
            </article>
            <div className="contact-form-success-desktop-graphic h-full justify-center items-end hidden md:flex dark:bg-grey-12">
              <PlaneGraphicLarge />
            </div>
          </a.div>
        </div>
      </div>
    </div>
  );
}
