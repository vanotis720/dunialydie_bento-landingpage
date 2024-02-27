import './App.css'
import BodyContainer from './components/BodyContainer'
// import Body from './components/Body'
import Header from './components/Header'
// import Footer from './components/footer'

function App() {

  return (
    // <div className='bg-sky-200  w-full flex flex-col pt-14'>
      <div className=" rounded-xl mx-32 border-8 border-black shadow-2xl shadow-blue-500/50 ">
        <Header/>
        <BodyContainer/>
        {/* <Body/> */}
        {/* <Footer/> */}
      </div>

    // </div>
  )
}

export default App
