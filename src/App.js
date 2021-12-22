import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import SignUp from "./components/signup";
import Login from "./components/login";
import NotFound from "./components/notFound";
import Movie from "./components/movie";
import AddMovie from "./components/addMovie";


function App() {
    return (

        <div className="App">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="content">
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/signin' element={<Login/>}/>
                        <Route path='/details' element={<Movie/>}/>
                        <Route path='/add' element={<AddMovie/>}/>
                        <Route path='/not_found' element={<NotFound/>}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>


    );
}

export default App;
