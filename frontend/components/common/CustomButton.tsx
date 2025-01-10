import { NextPage } from "next";
import { ReactNode, MouseEvent } from "react";
import Spinner from "./Spinner";

interface Props {
  type: "button" | "submit" | "reset";
  className: string;
  isLoading: boolean;
  onClick?:(e:MouseEvent<HTMLButtonElement>)=> void;
  disabled?: boolean;
  children: ReactNode;
  spinnerStyles: string;
  
}

const CustomButton: NextPage<Props> = ({
  type,
  className,
  isLoading,
  disabled,
  spinnerStyles,
  children,
  onClick
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!disabled && !isLoading && onClick) {
          onClick(e);
        }
      };
  return (
    <button type={type} onClick={handleClick} className={className} disabled={disabled || isLoading}>
      {isLoading ? <Spinner containerStyles={spinnerStyles} /> : children}
    </button>
  );
};

export default CustomButton;
