import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as ReactDOMClient from "react-dom/client";
// import CodeCell from "./components/code-cell";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";

const App = () => {
  return (
    <Provider store={store}>
      <CellList />
    </Provider>
  );
};

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
