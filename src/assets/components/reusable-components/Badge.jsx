/* eslint-disable react/prop-types */


const Badge = ({ isDarkMode, children, width, justify = "between", aosEffect = "zoom-in" }) => {
  return (
    <div
      style={{ width: width || 'auto' }} 
      className={`flex justify-${justify} items-center mx-auto text-green-800 text-sm rounded-full px-2 py-1 mb-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer ${
        isDarkMode ? 'bg-darkRedBackground' : 'bg-red'
      }`}
      data-aos={aosEffect} 
    >
      {children}
    </div>
  );
};

export default Badge;