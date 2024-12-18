import { useState, useEffect } from 'react';

const ImageSequence = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const images = [
      "bull1.png", 
      "bull2.png",
      "bull3.png"
    ];
  
    useEffect(() => {
        if (currentStep < images.length + 1) {
          const timer = setTimeout(() => {
            setCurrentStep(currentStep + 1);
          }, 500);
          return () => clearTimeout(timer);
        } else {
          const resetTimer = setTimeout(() => {
            setCurrentStep(0);
          }, 3000); 
          return () => clearTimeout(resetTimer);
        }
      }, [currentStep, images.length]);
  
    return (
        <>
        {/* {currentStep >= images.length && (
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Hello world</h1>
          )} */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', background: 'url("mafia-bg.png")', height: '313px', width: '512px', borderRadius: '16px', border: '4px solid #98254D', marginBottom: '15px' }}>
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Step ${index + 1}`}
            style={{
              maxWidth: '100px', // Задайте желаемую ширину
              height: 'auto',
              marginRight: '10px',
              opacity: currentStep > index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          />
        ))}
        
      </div>
      </>
    );
  };
  
  export default ImageSequence;
  