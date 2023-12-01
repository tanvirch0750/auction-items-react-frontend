function Banner() {
  return (
    <div className="hero h-[calc(100vh-84px)]">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-emerald-600 uppercase">
            Game on, Bid On
          </h1>
          <p className="py-6 text-2xl text-gray-400">
            Secure your piece of sports history. Unveilling Exclusive Auctions
            for Authentic Sports Memorabilia - Bid, Win, and Own a Piece of
            Athletic History!
          </p>
          <button className="btn btn-primary bg-emerald-600 px-8 hover:bg-emerald-500 mt-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
