function App() {
  return (
    <div className="bg-[#060e1a] text-white">

      {/* GOLD RULE */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between md:items-center px-4 md:px-12 py-4 bg-[#060e1a]/95 border-b border-yellow-700/20">
        <div>
          <h1 className="text-lg md:text-2xl font-serif font-bold tracking-[4px] md:tracking-[6px] bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-700 bg-clip-text text-transparent">
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
          className="w-full h-full object-cover brightness-[0.55]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#060e1a]/80 via-[#060e1a]/40 to-[#060e1a]/70"></div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-16 pb-10 md:pb-20 max-w-[720px]">
          <div className="bg-yellow-500 text-[#060e1a] text-[9px] md:text-[10px] tracking-[3px] px-3 md:px-4 py-1 w-fit mb-4 md:mb-6">
            Premium Development · Port Harcourt
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black font-serif leading-tight mb-4 md:mb-5">
            Building <em className="text-yellow-300 italic">Dreams</em><br />
            Into Reality
          </h1>

          <p className="text-white/70 text-sm md:text-base leading-6 md:leading-7 mb-6 md:mb-9 max-w-[500px]">
            From groundbreaking to handover — Landmark Real Estate Developers delivers world-class
            residential and commercial properties across Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button className="bg-yellow-500 text-[#060e1a] px-6 md:px-8 py-3 text-xs tracking-[2px] font-semibold">
              Explore Properties
            </button>
            <button className="border border-white/30 px-6 md:px-8 py-3 text-xs tracking-[2px]">
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
          <div key={label} className="text-center py-5 md:py-7 border border-yellow-700/10">
            <span className="block text-xl md:text-3xl font-serif text-yellow-500 font-bold">
              {num}
            </span>
            <span className="text-[9px] md:text-[10px] text-white/40 tracking-[2px] uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* LISTINGS HEADER */}
      <section className="px-4 md:px-12 py-10 md:py-16 pb-0">
        <p className="text-[9px] md:text-[10px] text-yellow-500 tracking-[4px] uppercase mb-2 md:mb-3">
          Available Now
        </p>
        <h2 className="text-2xl md:text-4xl font-serif font-bold">Featured Listings</h2>
        <div className="w-12 h-[2px] bg-yellow-500 mt-3 md:mt-4 mb-6 md:mb-10"></div>
      </section>

      {/* LISTINGS */}
      <div className="px-4 md:px-12 pb-10 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">

          {/* FEATURED */}
          <div className="md:col-span-2 bg-[#162d50] group">
            <div className="relative h-[240px] md:h-[340px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&fit=crop"
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/80 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-yellow-500 text-[#060e1a] text-[9px] px-3 py-1 font-bold tracking-[2px]">
                Featured
              </div>
            </div>

            <div className="p-4 md:p-5 border-t border-yellow-700/10">
              <h3 className="text-yellow-200 font-serif font-bold">Emerald Heights Estate</h3>
              <p className="text-yellow-500/60 text-xs mb-2">📍 Rumuola, Port Harcourt</p>
              <p className="text-yellow-500 font-serif text-lg md:text-xl font-bold mb-2">
                ₦85,000,000
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-white/50">
                <span>4 Bedrooms</span>
                <span>3 Bathrooms</span>
                <span>320 sqm</span>
                <span>Pool & Garden</span>
              </div>
            </div>
          </div>

          {/* SIDE LISTINGS */}
          <div className="flex flex-col gap-[2px]">
            {[
              {
                name: "Cruize Tower Residences",
                badge: "New",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&fit=crop",
                price: "₦120,000,000",
              },
              {
                name: "Palm Grove Villas",
                badge: "Off-Plan",
                img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80&fit=crop",
                price: "₦55,000,000",
              },
            ].map((item) => (
              <div key={item.name} className="bg-[#162d50] group">
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-yellow-500 text-[#060e1a] text-[9px] px-3 py-1 font-bold">
                    {item.badge}
                  </div>
                </div>

                <div className="p-4 md:p-5 border-t border-yellow-700/10">
                  <h3 className="text-yellow-200 font-serif font-bold">{item.name}</h3>
                  <p className="text-yellow-500 font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <section className="px-4 md:px-12 py-10 md:py-16">
        <h2 className="text-2xl md:text-4xl font-serif mb-6 md:mb-10">
          Meet Our Experts
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            {
              name: "Emeka Okafor",
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=85&fit=crop",
            },
            {
              name: "Amaka Eze",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=85&fit=crop",
            },
            {
              name: "Chidi Nwosu",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85&fit=crop",
            },
            {
              name: "Ngozi Adeyemi",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=85&fit=crop",
            },
          ].map((member) => (
            <div key={member.name} className="bg-[#0e1f38] group">
              <div className="relative h-[200px] md:h-[280px] overflow-hidden">
                <img
                  src={member.img}
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/90 to-transparent"></div>
              </div>
              <div className="p-4 border-t-2 border-yellow-500 text-center">
                <h3 className="text-yellow-200">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <footer className="flex flex-col md:flex-row justify-between px-4 md:px-12 py-6 md:py-8 bg-[#020810] text-xs">
        <p className="text-white/25 text-center md:text-left">
          © 2026 Landmark Real Estate Developers · Port Harcourt
        </p>
        <p className="text-yellow-500/50 text-center md:text-right">
          +234 803 000 0000 · info@landmarkrealestatedevelopers@gmail.com
        </p>
      </footer>

    </div>
  );
}

export default App;