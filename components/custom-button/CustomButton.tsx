"use client";

import { SVGProps } from "react";
import { Button } from "flowbite-react";
import { IconType } from "react-icons";

interface ICustomButton {
  title: string;
  textColor?: string;
  bgColor?: string;
  otherClass?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "reset" | "submit" | "button";
  icon?: IconType;
  svg?: SVGProps<SVGSVGElement>;
}

const CustomButton = ({
  title,
  icon: Icon,
  type,
  bgColor,
  otherClass,
  textColor,
  size,
  svg,
}: ICustomButton) => {
  return (
    <Button
      className={`${textColor ? textColor : "text-black-raisin"} ${
        bgColor ? bgColor : "bg-yellow-bus"
      } ${otherClass}`}
      type={type ? type : "button"}
      size={size ? size : "md"}
    >
      {title}
      {Icon && <Icon className="ml-2" />}
      {svg && svg}
    </Button>
  );
};

export default CustomButton;
