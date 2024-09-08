import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function main() {
  const rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("mount target element is not found");

  const root = createRoot(rootEl);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

main();
