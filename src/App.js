import React, {Component} from "react";
import './App.css';
import audio from "./audios/sexy.mp3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from "./imagenes/couple2.jpeg";

var flag = false;

 class App extends Component {

  handleChange(){
    if(flag == false){
      document.getElementById('song').play();
      document.getElementById('icon').style.display = "block";
      document.getElementById('icon').classList.add("anime");
      flag = true;
    }else{
      document.getElementById('song').pause();
      document.getElementById('icon').style.display = "none";
      document.getElementById('icon').classList.remove('anime');
      flag = false;
    }
  }

  render(){
    return(
      <div className="App">
          <audio id="song" loop>
            <source src={audio} type="audio/mpeg"></source>
          </audio>
          <div class = "head">
            <h1>🎉 Feliz Mesiversario 🎉</h1>
            <p class = "poema">I can't give you the sunset, but I can give you the night.</p>
            <h2>🎼 Presiona la imagen 🎼</h2>
          </div>
          <div class = "container">
            <img src={image}></img>
            <input type="checkbox" onChange={this.handleChange}></input>
            <div class = "heart" id = "icon">
                <FontAwesomeIcon icon="heart" color="red"/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
