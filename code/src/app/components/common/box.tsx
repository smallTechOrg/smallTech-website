import { BoxProps } from "@/app/models/box";
import Image from "next/image";
import { Button } from "./button";

export default function Box({ image,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  className,
  children }: BoxProps) {

  return (
    <div
      className={`
        relative  
        rounded-[30px] 
        bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)]
        shadow-[0_6px_20px_0_rgba(0,0,0,0.4)]
        p-6 flex flex-col items-center text-center
        my-3
        md:w-[450px]
        md:h-[530px]
        h-[200px]
        ${className || ""}
      `}
    >
      {/* <div className=" flex flex-col items-center"> */}
      {/* ICON */}
      <div className="mb-4">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="mx-auto object-contain"
        />
      </div>
      <div className="">
        {/* TITLE */}
        <h3 className="font-semibold mt-2 text-expresso">
          {title}
        </h3>

        {/* SUBTITLE */}
        <p className="text-liver-brown mt-1 text-center">
          {subtitle}
        </p>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-liver-brown mt-15 hidden md:block">
            {description}
          </p>
        )}
        {children}

        {/* BUTTON */}
        {buttonText && (
          <div className="mt-6 absolute bottom-15 left-0 right-0">
            <Button onClick={onButtonClick} text={buttonText} />
          </div>
        )}
      </div>
    </div>
    // </div>
  );
}
