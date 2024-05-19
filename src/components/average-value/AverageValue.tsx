import "./styles.scss";

type AverageValueProps = {
  value: string;
};

const AverageValue: React.FC<AverageValueProps> = ({ value }) => {
  return <p className="average-value">{`Average Order Value = £${value}`}</p>;
};

export default AverageValue;
