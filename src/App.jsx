function App() {
  return (
    <div className="bg-[#061408] text-white font-[Jost]">

      {/* TOP GREEN RULE */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-green-600 to-transparent" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#061408]/90 border-b border-green-800/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold">
              LM
            </div>
            <div>
              <h1 className="font-serif text-lg tracking-wide">
                <span className="text-green-400">Land Mark</span> Real Estate
              </h1>
              <p className="text-[10px] tracking-widest text-green-300/60">
                DEVELOPERS · NIGERIA
              </p>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-green-400">Buy</a>
            <a href="#" className="hover:text-green-400">Sell</a>
            <a href="#" className="hover:text-green-400">Rent</a>
            <a href="#" className="hover:text-green-400">Invest</a>

            <a
              href="#"
              className="bg-green-600 px-4 py-2 font-semibold hover:bg-green-500 transition"
            >
              Book Visit
            </a>
          </nav>

          {/* MOBILE MENU */}
          <button className="md:hidden text-green-400 text-xl">☰</button>
        </div>
      </header>

      {/* HERO VIDEO */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover brightness-50"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-construction-workers-on-site-5175/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#061408]/90 via-transparent to-[#0a2e0d]/80" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 max-w-3xl">
          <span className="bg-green-600 text-xs px-4 py-2 uppercase tracking-widest mb-6 inline-block">
            Premium Development · Nigeria
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Building <span className="text-green-300 italic">Dreams</span><br />
            Into Reality
          </h1>

          <p className="mt-4 text-white/70 max-w-lg">
            Delivering world-class residential and commercial properties across Nigeria with unmatched craftsmanship.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-green-600 px-6 py-3 text-sm font-semibold uppercase">
              Explore Properties
            </button>
            <button className="border border-white/40 px-6 py-3 text-sm uppercase hover:border-green-400">
              View Instagram
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center bg-[#0d2410] border-y border-green-800/20">
        {[
          ["340+", "Properties"],
          ["12", "Sites"],
          ["₦4.2B", "Value"],
          ["98%", "Satisfaction"]
        ].map(([num, label]) => (
          <div key={num} className="py-6 border-r last:border-none border-green-800/10">
            <h3 className="text-green-300 text-2xl font-serif">{num}</h3>
            <p className="text-xs uppercase text-white/50">{label}</p>
          </div>
        ))}
      </div>

      {/* LISTINGS */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="font-serif text-3xl mb-6">Featured Listings</h2>

        <div className="grid md:grid-cols-3 gap-2">

          {/* BIG CARD */}
          <div className="md:col-span-2 bg-[#14361a]">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
              className="h-80 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-serif text-lg">Emerald Heights Estate</h3>
              <p className="text-green-300 text-sm">₦85,000,000</p>
            </div>
          </div>

          {/* SIDE */}
          <div className="flex flex-col gap-2">
            <div className="bg-[#14361a]">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" className="h-40 w-full object-cover" />
              <div className="p-3">Tower Residences</div>
            </div>
            <div className="bg-[#14361a]">
              <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914" className="h-40 w-full object-cover" />
              <div className="p-3">Palm Grove Villas</div>
            </div>
          </div>

        </div>
      </section>

      {/* CONSTRUCTION */}
      <section className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          className="h-full object-cover"
        />
        <div className="p-10 bg-[#0d2410]">
          <h2 className="font-serif text-2xl mb-4">
            Built by Professionals
          </h2>
          <ul className="space-y-3 text-white/70">
            <li>✔ Certified engineers</li>
            <li>✔ Grade-A materials</li>
            <li>✔ Weekly progress updates</li>
            <li>✔ Nigerian compliance</li>
          </ul>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="font-serif text-3xl mb-8">Our Experts</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Emeka Okafor","https://images.unsplash.com/photo-1560250097-0b93528c311a"],
            ["Amaka Eze","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"],
            ["Chidi Nwosu","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"],
            ["Ngozi Adeyemi","https://images.unsplash.com/photo-1494790108377-be9c29b29330"]
          ].map(([name,img]) => (
            <div key={name} className="bg-[#0d2410]">
              <img src={img} className="h-60 w-full object-cover"/>
              <div className="p-4">
                <h3 className="font-serif">{name}</h3>
                <p className="text-xs text-green-300">Real Estate Expert</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="bg-[#0d2410] px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl">Follow Our Journey</h3>
          <p className="text-white/60 text-sm">
            Real-time updates from our construction sites
          </p>
        </div>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm uppercase">
          Follow Instagram
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020a03] px-6 md:px-12 py-10 border-t border-green-900/20">

        <div className="grid md:grid-cols-3 gap-6 items-center">

          {/* LEFT */}
          <div className="text-xs text-white/40">
            © 2026 Land Mark Real Estate Developers
          </div>

          {/* CENTER */}
          <div className="text-center text-green-400 text-sm">
            info@landmarkrealestate.ng
          </div>

          {/* RIGHT */}
          <div className="text-right text-xs text-white/40">
            www.landmarkrealestate.ng
          </div>

        </div>

      </footer>

    </div>
  )
}

export default App