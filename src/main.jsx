import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const RedirectApp = () => {
  useEffect(() => {
    if (window.location.hostname === "m05.vercel.app") {
      window.location.replace("https://devmahmoud.vercel.app");
    }
  }, []);
  return (
    <div style={{ textAlign: "center", padding: "50px", color: "#fff" }}>
      <h1>Old Domain Detected</h1>
      <p>This site has moved. Please visit our new domain:</p>
      <a href="https://devmahmoud.vercel.app">https://devmahmoud.vercel.app</a>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RedirectApp />
  </React.StrictMode>
);
