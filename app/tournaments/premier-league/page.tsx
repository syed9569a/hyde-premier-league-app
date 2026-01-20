import Link from "next/link";

export default function PremierLeaguePage() {
  const seasons = [
    { year: "2026/27", champion: "TBD", status: "Upcoming" },
    { year: "2025/26", champion: "Inter Hyde", status: "Completed" },
    { year: "2024/25", champion: "Team Z", status: "Completed" },
    { year: "2023/24", champion: "Musulman FC", status: "Completed" },
    { year: "2022/23", champion: "Braziliant", status: "Completed" },
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
          <h1 className="text-6xl md:text-7xl font-bold mb-4">PREMIER LEAGUE</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            The flagship competition. Weekly fixtures, fierce rivalries, and the ultimate bragging rights.
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
                    season.status === "Ongoing" 
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

      {/* Stats Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-white">COMPETITION STATS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">3</div>
              <p className="text-gray-300">Seasons Completed</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">50+</div>
              <p className="text-gray-300">Total Matches</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">200+</div>
              <p className="text-gray-300">Goals Scored</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">12+</div>
              <p className="text-gray-300">Teams Participated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-black">WANT TO COMPETE?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Join the next season and compete for glory in the Hyde Premier League.
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
