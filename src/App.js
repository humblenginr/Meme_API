import Axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "reactstrap"

function App() {

  const [dataFromApi,setDataFromApi] = useState();
  const [currentMeme,setCurrentMeme] = useState()

  useEffect(() => {

    Axios.get("https://api.imgflip.com/get_memes").then(
      res => {
        setDataFromApi(res.data.data.memes) 
        setCurrentMeme(res.data.data.memes[Math.floor(Math.random() * 10)])
        
      }
    ).catch(
      err => console.log(err)
    )
  },[])

  

  const setRandomMeme = () => {
    setCurrentMeme(dataFromApi[Math.floor(Math.random() * dataFromApi.length)])
  }
   
  return (
    <div className="App">

     THIS IS A MEME GENERATOR API
     <br></br>
      {currentMeme && <img src={currentMeme.url}></img>}
      <br></br>
     <Button color="success" onClick={setRandomMeme}>Next</Button>
    </div>
  );
}

export default App;
