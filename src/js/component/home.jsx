import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [onColor, setOnColor] = useState("red");
  return (
    <div className="traffic-light d-flex justify-content-center">
      <div className="bg-dark p-3">
        <div onClick={()=>setOnColor("red")} className={`light ${onColor === "red" ? "red":"off"} glow`}></div>
        <div onClick={()=>setOnColor(2)} className={`light ${onColor === 2 ? "yellow":"off"} glow`}></div>
        <div onClick={()=>setOnColor(3)} className={`light ${onColor === 3 ? "green":"off"} glow`}></div>
      </div>
    </div>
  );
};

export default Home;
