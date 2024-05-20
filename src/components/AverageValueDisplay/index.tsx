import "./styles.scss";

type AverageValueDisplayProps = {
  value: string;
};

const AverageValueDisplay: React.FC<AverageValueDisplayProps> = ({ value }) => {
  if (value) {
    return (
      <p className="average-value-display">{`Average Order Value = £${value}`}</p>
    );
  }

  return (
    <p className="average-value-display">
      Click the button below to get order average!
    </p>
  );
};

export default AverageValueDisplay;
