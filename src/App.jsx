function App() {
  const IG = "https://www.instagram.com/landmarkrealestatedevelopers";

  return (
    <div className="bg-[#061408] text-white font-[Jost] scroll-smooth">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#061408]/90 backdrop-blur border-b border-green-800/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center font-bold">LM</div>
            <div>
              <h1 className="font-serif text-lg"><span className="text-green-400">Land Mark</span> Real Estate</h1>
              <p className="text-[10px] text-green-300/60 tracking-widest">DEVELOPERS · NIGERIA</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-xs uppercase tracking-widest items-center">
            <a href="#" className="hover:text-green-400">Buy</a>
            <a href="#" className="hover:text-green-400">Sell</a>
            <a href="#" className="hover:text-green-400">Rent</a>
            <a href="#" className="hover:text-green-400">Invest</a>

            <a href={IG} target="_blank" rel="noopener noreferrer" className="border border-green-700 px-3 py-2 hover:bg-green-800/30">
              Instagram
            </a>

            <a href="#book" className="bg-green-600 px-4 py-2 font-semibold hover:bg-green-500">Book Visit</a>
          </nav>

          <button className="md:hidden text-xl">☰</button>
        </div>
      </header>

      {/* HERO VIDEO */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">

        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover brightness-50">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#061408]/90 via-transparent to-[#0a2e0d]/80" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold">
            Building <span className="text-green-300 italic">Dreams</span>
          </h1>

          <p className="mt-4 text-white/70">Premium real estate development across Nigeria.</p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-green-600 px-6 py-3 text-sm">Explore</button>
            <a href={IG} target="_blank" rel="noopener noreferrer" className="border px-6 py-3 text-sm">Instagram</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center bg-[#0d2410]">
        {[["340+","Properties"],["12","Sites"],["₦4.2B","Value"],["98%","Clients"]].map(([n,l]) => (
          <div key={n} className="py-6">
            <h3 className="text-green-300 text-2xl">{n}</h3>
            <p className="text-xs text-white/50">{l}</p>
          </div>
        ))}
      </div>

      {/* LISTINGS */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="font-serif text-3xl mb-6">Featured Listings</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="md:col-span-2 bg-[#14361a]">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" className="h-80 w-full object-cover" />
            <div className="p-4">Emerald Heights Estate</div>
          </div>
          <div className="flex flex-col gap-3">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" className="h-40 object-cover" />
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914" className="h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="font-serif text-3xl mb-8">Our Experts</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {["1560250097-0b93528c311a","1573496359142-b8d87734a5a2","1507003211169-0a1dd7228f2d","1494790108377-be9c29b29330"].map((img,i)=> (
            <div key={i} className="bg-[#0d2410]">
              <img src={`https://images.unsplash.com/photo-${img}`} className="h-60 w-full object-cover" />
              <div className="p-4">Agent</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK VISIT FORM */}
      <section id="book" className="px-6 md:px-12 py-16 bg-[#0d2410]">
        <h2 className="font-serif text-3xl mb-6">Book Property Inspection</h2>

        <form className="grid md:grid-cols-2 gap-4 max-w-4xl">
          <input placeholder="Full Name" className="p-3 bg-[#14361a]" />
          <input placeholder="Phone Number" className="p-3 bg-[#14361a]" />
          <input placeholder="Email" className="p-3 bg-[#14361a]" />
          <input type="date" className="p-3 bg-[#14361a]" />
          <textarea placeholder="Property of Interest" className="p-3 bg-[#14361a] md:col-span-2" />

          <button className="bg-green-600 py-3 md:col-span-2">Submit Request</button>
        </form>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="px-6 md:px-12 py-12 flex justify-between items-center bg-[#0d2410]">
        <p>@landmarkrealestatedevelopers</p>
        <a href={IG} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3">Follow</a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020a03] px-6 md:px-12 py-10 border-t border-green-900/20">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="text-xs text-white/40">© 2026 Land Mark Real Estate</div>

          <div className="text-center">
            <a href={IG} target="_blank" rel="noopener noreferrer" className="text-green-400">Instagram</a>
          </div>

          <div className="text-right text-xs text-white/40">info@landmarkrealestate.ng</div>
        </div>
      </footer>

    </div>
  );
}

export default App;
