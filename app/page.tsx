import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-black text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">HYDE PREMIER LEAGUE</h1>
          <div className="hidden md:flex gap-6">
            <a href="#leagues" className="hover:text-gray-300 transition-colors">Tournaments</a>
            <a href="#why-play" className="hover:text-gray-300 transition-colors">Why Play</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
                WELCOME TO THE PREMIER LEAGUE
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-slide-up">
              HYDE PREMIER<br />LEAGUE
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-gray-300 animate-slide-up animation-delay-200">
              More Than Just Football. Fun, Fast and Friendly Local Football Leagues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
              <Link
                href="#leagues"
                className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Tournaments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Repeating Stats Section (PowerLeague Style) */}
      <section className="bg-white border-t-4 border-b-4 border-black py-12 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-xl font-bold text-black">
          <span className="mx-8">📊 100+ Games Played</span>
          <span className="mx-8">👥 100+ Active Players</span>
          <span className="mx-8">🏆 4 Major Tournaments</span>
          <span className="mx-8">⚽ Growing Community</span>
          <span className="mx-8">📊 100+ Games Played</span>
          <span className="mx-8">👥 100+ Active Players</span>
          <span className="mx-8">🏆 4 Major Tournaments</span>
          <span className="mx-8">⚽ Growing Community</span>
        </div>
      </section>

      {/* Leagues Section */}
      <section id="leagues" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-black">
              OUR TOURNAMENTS
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the thrill of competitive football across multiple formats. 
              From weekly league action to knockout tournaments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Premier League */}
            <Link href="/tournaments/premier-league">
              <div className="bg-black text-white rounded overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">⚽</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">Premier League</h3>
                  <p className="text-gray-300 mb-4">
                    The flagship competition. Weekly fixtures, fierce rivalries, and the ultimate bragging rights.
                  </p>
                  <div className="flex items-center group-hover:gap-3 transition-all gap-0">
                    <span className="font-semibold">View History</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* FA Cup */}
            <Link href="/tournaments/fa-cup">
              <div className="bg-black text-white rounded overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">🏆</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">FA Cup</h3>
                  <p className="text-gray-300 mb-4">
                    Knockout football at its finest. One bad game and you're out. Pure drama.
                  </p>
                  <div className="flex items-center group-hover:gap-3 transition-all gap-0">
                    <span className="font-semibold">View History</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Champions League */}
            <Link href="/tournaments/champions-league">
              <div className="bg-black text-white rounded overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">⭐</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">Champions League</h3>
                  <p className="text-gray-300 mb-4">
                    Elite competition for the best teams. Midweek magic and European nights.
                  </p>
                  <div className="flex items-center group-hover:gap-3 transition-all gap-0">
                    <span className="font-semibold">View History</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Summer League */}
            <Link href="/tournaments/summer-league">
              <div className="bg-black text-white rounded overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">☀️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">Summer League</h3>
                  <p className="text-gray-300 mb-4">
                    Keep the momentum going through summer. Perfect weather, perfect football.
                  </p>
                  <div className="flex items-center group-hover:gap-3 transition-all gap-0">
                    <span className="font-semibold">View History</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Play Section */}
      <section id="why-play" className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              WHY HYDE PREMIER LEAGUE?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto">
              More than just matches. It's about community, competition, and creating memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white text-black w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                <span className="text-5xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-200 transition-colors">Community First</h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                Build lasting friendships with local players who share your passion for football.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white text-black w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                <span className="text-5xl">💪</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-200 transition-colors">Stay Active</h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                Burn calories, improve fitness, and boost your mental health through regular play.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white text-black w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                <span className="text-5xl">🏅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-200 transition-colors">Competitive Edge</h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                Test yourself against the best. Chase silverware and cement your legacy.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            READY TO KICK OFF?
          </h2>
          <p className="text-xl mb-8 text-gray-300 animate-slide-up animation-delay-200">
            Join hundreds of players in the most exciting local football leagues. 
            Win, lose, or draw – the buzz of the game is what it's all about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <a
              href="https://www.instagram.com/hydepremierleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 duration-300"
            >
              Follow Us on Instagram
            </a>
            <Link
              href="#leagues"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105 duration-300"
            >
              Explore Tournaments
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16 px-6 border-t-4 border-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">HYDE PREMIER LEAGUE</h3>
              <p className="text-gray-400">
                The home of local football in Hyde. Building community through sport.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">TOURNAMENTS</h4>
              <ul className="space-y-3">
                <li><Link href="/tournaments/premier-league" className="hover:text-white transition-colors duration-300">Premier League</Link></li>
                <li><Link href="/tournaments/fa-cup" className="hover:text-white transition-colors duration-300">FA Cup</Link></li>
                <li><Link href="/tournaments/champions-league" className="hover:text-white transition-colors duration-300">Champions League</Link></li>
                <li><Link href="/tournaments/summer-league" className="hover:text-white transition-colors duration-300">Summer League</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">CONNECT</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.instagram.com/hydepremierleague/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Instagram
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Hyde Premier League. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
