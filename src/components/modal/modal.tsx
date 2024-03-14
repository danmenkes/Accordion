import { ReactNode } from "react";
import "./modal.css";

type Props = {
  id?: string;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
};

const Modal = ({ id, header, body, footer, onClose }: Props) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          <h2>
            {body ? (
              body
            ) : (
              <div>
                <p>Modal Body</p>
              </div>
            )}
          </h2>
        </div>
        <div className="footer">
          <h2>
            {footer ? (
              footer
            ) : (
              <div>
                <p>Modal footer</p>
              </div>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
