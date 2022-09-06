import './App.scss';
import { Header } from "../components/Header";
import { Slider } from './Slider';
import { Category } from './Category';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Slider />
        <Category />
      </main>
    </>
  );
}

export default App;
