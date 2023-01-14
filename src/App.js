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
            <p>奇的生日卡</p>
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
          <p>祝你在每个成长的日子里都开开心心，虽然这次的生日没能给你准备好吃的蛋糕，生日礼物，但不要觉得遗憾，因为此刻你拥有了世界上最真心的祝福，生日快乐啊&#128512;</p>
          <h1>&#127873;</h1>
        </div>
      </div>
    </>
  );
}

export default App;
