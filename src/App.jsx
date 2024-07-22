import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react';
import { useState } from 'react';


const App = () => {
  const randomX = gsap.utils.random(-10, 1150, 100, true);
  const rotateX = gsap.utils.random(-180,180,30, true);
  const randomY = gsap.utils.random(-10, 250, 30, true);

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  const [roti, setRoti] = useState(0);

  const imageref = useRef()

  useGSAP(() => {
    gsap.to(imageref.current, {
      x:xValue,
      y:yValue,
      duration: 1,
      rotate:roti
    })
  }, [xValue,rotateX,yValue])

  return (
    <main>
      <button onClick={() => {
       setXValue(randomX)
       setRoti(rotateX)
       setYValue(randomY)
      }}>Animate</button>
      <img ref={imageref} src='https://pngimg.com/d/bee_PNG74646.png' />
    </main>
  )
}

export default App;