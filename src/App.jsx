function App() {
  return (
    <div className="bg-[#060e1a] text-white">

      {/* GOLD RULE */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-12 py-4 md:h-[72px] bg-[#060e1a]/95 border-b border-yellow-700/20">
        <div>
          <h1 className="text-lg md:text-2xl font-serif font-bold tracking-[4px] md:tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-700">
            Landmark Real Estate Developers
          </h1>
          <p className="text-[8px] md:text-[9px] tracking-[3px] md:tracking-[5px] text-yellow-600/60">
            Real Estates Properties
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 mt-3 md:mt-0 text-[10px] md:text-[11px] uppercase tracking-[2px]">
          {["Buy", "Sell", "Rent", "Invest"].map((item) => (
            <a key={item} className="text-white/50 hover:text-yellow-400">
              {item}
            </a>
          ))}
          <button className="bg-yellow-500 px-4 py-1 md:px-5 md:py-2 text-[#060e1a] font-semibold">
            Book a Visit
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[80vh] md:h-[92vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&fit=crop"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-16 pb-10 md:pb-20 max-w-[700px]">
          <div className="bg-yellow-500 text-black text-[9px] md:text-xs px-3 py-1 w-fit mb-4 md:mb-6">
            Premium Development · Port Harcourt
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black leading-tight">
            Building <span className="text-yellow-300 italic">Dreams</span>
            <br /> Into Reality
          </h1>

          <p className="text-white/70 mt-3 md:mt-5 text-sm md:text-base max-w-[500px]">
            Delivering world-class residential and commercial properties across Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-8">
            <button className="bg-yellow-500 px-5 py-3 text-black text-xs font-semibold">
              Explore Properties
            </button>
            <button className="border border-white/30 px-5 py-3 text-xs">
              View Our Sites
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0e1f38] border-y border-yellow-700/20">
        {[
          ["340+", "Properties Delivered"],
          ["12", "Active Build Sites"],
          ["₦4.2B", "Portfolio Value"],
          ["98%", "Client Satisfaction"],
        ].map(([num, label]) => (
          <div key={label} className="text-center py-5 md:py-7 border-r border-b md:border-b-0 last:border-r-0 border-yellow-700/10">
            <h2 className="text-yellow-500 text-xl md:text-3xl font-serif">{num}</h2>
            <p className="text-[9px] md:text-[10px] text-white/40 uppercase">{label}</p>
          </div>
        ))}
      </div>

      {/* SECTION HEADER */}
      <section className="px-4 md:px-12 py-10 md:py-16 pb-0">
        <p className="text-[9px] md:text-[10px] text-yellow-500 tracking-[3px] md:tracking-[4px] uppercase mb-2 md:mb-3">
          Available Now
        </p>
        <h2 className="text-2xl md:text-4xl font-serif font-bold">Featured Listings</h2>
        <div className="w-12 h-[2px] bg-yellow-500 mt-3 md:mt-4 mb-6 md:mb-10"></div>
      </section>

      {/* LISTINGS */}
      <div className="px-4 md:px-12 pb-10 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">

          {/* FEATURED */}
          <div className="md:col-span-2 bg-[#162d50]">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&fit=crop"
              className="h-[220px] md:h-[340px] w-full object-cover"
            />
            <div className="p-4 md:p-5">
              <h3 className="text-yellow-200 font-serif">Emerald Heights Estate</h3>
              <p className="text-yellow-500 text-sm md:text-base">₦85,000,000</p>
            </div>
          </div>

          {/* SIDE */}
          <div className="flex md:flex-col gap-[2px]">
            {["Cruize Tower", "Palm Grove Villas"].map((name) => (
              <div key={name} className="flex-1 md:flex-none bg-[#162d50] p-4">
                <h3 className="text-yellow-200">{name}</h3>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CONSTRUCTION */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          className="w-full h-[300px] md:h-full object-cover"
        />

        <div className="p-6 md:p-16 bg-[#0e1f38]">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Built by Professionals
          </h2>
          <ul className="space-y-2 md:space-y-3 text-white/70 text-sm">
            <li>Certified engineers</li>
            <li>Top quality materials</li>
            <li>Weekly updates</li>
          </ul>
        </div>
      </div>

      {/* SITE STRIP */}
      <div className="relative h-[260px] md:h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1590418606746-018840f9cd0f"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-4xl font-serif">
            See Your <span className="text-yellow-300">Future Home</span>
          </h2>
          <button className="mt-4 bg-yellow-500 px-5 py-2 text-black text-sm">
            Schedule Visit
          </button>
        </div>
      </div>

      {/* TEAM */}
      <section className="px-4 md:px-12 py-10 md:py-16">
        <h2 className="text-2xl md:text-4xl font-serif mb-6 md:mb-10">
          Meet Our Experts
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {["Emeka Okafor", "Amaka Eze", "Chidi Nwosu", "Ngozi Adeyemi"].map((name) => (
            <div key={name} className="bg-[#0e1f38] p-4 md:p-6 text-center">
              <h3 className="text-yellow-200 text-sm md:text-base">{name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <footer className="flex flex-col md:flex-row justify-between gap-3 px-4 md:px-12 py-6 md:py-8 bg-[#020810] text-xs">
        <p className="text-white/25 text-center md:text-left">
          © 2026 Landmark Real Estate Developers
        </p>
        <p className="text-yellow-500/50 text-center md:text-right">
          info@landmarkrealestatedevelopers@gmail.com
        </p>
      </footer>

    </div>
  );
}

export default App;