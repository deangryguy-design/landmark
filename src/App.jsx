function App() {
  return (
    <div className="bg-[#061408] text-white font-[Jost]">

      {/* TOP GREEN RULE */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-green-700 to-transparent"></div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#061408]/95 border-b border-green-700/30 flex items-center justify-between px-4 md:px-12 h-20">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          {/* SVG */}
          <svg width="42" height="42" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="25" fill="#0d2410" stroke="#2e7d32"/>
            <rect x="10" y="20" width="9" height="22" fill="#2e7d32"/>
            <rect x="21" y="12" width="10" height="30" fill="#43a047"/>
            <rect x="33" y="24" width="9" height="18" fill="#2e7d32"/>
          </svg>

          <div>
            <h1 className="font-[Playfair_Display] text-sm md:text-lg font-bold">
              <span className="text-green-400">Land Mark</span> Real Estate
            </h1>
            <p className="text-[8px] tracking-[3px] text-green-300/60 uppercase">
              Developers · Port Harcourt
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase">
          <a href="#">Buy</a>
          <a href="#">Sell</a>
          <a href="#">Rent</a>
          <a href="#">Invest</a>

          <a
            href="https://www.instagram.com/landmarkrealestatedevelopers"
            target="_blank"
            className="border border-green-400/30 px-3 py-2 flex items-center gap-2 hover:bg-green-800/30"
          >
            Instagram
          </a>

          <a className="bg-green-700 px-4 py-2 hover:bg-green-500">
            Book a Visit
          </a>
        </nav>
      </header>

      {/* IG BANNER */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 px-4 py-3 text-xs bg-[#0d2410] border-y border-green-700/20">
        <span className="text-white/60 text-center">
          Follow us for latest listings —
        </span>
        <a
          href="https://www.instagram.com/landmarkrealestatedevelopers"
          target="_blank"
          className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 text-white text-xs"
        >
          @landmarkrealestatedevelopers
        </a>
      </div>

      {/* HERO */}
      <section className="relative h-[85vh] min-h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&fit=crop"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-green-900/40"></div>

        <div className="absolute bottom-16 px-6 md:px-16 max-w-xl">
          <div className="bg-green-700 text-xs px-3 py-1 mb-4 inline-block">
            Premium Development · Nigeria
          </div>

          <h1 className="font-[Playfair_Display] text-3xl md:text-6xl font-bold">
            Building <span className="text-green-300 italic">Dreams</span>
            <br /> Into Reality
          </h1>

          <p className="text-white/70 mt-4 text-sm leading-relaxed">
            Delivering world-class residential and commercial properties across Nigeria.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-green-700 px-6 py-3 text-xs uppercase">
              Explore Properties
            </button>
            <button className="border px-6 py-3 text-xs uppercase">
              View Instagram
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center border-y border-green-700/20">
        {[
          ["340+", "Properties"],
          ["12", "Sites"],
          ["₦4.2B", "Portfolio"],
          ["98%", "Satisfaction"],
        ].map((s, i) => (
          <div key={i} className="py-6 border-r last:border-none border-green-700/10">
            <h2 className="text-2xl font-[Playfair_Display] text-green-300">{s[0]}</h2>
            <p className="text-[10px] text-white/50 uppercase">{s[1]}</p>
          </div>
        ))}
      </div>

      {/* LISTINGS */}
      <section className="px-4 md:px-12 py-12">
        <h2 className="font-[Playfair_Display] text-3xl mb-6">Featured Listings</h2>

        <div className="grid md:grid-cols-3 gap-2">
          
          {/* MAIN */}
          <div className="md:col-span-2 bg-[#14361a]">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900" className="h-[300px] w-full object-cover"/>
            <div className="p-4">
              <h3>Emerald Heights Estate</h3>
              <p className="text-green-300">₦85M</p>
            </div>
          </div>

          {/* SIDE */}
          <div className="flex flex-col gap-2">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600"/>
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600"/>
          </div>

        </div>
      </section>

      {/* CONSTRUCTION */}
      <section className="grid md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900" className="h-full object-cover"/>
        <div className="p-8 bg-[#0d2410]">
          <h2 className="font-[Playfair_Display] text-2xl">Built by Professionals</h2>
          <ul className="mt-4 space-y-3 text-white/70 text-sm">
            <li>✔ Certified engineers</li>
            <li>✔ Premium materials</li>
            <li>✔ Weekly updates</li>
            <li>✔ Safety compliance</li>
          </ul>
        </div>
      </section>

      {/* SITE STRIP */}
      <section className="relative h-[350px]">
        <img src="https://images.unsplash.com/photo-1590418606746-018840f9cd0f?w=1600" className="w-full h-full object-cover brightness-50"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-[Playfair_Display]">
            See Your <span className="text-green-300">Future Home</span>
          </h2>
          <button className="mt-4 bg-green-700 px-6 py-3 text-xs">
            Schedule Visit
          </button>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-4 md:px-12 py-12">
        <h2 className="font-[Playfair_Display] text-3xl mb-6">Meet Our Experts</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            ["Emeka", "https://images.unsplash.com/photo-1560250097-0b93528c311a"],
            ["Amaka", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"],
            ["Chidi", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"],
            ["Ngozi", "https://images.unsplash.com/photo-1494790108377-be9c29b29330"],
          ].map((p, i) => (
            <div key={i}>
              <img src={`${p[1]}?w=500`} className="h-[250px] w-full object-cover"/>
              <div className="p-3 bg-[#0d2410]">
                <h3>{p[0]}</h3>
                <p className="text-xs text-green-300">Team Member</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-10 bg-[#0d2410] border-y border-green-700/20">
        <div>
          <h3 className="font-[Playfair_Display] text-xl">Follow Us on Instagram</h3>
          <p className="text-sm text-white/60">@landmarkrealestatedevelopers</p>
        </div>

        <a
          href="https://www.instagram.com/landmarkrealestatedevelopers"
          target="_blank"
          className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-xs"
        >
          Follow
        </a>
      </section>

      {/* FOOTER */}
      <footer className="grid md:grid-cols-3 text-xs px-6 md:px-12 py-6 bg-black border-t border-green-700/20">
        <div>© 2026 Land Mark Real Estate</div>
        <div className="text-center">@landmarkrealestatedevelopers</div>
        <div className="text-right">info@landmarkrealestate.ng</div>
      </footer>

    </div>
  )
}

export default App