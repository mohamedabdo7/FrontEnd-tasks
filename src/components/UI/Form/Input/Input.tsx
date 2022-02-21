import React from "react";
import "./Input.scss";
import { useField } from "formik";

type InputProps = {
  iconClick?: () => void;
  inputChange?: (value: string) => void;
  name: string;
  placeholder?: string;
  type: string;
  icon?: string;
  isIcon?: boolean;
  className?: string;
  pattern?: string;
  disabled?: boolean;
  autoComplete?: string;
  onChangeValue?: (value: string, fieldName: string) => void;
  isEdit?: boolean;
  inputMode?:
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
};

const Input: React.FC<InputProps> = ({
  icon,
  isIcon,
  iconClick,
  disabled,
  inputChange,
  onChangeValue,
  isEdit,
  type,
  autoComplete,
  inputMode,
  ...props
}) => {
  const [field, meta] = useField(props);
  // const { setFieldValue } = useFormikContext();
  // const onInputChange = (value: string) => {
  //   if (inputChange) {
  //     inputChange(value);
  //   }
  // };
  return (
    <div className="input-container">
      <input
        className={disabled ? "disabled" : ""}
        {...props}
        {...field}
        // type={type || "text"}
        // inputMode={inputMode || "text"}
        // onKeyUp={(e: any) => {
        //   const value = e.target.value;
        //   // console.log("value", field.name, field.value);
        //   setFieldValue(field.name, value);
        //   if (onChangeValue) onChangeValue(value, field.name);
        //   onInputChange(value);
        // }}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      {isIcon ? (
        <img className="icon" src={icon} alt="icon" onClick={iconClick}></img>
      ) : null}

      <div className="error ">
        {meta.touched && meta.error ? (
          <span className="error">{meta.error}</span>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
