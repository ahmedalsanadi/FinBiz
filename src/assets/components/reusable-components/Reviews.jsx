const Reviews = () => (
    <div className="flex flex-col gap-4 justify-center items-center space-x-4">
      {/* Review Avatars */}
      <div className="flex -space-x-4">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="reviewer"
          className="w-10 h-10 rounded-full border-2 border-gray-900"
        />
        <img
          src="https://randomuser.me/api/portraits/men/2.jpg"
          alt="reviewer"
          className="w-10 h-10 rounded-full border-2 border-gray-900"
        />
        <img
          src="https://randomuser.me/api/portraits/women/3.jpg"
          alt="reviewer"
          className="w-10 h-10 rounded-full border-2 border-gray-900"
        />
      </div>
      {/* Review Summary */}
      <p className="text-gray-400">1200+ reviews (4.9 of 5)</p>
    </div>
  );
  
  export default Reviews;
  