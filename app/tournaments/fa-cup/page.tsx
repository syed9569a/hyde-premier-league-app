import Link from "next/link";

export default function FACupPage() {
  const editions = [
    { year: "2026", winner: "TBD", status: "Upcoming" },
    { year: "2025", winner: "Team Z", status: "Completed" },
    { year: "2024", winner: "Braziliant", status: "Completed" },
    { year: "2023", winner: "Mighty Morphin FC", status: "Completed" },
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
          <h1 className="text-6xl md:text-7xl font-bold mb-4">FA CUP</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Knockout football at its finest. One bad game and you're out. Pure drama.
          </p>
        </div>
      </header>

      {/* Tournament History */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 text-black">TOURNAMENT HISTORY</h2>
            <div className="w-24 h-1 bg-black"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editions.map((edition) => (
              <div key={edition.year} className="bg-black text-white rounded p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold">{edition.year}</h3>
                  <span className={`px-3 py-1 rounded text-sm font-semibold ${
                    edition.status === "Upcoming" 
                      ? "bg-white text-black" 
                      : "bg-gray-700 text-white"
                  }`}>
                    {edition.status}
                  </span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 mb-2">Winner</p>
                  <p className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">{edition.winner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">TOURNAMENT FORMAT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">KNOCKOUT STYLE</h3>
              <p className="text-gray-300">
                Single elimination format. Lose one match and you're out. Every game is a final.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">GIANT KILLINGS</h3>
              <p className="text-gray-300">
                Any team can beat anyone on their day. Upsets and dramatic moments guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-black">READY FOR THE CHALLENGE?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Test your team in the most dramatic knockout competition.
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
