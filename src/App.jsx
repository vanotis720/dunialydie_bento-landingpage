import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/footer'

function App() {

  return (
    <div className='bg-sky-200  w-full flex flex-col pt-14'>
      <div className="border-8 border-black rounded-xl w-11/12 mx-auto  shadow-2xl shadow-blue-500/50">
        <Header/>
        <Body/>
        <Footer/>
      </div>

    </div>
  )
}

export default App
