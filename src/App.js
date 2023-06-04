import HomeLayout from "./homeLayout";
import {Routes, Route} from "react-router-dom"
import MainPage from "./MainPage";
import Regsiter from "./Register";
import Addbook from "./kitapekle";
import BookPage from "./bookPage";
import Messages from "./messages";
function App() {
  return (
    <Routes>
    <Route path ="/" element={<HomeLayout/>} />  
    <Route path ="/AnaSayfa" element={<MainPage/>} />   
    <Route path ="/Kayit" element={<Regsiter/>} />   
    <Route path ="/KitapEkle" element={<Addbook/>} />
    <Route path ="/kitapSayfasi" element={<BookPage/>} />
    <Route path ="/mesajlar" element={<Messages/>} />
    </Routes>
    
  );
}

export default App;
