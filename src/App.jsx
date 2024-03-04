import './App.css'
import BodyContainer from './components/BodyContainer'
import Header from './components/Header'

function App() {

  return (
      <div className=" rounded 2xl:mx-32 border-8 border-black shadow-2xl shadow-blue-500/50 md:mx-10">
        <Header/>
        <BodyContainer/>
      </div>

  )
}

export default App
