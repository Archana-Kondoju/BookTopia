
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/home';
// import Search from './components/Search/search';
import About from './components/About/about';
import Navbar from './components/Header/navBar';
import BookView from './components/Books/bookView';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AddBook from './navigation/addBook';
// import Contact from 
import 'react-toastify/dist/ReactToastify.css'
// import GenreView from './components/genreView';
// import Route from 'react-dom';
class App extends Component {
  
  render() { 
    return (
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>   
        <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        {/* <Route path="/search" exact component={Search}/> */}
        <Route exact path="/about" element={<About/>}/>
        <Route exact path='/not-found' element={() => <h1>Not Found</h1>}/>
        <Route exact path='/logIn' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/Home/new' element={<AddBook/>}/>
        {/* <Route exact path='/Home/:id' element={<Genre/>View}/> */}
        <Route exact path='/books/:id' element={<BookView/>}/>
        <Route render={() => <Navigate to="/" replace/>}/>
        </Routes>
      </BrowserRouter>

    );
  }
}
 
export default App;






















// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
