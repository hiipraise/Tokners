import "./presalebox.css";


const PresaleBox = ({
  quarter,
  backgroundColor,
  boxShadow,
  phase,
  date,
  exchange,
  softCap,
  hardCap,
}) => {
  return (
    <div className="phasecard">
      <p
        className="quarter"
        style={{
          backgroundColor: backgroundColor,
          boxShadow: boxShadow,
        }}
      >
        {quarter}
      </p>
      <div>
        <p>{phase}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{exchange}</p>
        <p>{softCap}</p>
        <p>{hardCap}</p>
      </div>
    </div>
  );
};

export default PresaleBox;
