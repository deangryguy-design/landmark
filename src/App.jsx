function App() {
  return (
    <>
      {/* GOLD RULE */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      {/* TOPBAR */}
      <header className="sticky top-0 z-50 flex items-center justify-between h-[72px] px-12 bg-[#060e1a]/95 border-b border-yellow-700/20">
        <div className="flex flex-col gap-[2px]">
          <div className="text-2xl font-bold tracking-[6px] bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-700 bg-clip-text text-transparent font-serif">
            Landmark Real Estate Developers
          </div>
          <div className="text-[9px] tracking-[5px] text-yellow-600/60">
            Real Estates Properties
          </div>
        </div>

        <nav className="flex items-center gap-8 text-[11px] uppercase tracking-[2px]">
          {["Buy", "Sell", "Rent", "Invest"].map((item) => (
            <a key={item} href="#" className="text-white/50 hover:text-yellow-400">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-yellow-500 text-[#060e1a] px-5 py-2 font-semibold"
          >
            Book a Visit
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&fit=crop"
          className="w-full h-full object-cover brightness-[0.55]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#060e1a]/80 via-[#060e1a]/40 to-[#060e1a]/70"></div>

        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-20 max-w-[720px]">
          <div className="bg-yellow-500 text-[#060e1a] text-[10px] tracking-[3px] px-4 py-1 w-fit mb-6">
            Premium Development · Port Harcourt
          </div>

          <h1 className="text-[clamp(38px,5vw,64px)] font-black font-serif leading-tight mb-5">
            Building <em className="text-yellow-300">Dreams</em>
            <br />
            Into Reality
          </h1>

          <p className="text-white/70 text-sm leading-7 mb-9 max-w-[500px]">
            From groundbreaking to handover — Landmark Real Estate Developers
            delivers world-class residential and commercial properties with
            unmatched craftsmanship across Nigeria.
          </p>

          <div className="flex gap-4">
            <a className="bg-yellow-500 text-[#060e1a] px-8 py-3 text-xs tracking-[2px] font-semibold">
              Explore Properties
            </a>
            <a className="border border-white/30 px-8 py-3 text-xs tracking-[2px]">
              View Our Sites
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="grid grid-cols-4 bg-[#0e1f38] border-y border-yellow-700/20">
        {[
          ["340+", "Properties Delivered"],
          ["12", "Active Build Sites"],
          ["₦4.2B", "Portfolio Value"],
          ["98%", "Client Satisfaction"],
        ].map(([num, label]) => (
          <div
            key={label}
            className="text-center py-7 border-r last:border-r-0 border-yellow-700/10"
          >
            <span className="block text-3xl font-serif text-yellow-500 font-bold">
              {num}
            </span>
            <span className="text-[10px] text-white/40 tracking-[2px] uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* SECTION HEADER */}
      <section className="px-12 py-16 pb-0">
        <p className="text-[10px] text-yellow-500 tracking-[4px] uppercase mb-3">
          Available Now
        </p>
        <h2 className="text-4xl font-serif font-bold">Featured Listings</h2>
        <div className="w-12 h-[2px] bg-yellow-500 mt-4 mb-10"></div>
      </section>

      {/* LISTINGS */}
      <div className="px-12 pb-20">
        <div className="grid grid-cols-3 gap-[2px]">
          {/* FEATURED */}
          <div className="col-span-2 bg-[#162d50]">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&fit=crop"
              className="h-[340px] w-full object-cover"
            />
            <div className="p-5 border-t border-yellow-700/10">
              <h3 className="text-lg font-serif text-yellow-200 font-bold">
                Emerald Heights Estate
              </h3>
              <p className="text-yellow-500/60 text-xs">
                📍 Rumuola, Port Harcourt
              </p>
              <p className="text-yellow-500 text-xl font-serif font-bold mt-2">
                ₦85,000,000
              </p>
            </div>
          </div>

          {/* SIDE LIST */}
          <div className="flex flex-col gap-[2px]">
            {[
              {
                name: "Cruize Tower Residences",
                price: "₦120,000,000",
              },
              {
                name: "Palm Grove Villas",
                price: "₦55,000,000",
              },
            ].map((item) => (
              <div key={item.name} className="bg-[#162d50]">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&fit=crop"
                  className="h-[220px] w-full object-cover"
                />
                <div className="p-5 border-t border-yellow-700/10">
                  <h3 className="text-yellow-200 font-serif font-bold">
                    {item.name}
                  </h3>
                  <p className="text-yellow-500 text-lg font-bold">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONSTRUCTION */}
      <div className="grid grid-cols-2 min-h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85&fit=crop"
          className="w-full h-full object-cover"
        />

        <div className="bg-[#0e1f38] p-16 flex flex-col justify-center border-l border-yellow-700/10">
          <p className="text-yellow-500 text-xs tracking-[4px] uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            Built by Professionals.
            <br />
            Delivered on Time.
          </h2>

          <ul className="space-y-4 text-white/70 text-sm">
            <li>Certified engineers oversee all phases.</li>
            <li>Grade-A materials with QA documentation.</li>
            <li>Weekly progress updates.</li>
            <li>Full compliance with safety standards.</li>
            <li>12-month post-handover support.</li>
          </ul>

          <button className="mt-8 bg-yellow-500 text-[#060e1a] px-6 py-3 w-fit">
            Tour an Active Site
          </button>
        </div>
      </div>

      {/* SITE STRIP */}
      <div className="relative h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1590418606746-018840f9cd0f?w=1600&q=80&fit=crop"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-5">
          <p className="text-yellow-500 text-xs tracking-[4px] uppercase">
            Book a Site Visit
          </p>
          <h2 className="text-4xl font-serif font-black">
            See Your <span className="text-yellow-300">Future Home</span>
          </h2>
          <button className="bg-yellow-500 text-[#060e1a] px-6 py-3">
            Schedule a Visit
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <footer className="flex justify-between px-12 py-8 bg-[#020810] border-t border-yellow-700/20 text-xs">
        <div className="text-white/25">
          © 2026 Landmark Real Estate Developers · Port Harcourt
        </div>
        <div className="text-yellow-500/50">
          +234 803 000 0000 · info@cruizerealestate.com
        </div>
      </footer>
    </>
  );
}

export default App;