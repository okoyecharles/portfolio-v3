"use client";
import Button from "../../clickable/Button";

function SkipToContent() {
  return (
    <div
      className={`
      absolute top-0 left-1/2 font-medium 
      -translate-x-1/2 -translate-y-full 
      focus-within:translate-y-4 z-50
      transition-transform
    `}
    >
      <a href="#content">
        <Button>Skip to content</Button>
      </a>
    </div>
  );
}

export default SkipToContent;
