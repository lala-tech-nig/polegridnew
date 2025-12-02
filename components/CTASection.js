export default function CTASection() {
  return (
    <section className="w-full py-12 px-6 bg-white text-gray-900 border border-gray-200 rounded-xl mt-10 shadow-sm">
      <div className="max-w-3xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
          Start Earning from Telecom Tower Partnerships Today
        </h2>

        {/* Sub text */}
        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-8">
          Join hundreds of landlords and organizations already earning steady income through
          Polegrid’s verified telecom tower placement program.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">

          {/* Start Earning Button */}
          <a
            href="/start-earning"
            className="px-6 py-3 text-base font-semibold rounded-md bg-green-600 text-white hover:bg-green-700 transition-all duration-200"
          >
            Start Earning Now
          </a>

          {/* Register Button (Same Link) */}
          <a
            href="/start-earning"
            className="px-6 py-3 text-base font-semibold rounded-md border border-green-600 text-green-700 hover:bg-green-50 transition-all duration-200"
          >
            Register Now
          </a>

        </div>
      </div>
    </section>
  );
}
