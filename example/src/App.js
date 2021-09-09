import React from 'react';
import myImage from './image.jpg';
import  ReactProfileImage  from '@surajr/react-profile-image';
// import '@surajr/react-profile-image/dist/index.css';

const App = () => {
  return (
      <div style={{ display: "flex" }}>
       <ReactProfileImage imageURL={myImage}/>

       <div style={{ width: "10px" }}/>
        
       <ReactProfileImage
          imageURL={myImage}
          borderColor="#321124"
          imageWidth="150"
          imageHeight="180"
          borderRadius="60"
          hoverEffect={false}
        />

        <div style={{ width: "10px" }}/>

        <ReactProfileImage
          imageURL={myImage}
          borderColor="#66A5CC"
          imageWidth="150"
          imageHeight="150"
          borderWidth="5"
        />

      </div>
       );
}

export default App
