import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import cloudinary from "cloudinary-core";    // If your code is for ES6 or higher
// import { Image ,cloudinary} from 'cloudinary-react';
// import { CloudinaryContext, Transformation } from 'cloudinary-react';
import Dropzone from 'react-dropzone'
import axios from 'axios'
class App extends Component {


  handleDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      console.log(files)
      console.log(file)
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `ddgfcg6mo, medium, gist`);
      formData.append("upload_preset", "dk2pf0xo"); // Replace the preset name with your own
      formData.append("api_key", "74369522956151"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post("https://api.cloudinary.com/v1_1/ddgfcg6mo/image/upload", formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        console.log(data);
      })
    });

    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
    });
  }

  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <Dropzone
          onDrop={this.handleDrop}
          accept="image/*"
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>



        {/* <div className="upload">
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button>
        </div> */}
      </div>

    );
  }
}

export default App;
