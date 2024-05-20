import "./styles.scss";

type AverageValueDisplayProps = {
  value: string;
};

const AverageValueDisplay: React.FC<AverageValueDisplayProps> = ({ value }) => {
  const displayText = value
    ? `The order average is`
    : "Click the button below to get order average!";

  return (
    <div className="average-value-display">
      <h2 className="average-value-display__text">{displayText}</h2>
      {value && <h1 className="average-value-display__value">{`£${value}`}</h1>}
    </div>
  );
};

export default AverageValueDisplay;
