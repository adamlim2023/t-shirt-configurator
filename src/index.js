/*
Udemy course: https://www.udemy.com/course/react-three-fiber-configurator/learn/lecture/36721122#overview
*/

import { createRoot } from 'react-dom/client'
import './styles.css'
import { App as Canvas } from './Canvas'
import { Overlay } from './Overlay'

createRoot(document.getElementById('root')).render(
  <>
    <Canvas />
    <Overlay />
  </>
)
