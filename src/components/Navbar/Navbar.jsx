import React, { useState ,useEffect} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose, } from 'react-icons/md';
import images from '../../constants/images';
import LoginPopup from '../../container/Log/LoginScreen'
import SignUpPopUp from '../../container/SignUp/SignUpScreen';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../../container/Log/config';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [ToggleMenu, setToggleMenu] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for login popup
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };
  const opensignupopup = () => {
    setShowSignupPopup(true);
  };

  const closesignuppopup = () => {
    setShowSignupPopup(false);
  };
  const [user, setUser] = useState(null); // To store the user's information

  useEffect(() => {
    // Add a Firebase Authentication observer to check the user's login status
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Unsubscribe from the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Perform the logout action using Firebase Authentication
    auth.signOut()
      .then(() => {
        // User has been logged out
      })
      .catch((error) => {
        console.error('Logout error', error);
      });
  };

  return (
    <nav className="app_navbar" id="top">
      <div className="app_navbar-logo">
        <a href='/'><img src={images.logo} alt="app logo" /></a>
       
      </div>
      <ul className="app_navbar-links">
      <li className="p_opensans">
        <a href="./ticket">Tickets</a>
      </li>

        <li className="p_opensans">
          <a href="#invitations">Invitations</a>
        </li>
        <li className="p_opensans">
          <a onClick={() => scrollToSection('main-service')} href="#">
            Services
          </a>
        </li>
        <li className="p_opensans">
          <a onClick={() => scrollToSection('about-us')} href="#">
            AboutUs
          </a>
        </li>
        <li className="p_opensans">
          <a onClick={() => scrollToSection('contact')} href="#">
            ContactUs
          </a>
        </li>
      </ul>
      <div className="app_navbar-login-signup">
        {user ? (
          <>
            <a href="#logout" className="p_opensans" onClick={handleLogout}>
              Log Out
            </a>
          </>
        ) : (
          <>
          <a href="#log" className="p_opensans" onClick={openLoginPopup} style={{marginRight:'0'}}>
            Log In
          </a>
          <a href="" className='p_opensans'>|</a>
            <a href="#signup" className="p_opensans" onClick={opensignupopup} style={{marginLeft:'0'}}>
            Sign Up
          </a>
          </>
        )}
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(!ToggleMenu)}
        />
        {ToggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
            <MdClose
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app_navbar-smallscreen-links">
              <li className="p_opensans">
               <Link for='/ticket'>Ticket </Link>
              </li>
              <li className="p_opensans">
                <a href="#invitations">Invitations</a>
              </li>
              <li className="p_opensans">
                <a onClick={() => scrollToSection('main-service')} href="#">
                  Services
                </a>
              </li>
              <li className="p_opensans">
                <a onClick={() => scrollToSection('about-us')} href="#">
                  AboutUs
                </a>
              </li>
              <li className="p_opensans">
                <a onClick={() => scrollToSection('contact')} href="#">
                  ContactUs
                </a>
              </li>
              <li>
              <a href="#log"  style={{ }} onClick={openLoginPopup}>
                 Log In
                </a>
                </li>
                 <li>
        <a href="#signup"   style={{ }} onClick={opensignupopup}>
                  SignUp
               </a>
             </li>
            </ul>
          </div>
        )}
      </div>
      
      {showLoginPopup && (
        <LoginPopup closePopup={closeLoginPopup} /> // Pass closePopup function to LoginPopup
      )}
       {showSignupPopup && (
        <SignUpPopUp closePopup={closesignuppopup} /> // Pass closePopup function to LoginPopup
      )}
    </nav>
  );
};

export default Navbar;