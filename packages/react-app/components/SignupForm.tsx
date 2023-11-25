import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
        {/* Placeholder logo */}
        <img src="./download.png" alt="Logo" className="h-16 w-auto" />
   
      <div className="relative max-w-[500px] mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="text-center text-black text-2xl font-bold mb-6">Register Account</div>
        {/* Form fields */}
        {/* Device */}
        <div className="mb-4">
          <label htmlFor="device" className="text-base font-bold text-neutral-900 block mb-1">
            Device
          </label>
          <input
            type="text"
            id="device"
            name="device"
            className="w-full h-10 px-3 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        {/* Identification */}
        <div className="mb-4">
          <label htmlFor="identification" className="text-base font-bold text-neutral-900 block mb-1">
            Identification
          </label>
          <input
            type="text"
            id="identification"
            name="identification"
            className="w-full h-10 px-3 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        {/* Customer */}
        <div className="mb-4">
          <label htmlFor="customer" className="text-base font-bold text-neutral-900 block mb-1">
            Customer
          </label>
          <input
            type="text"
            id="customer"
            name="customer"
            className="w-full h-10 px-3 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="text-base font-bold text-neutral-900 block mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full h-10 px-3 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        {/* "Sign Up" button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full h-10 px-4 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          >
            Sign Up
          </button>
        </div>
        {/* Already have an account? */}
        <div className="text-center text-black text-[15px] font-bold font-['Inter']">
          Already have an account? <a href="#">Login Here</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
