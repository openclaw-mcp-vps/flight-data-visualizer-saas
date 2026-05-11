export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Aviation Tools
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Interactive Flight Path<br />
          <span className="text-[#58a6ff]">Visualizations for Pilots</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your flight data (GPX, KML, CSV) and instantly generate beautiful, shareable interactive maps with altitude, speed, and route analytics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Visualizing — $19/mo
          </a>
          <a
            href="#features"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See Features
          </a>
        </div>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-left" id="features">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-[#58a6ff] text-2xl mb-3">✈</div>
              <h3 className="text-white font-semibold mb-2">Multi-Format Upload</h3>
              <p className="text-[#8b949e] text-sm">Supports GPX, KML, and CSV flight logs from any avionics system or GPS device.</p>
            </div>
            <div>
              <div className="text-[#58a6ff] text-2xl mb-3">🗺</div>
              <h3 className="text-white font-semibold mb-2">Interactive Maps</h3>
              <p className="text-[#8b949e] text-sm">Powered by Leaflet and Mapbox. Zoom, pan, and explore every waypoint of your flight.</p>
            </div>
            <div>
              <div className="text-[#58a6ff] text-2xl mb-3">📊</div>
              <h3 className="text-white font-semibold mb-2">Flight Analytics</h3>
              <p className="text-[#8b949e] text-sm">Altitude profiles, speed charts, and route summaries — all auto-generated from your data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Pilot</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited flight uploads',
              'GPX, KML & CSV support',
              'Interactive Leaflet/Mapbox maps',
              'Altitude & speed analytics',
              'Shareable visualization links',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What flight data formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">FlightViz supports GPX, KML, and CSV files exported from most modern avionics systems, Garmin devices, ForeFlight, and standard GPS loggers.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I share my flight visualizations?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every visualization gets a unique shareable link. Share with students, colleagues, or post to aviation communities — no account required to view.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How do I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Cancel anytime from your billing portal. No contracts, no cancellation fees. Your visualizations remain accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} FlightViz. Built for pilots, by pilots.
      </footer>
    </main>
  );
}
