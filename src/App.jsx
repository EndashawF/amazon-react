import { useState } from 'react'
import Header from "./components/Header/Header"
import './App.css'
import CarouselEffect from './components/Carousel/Carousel';

// import Test1 from './components/test/Test1';
// import Test2 from './components/test/Test2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarouselEffect />
    </>
  );
}

export default App
