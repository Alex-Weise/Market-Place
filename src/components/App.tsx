import './App.scss';
import { Header } from "../components/Header";
import { Slider } from './Slider';
import { Category } from './Category';
import { motion, useTransform, useScroll } from "framer-motion";

function App() {
  const {scrollY} = useScroll();
  const marginSizes = ["36vh", "35vh"];
  const offset = [0, 300];
  const marginTop = useTransform(scrollY, offset, marginSizes);

  return (
    <div style={{position: "relative"}}>
      <Header offset={offset} scrollY={scrollY}/>
      <motion.main style={{overflow: 'hidden', marginTop}}>
        <Slider />
        <Category />
      </motion.main>
    </div>
  );
}

export default App;
