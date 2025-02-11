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
      <div className="phase-date">
        <p className="phase">{phase}</p>
        <p className="date">{date}</p>
      </div>
      <div className="bnb">
        <p className="bnbexchange">{exchange}</p>
        <p className="softcap"><span>Soft cap: </span>{softCap}</p>
        <p className="hardcap"><span>Hard cap: </span>{hardCap}</p>
      </div>
    </div>
  );
};

export default PresaleBox;
