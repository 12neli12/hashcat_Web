import { BrowserRouter, Routes, Route } from "react-router-dom";
import DehashPage from "./pages/DehashPage";
import History from "./pages/HistoryPage";
import Footer from "./components/Footer";


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DehashPage />}/>
          <Route path="/home" element={<DehashPage />}/>
          <Route path="/db" element={<History />}/>
          <Route path="/home#footer" element={<Footer/>}/>
          <Route path="/home#recover" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
      
      
  )
}

export default App;
