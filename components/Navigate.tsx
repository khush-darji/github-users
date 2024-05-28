import Link from "next/link";
import Label from "./Label";

interface NavigateProps {
  label: string;
  url?: string;
}

const Navigate: React.FC<NavigateProps> = ({ label, url }) =>
  url && (
    <Link href={url}>
      <Label label={label} value={url}/>
    </Link>
  );

export default Navigate;
