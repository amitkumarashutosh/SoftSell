const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20 px-4 md:px-8 dark:bg-gray-500">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Turn Unused Software Into Cash
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Sell your unused licenses with SoftSell in 3 easy steps.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded cursor-pointer">
        Sell My Licenses
      </button>
    </section>
  );
};

export default Hero;
