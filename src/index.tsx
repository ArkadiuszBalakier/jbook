import "bulmaswatch/superhero/bulmaswatch.min.css";
import * as ReactDOMClient from "react-dom/client";
// import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
