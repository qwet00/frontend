import HomeLayout from "./homeLayout";
import {Routes, Route} from "react-router-dom"
import MainPage from "./MainPage";
import Regsiter from "./Register";
function App() {
  return (
    <Routes>
    <Route path ="/" element={<HomeLayout/>} />  
    <Route path ="/AnaSayfa" element={<MainPage/>} />   
    <Route path ="/Kayit" element={<Regsiter/>} />   
    </Routes>
    
  );
}

export default App;
