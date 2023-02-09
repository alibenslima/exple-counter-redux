import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { DEC, INC, TOG } from "./redux/Action";

function App() {
  const { count, isShown } = useSelector((state) => state);
  const dispatche = useDispatch();
  const plus = () => dispatche(INC());
  const moins = () => dispatche(DEC());
  const show = () => dispatche(TOG());
  return (
    <div className="App">
      <button onClick={show}> {isShown ? "Hide" : "Show"}</button>
      {isShown ? (
        <div>
          <h1>Counter : {count}</h1>
          <button onClick={plus}>+</button>
          <button onClick={moins}>-</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
