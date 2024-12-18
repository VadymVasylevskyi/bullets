
import './App.css'
import Header from './components/Header'
import ImageSequence from './components/ImageSequence'
import ThreeD from './components/ThreeD'

function App() {


  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', position: 'relative'}}>
      
        <Header />
        <ImageSequence />
        <ThreeD />
      
    </div>
    </>
  )
}

export default App
