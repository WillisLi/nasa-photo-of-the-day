import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Post from "./components/Post/Post.js";

function App() {
  const [post, setPost] = useState("");
  useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response.data);
            setPost(response.data);
        })
        .catch(error => {
            console.log(error);
        })
  }, []);

  return (
    <div className="App">
      <Post post = {post}/>
    </div>
  );
}

export default App;
