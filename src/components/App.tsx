import './App.scss';
import { Header } from "../components/Header";
import { Slider } from './Slider';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Slider />
      </main>
    </>
  );
}

export default App;
