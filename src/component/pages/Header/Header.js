import React from 'react';
import './header.scss';
import { connect } from 'react-redux';

import {auth} from '../../../firebase/firebase.utils';

import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/crown.svg';
import CartIcon from '../../../component/CartIcon/CartIcon';
import CartDropDown from '../../../component/CartDropdown/CartDropDown';


const Header = ({ currentUser, hidden })=>{
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo  className="logo" />
            </Link>
            <div className = 'options'>
                <Link className = 'option' to='/shop'>SHOP</Link>
                <Link className = 'option' to='/contact'>CONTACT</Link>
                
                {
                    currentUser ? <div className = 'option' onClick={()=> auth.signOut()}>SIGN OUT</div> : <Link className = 'option' to='/sign-in'>SIGN IN</Link>
                }

                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropDown/>
            }
         
        </div>
    );
}

const mapStateToProps = ({user: {currentUser}, cart:{ hidden }}) => ({
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(Header);
