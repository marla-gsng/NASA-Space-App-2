
import { API_Key_NASA } from "./credentials.js";

const nasaCall = () => {
  const randomNumber = Math.floor(Math.random() * 30);

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_Key_NASA}&date=2023-01-${randomNumber}`
  )
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .then((data) => {
      const template = `
      <p class='mp1'>${data.explanation}</p>
          <img class="m2" src=${data.hdurl} />
         

      `;

      document.querySelector(".m1").innerHTML = template;

  
    });
};

const gtn = document.querySelector("#gtn");

document.addEventListener("DOMContentLoaded", function(){
  nasaCall();
  
 
  let mp1=document.querySelector(".mp1");
  

});
