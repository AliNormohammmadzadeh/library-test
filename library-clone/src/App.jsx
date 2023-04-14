import React  from "react"
import Close from "./components/Close"
import Header from "./components/Header"
import ImageMenu from "./components/ImageMenu"
import ItemsUl from "./components/ItemsUl"
import BookCollection from "./components/BookCollection"
import Programs from "./components/Programs"
import BackToTopButton from "./components/BackToTopButton"
import Line from "./components/Line"
import Features from "./components/Features"
import Footer from "./components/Footer"

function App() {


  return (
    <div>
      
      <Close />
      <section>
        <Header />
      </section>
      <section> 
        <ImageMenu/>
      </section>
      <section>
        <ItemsUl/>
        <Line/>
      </section>
      <section>
        <BookCollection/>
        <Line/>
      </section>
      <section>
        <Programs/>
        <Line/>
      </section>
      <section>
        <Features/>
      </section>  
      <Footer/>
     <BackToTopButton/>
    </div>
  )
}

export default App
