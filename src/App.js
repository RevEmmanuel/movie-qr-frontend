import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";


function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path=":value" element={<Movies />} />
            </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
