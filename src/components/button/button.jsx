import "./button.css";

const Button = ({ text, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    onClick();
  };

  return (
    <a className="btn-a" onClick={handleClick} href="#">
      {text}
    </a>
  );
};

export default Button;
