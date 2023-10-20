import React, { useState } from 'react';
import './App.css';
import * as ac from './alpaca-generator-assets/alpaca/accessories';
import * as bg from './alpaca-generator-assets/alpaca/backgrounds';
import * as ears from './alpaca-generator-assets/alpaca/ears';
import * as eyes from './alpaca-generator-assets/alpaca/eyes';
import * as hair from './alpaca-generator-assets/alpaca/hair';
import * as leg from './alpaca-generator-assets/alpaca/leg';
import * as mouth from './alpaca-generator-assets/alpaca/mouth';
import * as neck from './alpaca-generator-assets/alpaca/neck';

const Alpaca = () => {

  // Define categories and their associated images
  const categories = [    
    {
      name: 'Backgrounds',
      images: [
            {name: 'Blue 50', src: bg.blue50}, {name: 'Blue 60', src: bg.blue60}, {name: 'Blue 70', src: bg.blue70},
            {name:'Dark Blue 30', src: bg.darkblue30}, {name:'Dark Blue 50', src: bg.darkblue50}, {name: 'Dark Blue 70', src: bg.darkblue70},
            {name: 'Green 50', src: bg.green50}, {name: 'Green 60', src: bg.green60}, {name:'Green 70', src: bg.green70},
            {name: 'Grey 40', src: bg.grey40}, {name: 'Grey 70', src: bg.grey70}, {name: 'Grey 80', src: bg.grey80},
            {name: 'Red 50', src: bg.red50}, {name: 'Red 60', src: bg.red60}, {name: 'Red 70', src: bg.red70},
            {name: 'Yellow 50', src: bg.yellow50}, {name: 'Yellow 60', src: bg.yellow60}, {name: 'Yellow 70', src: bg.yellow70}
        ]
    },

    {
      name: 'Ears',
      images: [
          {name: 'Default', src: ears.defaultEars}, 
          {name: 'Tilt backward', src: ears.tiltBackward}, 
          {name: 'Tilt Forward', src: ears.tiltForward}
        ]
    },

    {
      name: 'Neck',
      images: [
        {name: 'Bend Backward', src: neck.bendBackward}, 
        {name: 'Bend Forward', src: neck.bendForward}, 
        {name: 'Default', src: neck.defaultNeck}, 
        {name: 'Thick', src: neck.thick}
      ]
    },

    {
      name: 'Hair',
      images: [
        {name: 'Bang', src: hair.bang}, 
        {name:'Curls', src: hair.curls}, 
        {name: 'Default', src: hair.defaultHair}, 
        {name: 'Elegant', src: hair.elegant}, 
        {name: 'Fancy', src: hair.fancy}, 
        {name: 'Quiff', src: hair.quiff}, 
        {name: 'Short', src: hair.short}]
    },

    {
      name: 'Accessories',
      images: [
        {name: 'Earings', src: ac.earings}, 
        {name: 'Flower', src: ac.flower}, 
        {name: 'Glasses', src: ac.glasses}, 
        {name: 'Headphone', src: ac.headphone}
      ]
    },

    {
      name: 'Eyes',
      images:[
        {name: 'Angry', src: eyes.angry}, 
        {name: 'Default', src: eyes.defaultEyes}, 
        {name: 'Naughty', src: eyes.naughty}, 
        {name: 'Panda', src: eyes.panda}, 
        {name: 'Smart', src: eyes.smart}, 
        {name: 'Star', src: eyes.star}
      ]
    },
    
    {
      name: 'Mouth',
      images: [
        {name: 'Astonished', src: mouth.astonished}, 
        {name: 'Default', src: mouth.defaultMouth}, 
        {name: 'Eating', src: mouth.eating}, 
        {name: 'Laugh', src: mouth.laugh}, 
        {name: 'Tongue', src: mouth.tongue}
      ]
    },

    {
      name: 'Leg',
      images: [
        {name: 'Bubble Tea', src: leg.bubbleTea}, 
        {name: 'Cookie', src: leg.cookie}, 
        {name: 'Default', src: leg.defaultLeg}, 
        {name: 'Game Console', src: leg.gameConsole}, 
        {name: 'Tilt Backward', src: leg.tiltBackward}, 
        {name: 'Tilt Forward', src: leg.tiltForward}
      ]
    },
    
    
  ];

  const [selectedImages, setSelectedImages] = useState(
    categories.reduce((acc, category) => {
      acc[category.name] = 0; // Initialize with the first image index for each category
      return acc;
    }, {})
  );

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleImageClick = (categoryName, imageIndex) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [categoryName]: imageIndex,
    }));
  };

  return (
    // App Container
    <div className='container'>

      {/* Image Container */}
      <div className="image-container">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} 
            className={`selected-image ${
              selectedCategory === category.name ? 'active' : ''
            }`}
          >
            <img
              src={category.images[selectedImages[category.name]].src}
              alt={category.images[selectedImages[category.name]].name}
            />
          </div>
        ))}
      </div>

      {/*Buttons container */}
      <div className="buttons">
      
        {/* Category Buttons container */}
        <h3 className='button-headers'>ACCESSORIZE THE ALPACA</h3>
        <div className='category-buttons'>
          {categories.map((category, categoryIndex) => (

            //Category Button Container
            <div key={categoryIndex} className="category-button-container">

              {/* Category Button*/}
              <button
                onClick={() => handleCategoryClick(category.name)}
                className={`category-button ${
                  selectedCategory === category.name ? 'active' : ''
                }`}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>

        {/* Image Buttons container */}
        <h3 className='button-headers'>STYLE</h3>
        <div className='image'>
          {categories.map((category, categoryIndex) =>(
              
              //Image Button Container
              <div 
                key={categoryIndex}
                className={`image-buttons ${
                  selectedCategory === category.name ? 'active' : ''
                }`}
              >
                {category.images.map((image, imageIndex) => (
                  
                  //Image Button
                  <button
                    key={imageIndex}
                    onClick={() => handleImageClick(category.name, imageIndex)}
                    className={
                      selectedImages[category.name] === imageIndex ? 'active' : ''
                    }
                  >
                    {image.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Alpaca;