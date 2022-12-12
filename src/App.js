import "./App.css";
import "./components/Weather.css";
import Weather from "./components/Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
      </div>
    </div>
  );
}
