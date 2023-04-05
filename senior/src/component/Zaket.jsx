import React, { useState } from 'react';

const Zaket = () => {
  const [MuslimZaket, setMuslimZaket] = useState(0);
  const [amount, setAmount] = useState(0);


// function calculate zakate if you see it need some change just go ahead :p
  const handleCalculate = () => {
   const nisab = 595;
   const zakatRate = 0.025;
   if (MuslimZaket < nisab) {
      return 0;
    }
    const zakatAmount = MuslimZaket * zakatRate;
   setAmount(zakatAmount);
  };
// in the rest the amount 
  const handleReset = () => {
    setMuslimZaket(0);
    setMuslimZaket(0);
  };

  return (
    <div  className="d-flex justify-content-center align-items-center vh-100">
      <div className="border border-2 rounded p-3">
    
        <div className="input-group mb-5">
          <input
            type="number"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            // i take the value from here
            onChange={(e) => setMuslimZaket(e.target.value)}
          />
        </div>
      
        <div className="mt-5 border border-2 rounded p-1">
          {/* to update zaket amount */}
          <span className="d-block text-center">ZAKET: {amount} Dinar</span>
        </div>
        <div className="d-flex justify-content-between mt-3">
          {/* buttons */}
      <button className='btn btn-primary' onClick={handleCalculate}>Calculate</button>
      <button className='btn btn-primary' onClick={handleReset}>Reset</button>
    </div>
  </div>
    </div>
  );
};

export default Zaket;
