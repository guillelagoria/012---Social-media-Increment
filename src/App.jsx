import { useEffect, useState } from 'react'
import './App.css'

import React from 'react'

export const App = () => {
  const [twitter, setTwitter] = useState(0);
  const [youtube, setYoutube] = useState(0);
  const [facebook, setFacebook] = useState(0);


const tFollowers = 11950; 
const yFollowers = 4950; 
const fFollowers = 21950; 


const counter = (set,num) => {
  const int = setInterval(() => {
    set((social) => {
      if (social >= num) {
        clearInterval(int);
      }
      return social + 25;
    });
  }, 5);
  return () => {
    clearInterval(int);
  };
};

  useEffect(() => {
    counter (setTwitter, tFollowers);
    counter (setYoutube,  yFollowers);
    counter (setFacebook,  fFollowers);

  }, []);
  


  return (
    <>
    <body>
      <div className="counter-container">
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter">{twitter}</div>
        <span>Twitter Followers</span>
      </div>
      
      <div className="counter-container">
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter">{youtube}</div>
        <span>YouTube Subscribers</span>
      </div>

      <div className="counter-container">
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter">{facebook}</div>
        <span>Facebook Fans</span>
      </div>

    </body>
    </>
    )
}


export default App
