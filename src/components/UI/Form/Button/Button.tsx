import React from "react";

type ButtonProps = {
  name: string;
  btnType?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isMediaUploading?: boolean;
  isSubmitting?: boolean;
  isDisabled?: boolean;
  saveData?: any;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  isSubmitting,
  isMediaUploading,
  name,
  type,
  saveData,
  btnType,
  isDisabled,
  className,
}) => {
  return (
    <div className={`btn-container ${className ? className : ""}`}>
      <button
        type={type}
        disabled={isDisabled || isMediaUploading || isSubmitting}
        onClick={saveData}
        className={btnType}
      >
        {/* {!isSubmitting ? name : <Spinner />} */}
        {name}
      </button>
    </div>
  );
};

export default Button;
