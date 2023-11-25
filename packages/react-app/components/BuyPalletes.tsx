import React, { useState } from 'react';

const BuyPalletes: React.FC = () => {
  const [selectedPalettes, setSelectedPalettes] = useState<{
    [key: string]: number;
  }>({
    '10KG': 1,
    '30KG': 1,
    '50KG': 2,
  });

  const handleIncrement = (paletteSize: string) => {
    setSelectedPalettes((prevState) => ({
      ...prevState,
      [paletteSize]: prevState[paletteSize] + 1,
    }));
  };

  const handleDecrement = (paletteSize: string) => {
    if (selectedPalettes[paletteSize] > 0) {
      setSelectedPalettes((prevState) => ({
        ...prevState,
        [paletteSize]: prevState[paletteSize] - 1,
      }));
    }
  };

  const handleCheckout = () => {
    // Logic for checking out palettes
    let totalQuantity = 0;
    let totalAmount = 0;

    Object.keys(selectedPalettes).forEach((paletteSize) => {
      totalQuantity += selectedPalettes[paletteSize];
      // Assuming each palette costs 10 cUSD
      totalAmount += selectedPalettes[paletteSize] * 10;
    });

    console.log('Total Quantity:', totalQuantity);
    console.log('Total Amount:', totalAmount, 'cUSD');

    // Placeholder for actual checkout process
    alert(`Checkout complete. Total Quantity: ${totalQuantity}, Total Amount: ${totalAmount} cUSD`);
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px black solid' }}>
      {/* Placeholder for the image */}
      <img style={{ width: '225px', height: '225px', left: '113px', top: '-31px', position: 'absolute' }} src="https://via.placeholder.com/225x225" alt="Placeholder" />

      {/* SVG elements */}
      <svg width="100" height="100" style={{ position: 'absolute', left: '20px', top: '20px' }}>
        {/* Add your SVG elements here */}
        <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
        <rect x="10" y="10" width="30" height="30" stroke="blue" strokeWidth="2" fill="orange" />
      </svg>

      {/* Placeholder for the palettes */}
      {/* ... (Elements for palettes, buttons, labels, and checkout button) */}
    </div>
  );
};

export default BuyPalletes;
