import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import React from "react";

const Header = () => {
  return (
    <div className="text-3xl font-bold uppercase text-white mt-10">
      <h1 className="flex items-center justify-center"><FontAwesomeIcon className="" icon={faSchool}></FontAwesomeIcon><span className="text-xl text-white font-bold m-3">Our Active Schools</span></h1>
    </div>
  );
};

export default Header;

// text-9xl flex items-center mt-10

// https://coaching.thimpress.com/wp-content/themes/coaching-landingpage/images/logo-coaching.png
{/* <FontAwesomeIcon icon="fa-regular fa-school" /> */}
