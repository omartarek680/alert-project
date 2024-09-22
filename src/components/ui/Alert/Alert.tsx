import { CircleX } from 'lucide-react';
import { AlertTypes } from "../../../types";
import "./index.scss";
import { ReactNode } from "react";
interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-error",
  icon,
  title,
  description,
  children,
}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <div className="alert-close"><CircleX/></div>
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
