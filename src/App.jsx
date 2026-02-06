import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import Footer from "./conponents/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Teams from "./pages/Teams";
import Home from "./pages/Home";


function App(){

return(
<BrowserRouter>
<Navbar />
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/news" element={<News />} />
    <Route path="/teams" element={<Teams />} />

</Routes>
<Footer />
</BrowserRouter>

)


}
