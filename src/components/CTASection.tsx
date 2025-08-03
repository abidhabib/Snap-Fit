
const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-3xl px-8 py-16 text-center text-white relative overflow-hidden">
          {/* Background pattern or decoration can be added here */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Create Stunning{' '}
              <span className="bg-gradient-to-r from-lime-400 to-blue-400 bg-clip-text text-transparent italic">
                Images
              </span>{' '}
              in Minutes
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              From product photos to dynamic videos, SnapFit has everything you need to stand out.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 min-w-[160px]">
                Try Now
              </button>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;