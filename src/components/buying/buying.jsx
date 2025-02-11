import "./buying.css";

const Buying = ({ text, count }) => {
  return (
    <div className="buying">
      <small>{count}</small>
      <p>{text}</p>
    </div>
  );
};

export default Buying;
