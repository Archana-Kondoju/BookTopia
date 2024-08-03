import React,{useState, useEffect} from 'react';
import {NavbarContainer,NavbarLink,Heading, Image} 
  from './styledHeader';
import { SideMenu,SideMenuItem,SideMenuItems,SideMenuItemContainer } from './styledHeader';
import bookLogo from './bookLogo.png';
import Cookies from "universal-cookie";
// import './navBar.scss';
import { FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import {toast} from 'react-toastify';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BsStars } from "react-icons/bs";
import { BsFire } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
const Navbar =() => {
  const navigate=useNavigate();
  const [logIn,setLogName]=useState('Login');
  const [isSideMenuOpen,setSideMenuOpen]=useState(false);
  const location=useLocation();
  const cookies=new Cookies();
  const token=cookies.get('jwtToken');

  useEffect(() => {
    const cookies = new Cookies();
    const jwtToken = cookies.get('jwtToken');

    if (jwtToken) {
      setLogName('Logout');
    } else {
      setLogName('Login');
    }
  }, [location.pathname]);

  const handleHome=()=>{
    navigate('/Home');
  }

  const handleAbout=()=>{
    navigate('/about');
  }
  
  const handleLog=()=>{
    if(logIn==='Login'){
        setSideMenuOpen(false);
        navigate('/logIn', { replace: true });
        // navigate('/login');
        return 'Logout';
    }
    else{
      setLogName('Login');
      const cookies=new Cookies();
      cookies.remove('jwtToken');
      return 'Login';
    }
  };
  
  const routing=(route)=>{
    if(!token){ 
        toast(`Login to get ${route}`);
        return;
    }
    else{
      setSideMenuOpen(false);
        navigate(`/${route}`);
    }
  };
        return (
          <NavbarContainer className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Heading className="navbar-brand" to="/"><Image src={bookLogo} className="App-logo" alt="logo" />
      Booktopia
    </Heading>
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}

    <div className="navbar-middle" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <NavbarLink className="nav-link" onClick={handleHome} aria-current="page" to="/Home">Home</NavbarLink>
       {/* <NavLink className="nav-link" to="/search">Search</NavLink> */}
       <NavbarLink className="nav-link" to="/about" onClick={handleAbout}>About</NavbarLink>
       <NavbarLink className="nav-link"
      //  style={{border:'none',color:'#2e6b62',
      //     background:'none',marginRight:10, marginTop:9,
      //     cursor:"pointer",
      //     fontSize:17,textAlign:'center' }}
          onClick={handleLog}
          to="/logIn">{logIn}</NavbarLink>
       {/* <NavLink className="nav-link" to="/logIn">LogIn</NavLink> */}
       {/* <NavLink className="nav-link" to="/Home/new">AddBook</NavLink> */}
       <NavbarLink className="nav-link" to='/menu' title="Menu"><RxHamburgerMenu style={{cursor:'pointer'}}
          onClick={(m)=>{setSideMenuOpen(true)}}/>
        </NavbarLink>
        <SideMenu open={isSideMenuOpen}>
        <SideMenuItems>
          <RxCross2 style={{display:'flex',justifyContent:'flex-start',marginBottom:20,
          marginTop:20,marginLeft:'auto',marginRight:20,cursor:'pointer',
            alignItems:'flex-end', color:'black'}} onClick={()=>setSideMenuOpen(false)}/>
          <SideMenuItemContainer>
            <SideMenuItem onClick={() => routing('Home')}><FaHome/> Home</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={() => routing('NewBooks')}><BsStars/> New Books</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={() => routing('Trending')}><BsFire/> Trending</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={() => routing('MostRead')}><IoMdStats/> Most Read</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={() => routing('Liked')}><AiFillLike/> Liked</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={() => routing('Downloads')}><FaDownload/> Downloads</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={handleLog}>
                {logIn==='Login'? <IoMdLogIn/>:<IoMdLogOut/>} {logIn}</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={() => routing('About')}><BsFillInfoCircleFill /> About</SideMenuItem>
          </SideMenuItemContainer>
          <SideMenuItemContainer>
              <SideMenuItem onClick={() => routing('Contact')}><IoMdContact/><span> </span> Contact</SideMenuItem>
          </SideMenuItemContainer>
        </SideMenuItems>
      </SideMenu>
      </div>
    </div>
  </div>
</NavbarContainer>
 );
}
 
export default Navbar;
 //                 <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
//   <div class="bg-dark p-4">
//     <h5 class="text-body-emphasis h4">Collapsed content</h5>
//     <span class="text-body-secondary">Toggleable via the navbar brand.</span>
//   </div>
// </div> */}

            //     <nav className="navbar navbar-expand-xl border-bottom border-body" data-bs-theme="white">
            //     <div className="container-fluid d-flex justify-content-around">
            //        <NavLink href='#' className="navbar-brand"><h2>Booktopia</h2></a>
            //         <form className="d-flex" role="search">
            //             <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
            //             <button className="btn btn-outline-success" type="submit">Search</button>
            //         </form>
            //         <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            //             <span class="navbar-toggler-icon"></span>
            //         </button>
            //         {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span class="navbar-toggler-icon"></span>
            //         </button> */}
            //     </div>
            // </nav>
            // </div>       
                    
       

// {/* <nav>
//         <div id="menu" className={isMenuOpen ? 'open' : ''}>
//           <a href="/" className="btn-close" onClick={closeMenu}>
//             ×
//           </a>
//           <a href="https://www.dbooks.org/" rel="home" title="dBooks">
//             Home
//           </a>
//           <a href="/search/" rel="search" title="Search Books">
//             Search Books
//           </a>
//           <a href="/add/" title="Submit a Book">
//             Add a Book
//           </a>
//           <a href="/subscription/" title="Subscribe to Books">
//             Subscribe
//           </a>
//           <a href="https://feeds.feedburner.com/dBooksorg" rel="noreferrer" title="RSS Feed" target="_blank">
//             RSS Feed
//           </a>
//           <a href="/api/" title="Books API">
//             Open API
//           </a>
//           <a href="/privacypolicy/" title="Privacy Policy">
//             Privacy Policy
//           </a>
//           <a href="/about/" title="About dBooks">
//             About
//           </a>
//           <a href="https://t.me/dbooks_org" title="Join dBooks Telegram Channel" target="blank">
//             Telegram Channel
//           </a>
//           <a href="/contact/" title="Contact Us">
//             Contact
//           </a>
//         </div>
//       </nav> */}         