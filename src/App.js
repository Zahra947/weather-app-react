import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="contaiiner">
        <Weather city="New York" />
      </div>
    </div>
  );
}
