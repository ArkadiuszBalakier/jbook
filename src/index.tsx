import "bulmaswatch/superhero/bulmaswatch.min.css";
import * as ReactDOMClient from "react-dom/client";
// import CodeCell from "./components/code-cell";
import { Provider } from "react-redux";
import { store } from "./state";
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
