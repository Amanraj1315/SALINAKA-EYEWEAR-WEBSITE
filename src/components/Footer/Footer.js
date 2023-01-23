import pic from '../../Assests/Images/logo-full.png'
import React from 'react';


const Footer = () => {
  

  return  (

    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Developed by
            {' '}
            <a href="wwww.google.com">RANJAN RAWAT</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2 " style={{marginLeft:'44%'}} >
      <img src={pic} alt='logo' />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3" style={{marginLeft:'85%' , marginTop: '-5%'}}>
        <strong>
          <text style={{textAlign: "center"}}>
            Fork this project &nbsp;
            <a href="www.google.com">HERE</a>
          </text>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
