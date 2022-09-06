import React, { useState } from "react";
import ImgModal from "./ImgModal";

const Image = ({ url }) => {
  const [show, setShow] = useState(false);


  const handleClick = () => {
    setShow(!show);
  }
  return (
    <>
      <ImgModal image={url} show={show} handleClick={handleClick} />
      <li>
        <img className="image-result" src={url} alt="" onClick={handleClick} style={{cursor:'pointer'}} />
      </li>
    </>

  );
}

export default Image;