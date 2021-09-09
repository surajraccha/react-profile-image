# react-profile-image

> React Profile Image Component

[![NPM](https://img.shields.io/npm/v/@surajr/react-profile-image.svg)](https://www.npmjs.com/package/@surajr/react-profile-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-profile-image
```

## Usage

```jsx
import React from 'react';
import myImage from './image.png';
import  ReactProfileImage  from 'react-profile-image';

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
```

## Result

<img src="./result-example.pn" alt="Result"/>

## Adding hover effect

```jsx
<ReactProfileImage
  imageURL={photo}
  borderColor="#321124"
  imageWidth="150"
  imageHeight="150"
  borderWidth="3"
  hoverEffect={true}
/>
```

# Properties

| Propertie    | Description                    |
| ------------ | ------------------------------ |
| imageURL     | The image                      |
| imageWidth   | The image's width              |
| imageHeight  | The image's height             |
| borderColor  | The border color               |
| borderWidth  | The border width               |
| hoverEffect  | The hover Effect               |
| borderRadius | The border radius(default 50%) |

## License

MIT © [surajraccha](https://github.com/surajraccha/react-profile-image/blob/main/LICENSE.md)

This project is licensed under the terms of the **MIT** license.
