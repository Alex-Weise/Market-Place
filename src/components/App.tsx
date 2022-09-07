import './App.scss';
import { Header } from "../components/Header";
import { Slider } from './Slider';
import { Category } from './Category';
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const {scrollY} = useScroll();
  const offset = [0, 300];
  const marginSizes = ["50vh", "40vh"];
  const marginTop = useTransform(scrollY, offset, marginSizes);

  return (
    <>
      <motion.div style={{position: "relative"}} layoutScroll>
        <Header scrollY={scrollY} offset={offset}/>
        <motion.main style={{overflow: 'hidden', marginTop}}>
            <Slider />
            <Category />
        </motion.main>
      </motion.div>
    </>
  );
}

export default App;
