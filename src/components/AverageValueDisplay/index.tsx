import "./styles.scss";

type AverageValueDisplayProps = {
  value: string;
};

const AverageValueDisplay: React.FC<AverageValueDisplayProps> = ({ value }) => {
  if (value) {
    return (
      <div className="average-value-display">
        <p>The order average is...</p>
        <p>{`£${value}`}</p>
      </div>
    );
  }

  return (
    <p className="average-value-display">
      Click the button below to get order average!
    </p>
  );
};

export default AverageValueDisplay;
