import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import SignUp from "./components/signup";
import Login from "./components/login";
import NotFound from "./components/notFound";
import Movie from "./components/movie";
import AddMovie from "./components/addMovie";
import {isExpired} from "react-jwt";


function App() {
    return (

        <div className="App">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="content">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}
                               render={props => {
                                   if (isExpired(localStorage.getItem('token'))) {
                                       return <Redirect to="/"/>;
                                   }
                                   return <Login/>;
                               }}
                        />
                        <Route path='/signup'
                               render={props => {
                                   if (!isExpired(localStorage.getItem('token'))) {
                                       return <Redirect to="/"/>;
                                   }
                                   return <Route path="/signup" exact component={SignUp}/>;
                               }}/>
                        <Route path='/signin'
                               render={props => {
                                   if (!isExpired(localStorage.getItem('token'))) {
                                       return <Redirect to="/"/>;
                                   }
                                   return <Route path="/signin" exact component={Login}/>;
                               }}/>
                        <Route path='/details/:id' component={Movie}/>
                        <Route path='/add'
                               render={props => {
                                   if (isExpired(localStorage.getItem('token'))) {
                                       return <Redirect to="/"/>;
                                   }
                                   return <Route path="/add" exact component={AddMovie}/>;
                               }}/>
                        <Route path='/not_found' component={NotFound}/>
                        {<Route path="*" component={NotFound}/>}
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>


    );
}

export default App;
