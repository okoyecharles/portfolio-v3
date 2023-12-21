import Button from "../../buttons/Button";
import DownloadIcon from "../../svg/DownloadIcon";
import Section from "../Section";
import HomeBackground from "./HomeBackground";

export default function Home() {
  return (
    <Section padding="py-[150px] md:py-[192px]">
      <header className="relative md:self-center">
        <h1 className="text-grey-1 dark:text-grey-d text-[64px] lg:text-[100px] leading-[110%] font-visby uppercase font-extrabold ">
          Okoye Charles
        </h1>
        <div className="font-extrabold text-grey-2 dark:text-grey-b text-[24px] leading-[24px] font-mono absolute -top-[28px] -left-1 -rotate-[.02turn] md:-top-3 md:-left-8 select-none">
          I<span className="text-blue-200 dark:text-blue-d-200">'</span>m
        </div>
        <h3 className="uppercase dark:text-grey-6 font-semibold md:font-medium md:text-[18px] md:text-center">I embrace the digital world</h3>
      </header>
      <p className="text-[16px] leading-[140%] py-9 max-w-[700px] md:text-[18px] md:text-center md:self-center lg:py-12">
        I can help you build a product, feature, or website. Look through my
        work and experience! If you are interested, I am available for hire
      </p>
      <div className="call-to-action-buttons flex flex-wrap gap-6 md:self-center">
        <Button>Check out my work</Button>
        <Button variant="black">
          <span>Resume</span>
          <DownloadIcon />
        </Button>
      </div>
      <HomeBackground />
    </Section>
  );
}
