import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="contaiiner">
        Weather App
        <Weather city="New York" />
        This is the first app with react
      </div>
    </div>
  );
}
