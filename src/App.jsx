function App() {
  return (
    <div className="bg-[#060e1a] text-white font-sans">

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
          <a className="bg-yellow-500 text-[#060e1a] px-5 py-2 font-semibold">
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
            Building <em className="text-yellow-300">Dreams</em><br />
            Into Reality
          </h1>

          <p className="text-white/70 text-sm leading-7 mb-9 max-w-[500px]">
            From groundbreaking to handover — Landmark Real Estate Developers delivers world-class
            residential and commercial properties with unmatched craftsmanship across Nigeria.
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
          <div key={label} className="text-center py-7 border-r last:border-r-0 border-yellow-700/10">
            <span className="block text-3xl font-serif text-yellow-500 font-bold">{num}</span>
            <span className="text-[10px] text-white/40 tracking-[2px] uppercase">{label}</span>
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
          <div className="col-span-2 bg-[#162d50] group overflow-hidden">
            <div className="relative h-[340px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&fit=crop"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/80 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-yellow-500 text-[#060e1a] text-[9px] px-3 py-1 font-bold tracking-[2px]">
                Featured
              </div>
            </div>

            <div className="p-5 border-t border-yellow-700/10">
              <h3 className="text-lg font-serif text-yellow-200 font-bold">
                Emerald Heights Estate
              </h3>
              <p className="text-yellow-500/60 text-xs mb-2">
                📍 Rumuola, Port Harcourt
              </p>
              <p className="text-yellow-500 text-xl font-serif font-bold mb-2">
                ₦85,000,000
              </p>
              <div className="flex gap-4 text-xs text-white/50">
                <span>4 Bedrooms</span>
                <span>3 Bathrooms</span>
                <span>320 sqm</span>
                <span>Pool & Garden</span>
              </div>
            </div>
          </div>

          {/* SIDE */}
          <div className="flex flex-col gap-[2px]">

            {[
              {
                name: "Cruize Tower Residences",
                badge: "New",
                price: "₦120,000,000",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&fit=crop",
              },
              {
                name: "Palm Grove Villas",
                badge: "Off-Plan",
                price: "₦55,000,000",
                img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80&fit=crop",
              },
            ].map((item) => (
              <div key={item.name} className="bg-[#162d50] group">
                <div className="relative h-[220px] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-yellow-500 text-[#060e1a] text-[9px] px-3 py-1 font-bold">
                    {item.badge}
                  </div>
                </div>

                <div className="p-5 border-t border-yellow-700/10">
                  <h3 className="text-yellow-200 font-serif font-bold">{item.name}</h3>
                  <p className="text-yellow-500 text-lg font-bold">{item.price}</p>
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
          <p className="text-yellow-500 text-xs tracking-[4px] uppercase mb-3">Our Process</p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            Built by Professionals.<br />Delivered on Time.
          </h2>

          <ul className="space-y-4 text-white/70 text-sm">
            <li>Certified civil engineers and project managers overseeing every build phase.</li>
            <li>Grade-A materials sourced from verified suppliers.</li>
            <li>Real-time site monitoring with weekly reports.</li>
            <li>Compliance with Nigerian Building Code.</li>
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
          <p className="text-yellow-500 text-xs tracking-[4px] uppercase">Book a Site Visit</p>
          <h2 className="text-4xl font-serif font-black">
            See Your <span className="text-yellow-300">Future Home</span>
          </h2>
          <p className="text-white/70 text-sm">
            Walk the land, meet the engineers, witness the quality firsthand.
          </p>
          <button className="bg-yellow-500 text-[#060e1a] px-6 py-3">
            Schedule a Visit
          </button>
        </div>
      </div>

      {/* TEAM */}
      <section className="bg-[#060e1a] px-12 py-16 border-t border-yellow-700/10">
        <p className="text-[10px] text-yellow-500 tracking-[4px] uppercase mb-3">
          The People Behind the Projects
        </p>
        <h2 className="text-4xl font-serif font-bold">Meet Our Experts</h2>
        <div className="w-12 h-[2px] bg-yellow-500 mt-4 mb-10"></div>

        <div className="grid grid-cols-4 gap-[2px]">
          {[
            {
              name: "Emeka Okafor",
              role: "Senior Agent · 8 yrs",
              phone: "+234 803 000 0001",
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=85&fit=crop",
            },
            {
              name: "Amaka Eze",
              role: "Property Consultant",
              phone: "+234 803 000 0002",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=85&fit=crop",
            },
            {
              name: "Chidi Nwosu",
              role: "Site Manager",
              phone: "+234 803 000 0003",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85&fit=crop",
            },
            {
              name: "Ngozi Adeyemi",
              role: "Investment Advisor",
              phone: "+234 803 000 0004",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=85&fit=crop",
            },
          ].map((member) => (
            <div key={member.name} className="bg-[#0e1f38] overflow-hidden group">
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={member.img}
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/90 to-transparent"></div>
              </div>

              <div className="px-5 py-4 border-t-2 border-yellow-500">
                <h3 className="text-yellow-200 font-serif font-semibold">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-[1.5px] text-yellow-500/70 mt-1">
                  {member.role}
                </p>
                <p className="text-white/40 text-xs mt-2">{member.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <footer className="flex justify-between px-12 py-8 bg-[#020810] border-t border-yellow-700/20 text-xs">
        <div className="text-white/25">
          © 2026 Landmark Real Estate Developers · Port Harcourt, Rivers State, Nigeria
        </div>
        <div className="text-yellow-500/50">
          +234 803 000 0000 · info@cruizerealestate.com · www.cruizerealestate.com
        </div>
      </footer>

    </div>
  );
}

export default App;