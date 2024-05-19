import "./styles.scss";

type AverageValueProps = {
  value: string;
};

const AverageValue: React.FC<AverageValueProps> = ({ value }) => {
  if (value) {
    return <p className="average-value">{`Average Order Value = £${value}`}</p>;
  }

  return (
    <p className="average-value">
      Click the button below to get order average!
    </p>
  );
};

export default AverageValue;
