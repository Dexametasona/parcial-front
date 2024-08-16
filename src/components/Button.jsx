import styles from "./Button.module.css";

const Button = ({ onClick, type }) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      Enviar
    </button>
  );
};

export default Button;
