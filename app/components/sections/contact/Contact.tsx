"use client";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import SectionDescription from "../SectionDescription";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section name="contact" id="contact" padding="pt-12 pb-16 md:py-8 md:pb-[160px]">
      <SectionHeader>Contact Me</SectionHeader>
      <SectionDescription>
        You might want to develop a website, application or discuss anything
        related. Feel free leave a message below
      </SectionDescription>
      <div className="form-container mx-auto max-w-[512px] w-full mt-4 md:mt-6">
        <ContactForm />
      </div>
    </Section>
  );
}
