import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Vote from "./pages/Vote";

function App() {

  return (
    <div className="h-screen bg-image bg-cover overflow-x-hidden font-sans">
        <div className="min-h-screen bg-gray-900 bg-opacity-50 firefox:bg-opacity-50 backdrop-filter backdrop-blur-md flex flex-col justify-between items-center">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/vote" element={<Vote/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
