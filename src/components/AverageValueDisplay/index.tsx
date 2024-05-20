import "./styles.scss";

type AverageValueDisplayProps = {
  value: string;
  className?: string;
};

const AverageValueDisplay: React.FC<AverageValueDisplayProps> = ({
  value,
  className,
}) => {
  if (value) {
    return <p className={className}>{`The order average is... £${value}`}</p>;
  }

  return (
    <p className={className}>Click the button below to get order average!</p>
  );
};

export default AverageValueDisplay;
