// eslint-disable-next-line react/prop-types
const Button = ({ text, variant, addClass }) => {
  const baseStyles = 'mt-6 w-full py-4 text-center rounded-3xl font-semibold';
  const variants = {
    default: 'bg-customGray-800 text-customWhite hover:bg-customGray-900',
    contact: 'bg-green text-black hover:bg-oliveGreen', 
    white: 'bg-customWhite text-customGray-800 hover:bg-gray',
    explore:'bg-customWhite text-customGray-800 hover:bg-gray max-w-[260px]',
    demo : 'bg-green text-black hover:bg-oliveGreen max-w-[260px] ', 
    video : 'bg-customWhite text-customGray-800 max-w-[260px] hover:bg-gray', 
    
  };

  return (
    <button className={`${addClass ? addClass : baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;