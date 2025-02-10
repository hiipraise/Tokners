import "./quarterreview.css";

const QuarterReview = ({
  quarter,
  year,
  backgroundColor,
  boxShadow,
  tasks,
}) => {
  return (
    <div className="quarterbox">
      <div className="quarter-year">
        <p
          className="quarter"
          style={{
            backgroundColor: backgroundColor,
            boxShadow: boxShadow,
          }}
        >
          {quarter}
        </p>
        <p className="dot-year">
          <i style={{backgroundColor:backgroundColor}}></i>
          <b>{year}</b>
        </p>
      </div>
      
      <small className="numberlist">
        {tasks && tasks.length > 0 && (
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong style={{ color: backgroundColor }}>
                  {String(index + 1).padStart(2, "0")}
                </strong>{" "}
                {task}
              </li>
            ))}
          </ol>
        )}
      </small>
    </div>
  );
};

export default QuarterReview;
