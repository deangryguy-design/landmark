function App() {
  return (
    <div className="bg-[#061408] text-white font-[Jost]">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#061408]/80 border-b border-green-700/20">
        <div className="flex items-center justify-between px-6 md:px-12 h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-green-800/40">
              🏢
            </div>
            <div>
              <h1 className="font-[Playfair_Display] text-lg font-semibold">
                <span className="text-green-400">Land Mark</span> Real Estate
              </h1>
              <p className="text-[10px] text-green-300/60 tracking-[2px] uppercase">
                Developers · Nigeria
              </p>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase">
            <a className="hover:text-green-400 transition">Buy</a>
            <a className="hover:text-green-400 transition">Sell</a>
            <a className="hover:text-green-400 transition">Rent</a>
            <a className="hover:text-green-400 transition">Invest</a>

            {/* Divider */}
            <div className="h-5 w-px bg-white/20"></div>


            <button className="bg-gradient-to-r from-green-700 to-green-500 px-5 py-2 text-white font-semibold tracking-wider hover:opacity-90 transition">
              Book Visit
            </button>
          </nav>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden text-2xl">☰</div>
        </div>
      </header>

      {/* HERO WITH VIDEO */}
      <section className="relative h-screen">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-construction-site-9716/1080p.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#061408]/70 to-green-900/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex items-end h-full px-6 md:px-16 pb-20 max-w-2xl">
          <div>
            <div className="bg-green-700 text-xs px-4 py-1 inline-block mb-6 tracking-widest">
              Premium Development · Nigeria
            </div>

            <h1 className="font-[Playfair_Display] text-4xl md:text-6xl font-bold leading-tight">
              Building <span className="text-green-300 italic">Dreams</span>
              <br /> Into Reality
            </h1>

            <p className="mt-5 text-white/70 text-sm md:text-base leading-relaxed">
              From foundation to finish — delivering world-class residential and commercial
              properties with unmatched craftsmanship.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-green-700 px-6 py-3 text-xs uppercase tracking-widest hover:bg-green-500 transition">
                Explore Properties
              </button>

              <button className="border border-white/40 px-6 py-3 text-xs uppercase tracking-widest hover:border-green-400 hover:text-green-300 transition">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* (KEEP YOUR EXISTING SECTIONS BELOW HERE — unchanged) */}

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-[#020a03] border-t border-green-700/20 mt-16">
        <div className="grid md:grid-cols-4 gap-10 px-6 md:px-12 py-12">

          {/* BRAND */}
          <div>
            <h2 className="font-[Playfair_Display] text-xl mb-3">
              <span className="text-green-400">Land Mark</span>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Premium real estate development company delivering high-quality
              residential and commercial properties across Nigeria.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest text-green-300">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>About Us</li>
              <li>Projects</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest text-green-300">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Property Sales</li>
              <li>Real Estate Investment</li>
              <li>Construction</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest text-green-300">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Port Harcourt, Nigeria</li>
              <li>+234 803 000 0000</li>
              <li>info@landmarkrealestate.ng</li>
            </ul>

            <a
              href="https://www.instagram.com/landmarkrealestatedevelopers"
              target="_blank"
              className="inline-block mt-4 text-green-400 text-sm hover:underline"
            >
              @landmarkrealestatedevelopers
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-green-700/20 px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between text-xs text-white/40">
          <span>© 2026 Land Mark Real Estate Developers Ltd</span>
          <span>All rights reserved</span>
        </div>
      </footer>

    </div>
  )
}

export default App