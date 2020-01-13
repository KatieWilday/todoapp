import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import MyInfo from "./components/MyInfo"
// import MainContent from "./components/MainContent"
//import NavBar from "./components/NavBar"

function App(){
  return(
    <div>
      <Header />
      <input type="checkbox" />
      <p>Item 1</p>

      <input type="checkbox" />
      <p>Item 2</p>

      <input type="checkbox" />
      <p>Item 3</p>

      <input type="checkbox" />
      <p>Item 4</p>
      <Footer />
    </div>
  )
}

export default App
