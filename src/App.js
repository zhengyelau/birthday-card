import logo from './logo.svg';
// import './App.css';
import "./birthday.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       敬请期待
    //     </p>
    //   </header>
    // </div>
    <div className='firework'>
      <div className='card'>
        <div className='outside'>
          <div className='front'>
            <p>Happy birthday</p>
            <div className='cake'>
              <div className='top-layer'></div>
              <div className='middle-layer'></div>
              <div className='bottom-layer'></div>
              <div className='candle'></div>
            </div>
          </div>
          <div className='back'></div>
        </div>
        <div className='inside'>
          <p> ahhahahahahahah</p>
          <h1>&#127873;</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
