import Button from "./Button";
import InputField from "./InputField";
import styles from "./CustomForm.module.css";
import { useState } from "react";

const CustomForm = ({onSubmit}) => {

  const [formState, setFormState] = useState({
    nombre: { value: '', isValid: false },
    mote: { value: '', isValid: false },
  });

  const handleValidChange = (name, isValid, value) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: { value, isValid }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = Object.values(formState).every(input => input.isValid);

    if (allValid) {
      const formData = Object.fromEntries(
        Object.entries(formState).map(([key, { value }]) => [key, value])
      );
      onSubmit(formData)
      console.log('Formulario válido:', formData);
    } else {
      console.log('Formulario inválido');
    }
  };

  return (
    <form className={styles.PokeForm}>
      <InputField 
      regexp={/^(?! )[^\.]{3,}$/}
      fieldName={"nombre"} 
      onValidChange={handleValidChange}
      />
      <InputField 
      regexp={/^[^\\.]{6,}$/}
      fieldName={"mote"} 
      onValidChange={handleValidChange}
      />
      <Button type={"submit"} onClick={handleSubmit}/>
    </form>
  );
};

export default CustomForm;
