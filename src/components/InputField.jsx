import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";

const InputField = ({ fieldName, regexp, onValidChange }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const prevValueRef = useRef(value);
  const prevValidRef = useRef(isValid);

  useEffect(() => {
    if (prevValueRef.current !== value || prevValidRef.current !== isValid) {
      onValidChange(fieldName, isValid, value);
      prevValueRef.current = value;
      prevValidRef.current = isValid;
    }
  }, [isValid, value, fieldName, onValidChange]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    const valid = regexp.test(newValue);
    setIsValid(valid);
  };

  return (
    <>
      <label className={styles.label} htmlFor={fieldName}>
        {fieldName}
      </label>
      <input
        className={styles.input}
        id={fieldName}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={`Escribe el ${fieldName} del 'pokímon'.`}
        style={{ borderColor: isValid ? "black" : "red" }}
      />
      {!isValid && <p style={{ color: "red" }}>Invalid input</p>}
    </>
  );
};

export default InputField;
