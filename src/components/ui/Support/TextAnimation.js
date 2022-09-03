import React from "react";
import Typewriter from "typewriter-effect";
import '../../../Styles/Home.css';
//import "../../Style/TextAnimation.css";



 export const TextAnimation = () => {
   return (
     <>
       <div className="animate">
         <Typewriter
           options={{
             autoStart: true,
             loop: true,
             delay: 50,
             strings: [
              "Why not to shop smartly?",     
             ],
           }}
           
         />
       </div>
     </>
   );
 };