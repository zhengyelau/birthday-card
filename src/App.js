import logo from "./logo.svg";
// import './App.css';
import "./birthday.css";
import "./firework.css";
import "./patrick-star.css"

function App() {
  return (
    <>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>

      <div className="card">
        <div className="outside">
          <div className="front">
            <p>奇生日快乐</p>
            <div className="cake">
              <div className="top-layer"></div>
              <div className="middle-layer"></div>
              <div className="bottom-layer"></div>
              <div className="candle"></div>
            </div>
          </div>
          <div className="back">
            <div class="patrick-star-face">
              <div class="eye-group">
                <div class="eyebrow eyebrow-left"></div>
                <div class="eyebrow eyebrow-right"></div>
                <div class="eye eye-left"></div>
                <div class="eye eye-right"></div>
              </div>
              <div class="mouth-group">
                <div class="mouth"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <p> ahhahahahahahah</p>
          <h1>&#127873;</h1>
        </div>
      </div>
    </>
  );
}

export default App;
