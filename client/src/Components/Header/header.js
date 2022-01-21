import React from "react";
import amalitech from '../../amalitech.png';
import './header.css'

const Header = () => {
    return (
        <header>
            <img src={amalitech} alt="company logo"></img>
            <p className="payroll"><strong className="i">i</strong>Payroll</p>
            <button className="logout-button">LogOut</button>
        </header>
    )

}
export default Header;