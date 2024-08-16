const Card = ({ data }) => {
  const capitalizeText = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <>
      {data == null ? (
        <p>Esperando ...</p>
      ) : (
        <p>
          {capitalizeText(data.nombre)} ahora se llama: {capitalizeText(data.mote)}
        </p>
      )}
    </>
  );
};

export default Card;
