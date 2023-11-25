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
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{ padding: '20px', margin: '20px' }}>
      <div style={{ width: '186px', height: '36px', background: 'yellow' }}> {/* Placeholder for button dimensions */}
        <div style={{ padding: '10px', width: '100%', height: '100%' }}> {/* Container with padding and size */}
          <div>
            <div>10KG</div>
            <button onClick={() => handleDecrement('10KG')}>-</button>
            <span>{selectedPalettes['10KG']}</span>
            <button onClick={() => handleIncrement('10KG')}>+</button>
          </div>
          <div>
            <div>30KG</div>
            <button onClick={() => handleDecrement('30KG')}>-</button>
            <span>{selectedPalettes['30KG']}</span>
            <button onClick={() => handleIncrement('30KG')}>+</button>
          </div>
          <div>
            <div>50KG</div>
            <button onClick={() => handleDecrement('50KG')}>-</button>
            <span>{selectedPalettes['50KG']}</span>
            <button onClick={() => handleIncrement('50KG')}>+</button>
          </div>
        </div>
      </div>

     
      {/* Checkout button */}
      <div style={{ width: '186px', height: '36px', bottom: '20px', position: 'absolute', background: '#FF900E', borderRadius: '10px' }}>
        <button onClick={handleCheckout} style={{ width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: '24px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', border: 'none', background: 'transparent' }}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default BuyPalletes;
