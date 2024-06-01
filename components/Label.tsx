interface LabelProps {
  label?: string;
  value: string | number | undefined;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ label, value, className = "" }) =>
  label ? (
    <p className={`text-gray-600 ${className}`}>
      {label} : {value ? value : "N/A"}
    </p>
  ) : (
    (value && <p className={`text-gray-600 ${className}`}>{value}</p>) || ""
  );

export default Label;
