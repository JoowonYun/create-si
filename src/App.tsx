import './App.css'

import dog1 from '/dog/1.png';
import dog2 from '/dog/2.png';
import dog3 from '/dog/3.png';
import dog4 from '/dog/4.png';
import dog5 from '/dog/5.png';
import dog6 from '/dog/6.png';
import dog7 from '/dog/7.png';
import dog8 from '/dog/8.png';
import dog9 from '/dog/9.png';

import clothes1 from '/clothes/1.png';
import clothes2 from '/clothes/2.png';
import clothes3 from '/clothes/3.png';
import clothes4 from '/clothes/4.png';
import clothes5 from '/clothes/5.png';
import clothes6 from '/clothes/6.png';
import clothes7 from '/clothes/7.png';
import clothes8 from '/clothes/8.png';
import clothes9 from '/clothes/9.png';
import { useState } from 'react';

function App() {
  

  const dogImages = [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9];
  const clothesImages = [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8, clothes9];
  const [showDog, setShowDog] = useState(true);

  const handleShowDog = () => {
    setShowDog(true);
  };

  const handleShowClothes = () => {
    setShowDog(false);
  };
  const [selectedDog, setSelectedDog] = useState('');
  const [selectedClothes, setSelectedClothes] = useState('');

  const handleSelectDog = (image: string) => {
    console.log(image)
    setSelectedDog(image);
  };

  const handleSelectClothes = (image: string) => {
    console.log(image)
    setSelectedClothes(image);
  };

  const combineImages = (dogImage: string, clothesImagePath: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    // Set the canvas size to match the size of the images
    const imageWidth = Math.max(1475, 1475);
    const imageHeight = Math.max(1475, 1475);
    canvas.width = imageWidth;
    canvas.height = imageHeight;
  
    
    // Draw the dog image on the canvas
    const dogImg = new Image()
    dogImg.src = dogImage;
    context && context.drawImage(dogImg, 20, 0, dogImg.width, dogImg.height);
  
    // Draw the clothes image on the canvas
    const clothesImage = new Image()
    clothesImage.src = clothesImagePath;
    context && context.drawImage(clothesImage, 0, 380, clothesImage.width, clothesImage.height);
  
    // Get the combined image as a data URL
    const combinedImage = canvas.toDataURL();
  
    return combinedImage;
  };

  let combinedImage: string = "";
  if (selectedDog || selectedClothes) {
    combinedImage = combineImages(selectedDog, selectedClothes);
    // Display the combined image
    // You can use the combinedImage variable to set the source of an <img> element
    <img src={combinedImage} alt="Combined Image" />
  }


  const handleSaveImages = () => {
    
      const link = document.createElement('a');
      link.href = combinedImage;
      link.download = 'combinedImage.png';
      link.click();
    
  };


  return (
    <>
      <div>
        <button onClick={handleShowDog}>Dog</button>
        <button onClick={handleShowClothes}>Clothes</button>
      </div>
      {showDog ? (
        <div className="card">
          {dogImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Dog ${index + 1}`}
              style={{ width: '10%' }}
              onClick={() => handleSelectDog(image)}
            />
          ))}
        </div>
      ) : (
        <div className="card">
          {clothesImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Clothes ${index + 1}`}
              style={{ width: '10%' }}
              onClick={() => handleSelectClothes(image)}
            />
          ))}
        </div>
      )}
      {(selectedDog || selectedClothes) && (
        <div className="card">
          <img src={combinedImage} alt="Combined Image" style={{ width: '50%' }} />
        </div>
      )}
      <button onClick={handleSaveImages}>Save</button>
    </>
  );
}

export default App
