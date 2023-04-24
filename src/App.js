import Lottie from 'react-lottie-player'
import lottieJson from './burger-logo.json';

function App() {
  return (
    <div>
      <header className="App-header">
      <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
      </header>
    </div>
  );
}

export default App;
