import QRCode from "react-qr-code";
import "./QrCode.css";
import { useState } from "react";

const QrCode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="code"
          placeholder="enter value"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          disabled={input?.trim() === ""}
          onClick={() => {
            setQrCode(input);
          }}
        >
          Generate
        </button>
      </div>
      <br />
      <br />
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
      <br />
      <br />
    </div>
  );
};

export default QrCode;
