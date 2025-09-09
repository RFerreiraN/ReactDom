import { Navigate, Route, Routes } from "react-router"
import { NavBar } from "./Components/NavBar"
import { HomeScreem } from "./routes/HomeScreem"
import { AboutScreem } from "./routes/AboutScreem"
import { ContactScreem } from "./routes/ContactScreem"

export const App = () => {
  return (
    <>
      <h1>Aplicación de Enrutamiento</h1>
      <hr />
      <NavBar/> 

      <Routes>
        <Route path="/" element={ <HomeScreem/>}></Route>
        <Route path="about" element={ <AboutScreem/>}></Route>
        <Route path="contact" element={ <ContactScreem/>}></Route>
        <Route path="/*" element={ <Navigate to='/' />}></Route>
      </Routes>
    </>
  )
}
