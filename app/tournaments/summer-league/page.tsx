import Link from "next/link";

export default function SummerLeaguePage() {
  const seasons = [
    { year: "2026", champion: "TBD", status: "Upcoming" },
    { year: "2025", champion: "Braziliant", status: "Completed" },
    { year: "2024", champion: "Scissors FC", status: "Completed" },
    { year: "2023", champion: "CKA United", status: "Completed" },
    { year: "2022", champion: "Braziliant", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-20 px-6 border-b-4 border-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-white hover:text-gray-300 mb-4 inline-block transition-colors flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">SUMMER LEAGUE</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Keep the momentum going through summer. Perfect weather, perfect football.
          </p>
        </div>
      </header>

      {/* Season History */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 text-black">SEASON HISTORY</h2>
            <div className="w-24 h-1 bg-black"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seasons.map((season) => (
              <div key={season.year} className="bg-black text-white rounded p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold">{season.year}</h3>
                  <span className={`px-3 py-1 rounded text-sm font-semibold ${
                    season.status === "Upcoming" 
                      ? "bg-white text-black" 
                      : "bg-gray-700 text-white"
                  }`}>
                    {season.status}
                  </span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 mb-2">Champion</p>
                  <p className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">{season.champion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Benefits */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">WHY SUMMER FOOTBALL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">☀️ PERFECT WEATHER</h3>
              <p className="text-gray-300">
                Long evenings and great weather make summer football special. Play in ideal conditions.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">💪 STAY SHARP</h3>
              <p className="text-gray-300">
                Don't lose fitness over summer. Keep playing, keep improving, and be ready for the new season.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">🎉 SOCIAL FUN</h3>
              <p className="text-gray-300">
                Relaxed summer atmosphere. Great football with friends in the sunshine.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">🏆 MORE TROPHIES</h3>
              <p className="text-gray-300">
                Another chance to win silverware. Keep the competitive spirit alive all year round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-black">DON'T STOP PLAYING</h2>
          <p className="text-xl mb-8 text-gray-700">
            Join the summer league and keep your team together through the off-season.
          </p>
          <a
            href="https://www.instagram.com/hydepremierleague/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded font-bold text-lg hover:bg-gray-800 transition-all inline-block transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
