import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Preloader from "./conponents/Loader";
import Career from "./pages/Career";
import Hmo from "./pages/Hmo";
import Faq from "./pages/Faq";

function App(){
const [loading, setLoading] = useState(true)

useEffect(()=> {
//   const handleload = () => setLoading(false)

// window.addEventListener('load', handleload)
// return () => window.removeEventListener('load', handleload)
const  timer = setTimeout(() => setLoading(false), 2500)
return() => clearTimeout(timer)
}, [])

if (loading) {
    return(
     <Preloader />
    )
}
return(
<BrowserRouter>
<Header />
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/news" element={<News />} />
    <Route path="/teams" element={<Teams />} />
    <Route path="/career" element={<Career />} />
    <Route path="/hmo" element={<Hmo />} />
    <Route path="/Faq" element={<Faq />} />

</Routes>
<Footer />
</BrowserRouter>

)


}
export default App