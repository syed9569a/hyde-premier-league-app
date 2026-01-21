import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-20 px-6 border-b-4 border-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-white hover:text-gray-300 mb-4 inline-block transition-colors flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">ABOUT US</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Building a thriving football community in Hyde, one match at a time.
          </p>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-6 text-black">OUR STORY</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              What began as a simple idea between two brothers growing up in the heart of the community has grown into something far bigger than anyone could have imagined. Raised on the same streets, sharing the same muddy pitches and floodlit evenings, their love for football was never just about the game – it was about belonging. With nothing more than a ball, a vision, and an unshakeable belief in bringing people together, they set out to provide regular football for those around them.
            </p>
            
            <p>
              That spark truly ignited when <strong>Mohammed Abu Khalid</strong> first approached the idea and shared it with his close friend <strong>Nurul</strong>. What started as a casual conversation soon became a movement. Four remarkable years on, that single idea has transformed into a thriving legacy of multiple summer and winter leagues, alongside eagerly anticipated tournaments that have become fixtures in the community calendar. Week after week, season after season, football has become the language that unites everyone.
            </p>
            
            <p>
              More than just matches and trophies, this journey has stitched the community together. Touchlines have become meeting places where generations mix, where adults and youngsters talk, laugh, learn, and grow together. The game has sparked conversations that go far beyond football – building respect, confidence, and a shared sense of pride. What began as an idea between friends has evolved into a powerful force for unity, proving that when a community comes together around a common passion, something truly special is born.
            </p>
            
            <div className="bg-black text-white rounded-lg p-8 mt-12">
              <p className="text-xl italic text-center">
                "From our flagship Premier League to the knockout drama of the FA Cup, the elite Champions League, and the vibrant Summer League, we keep the football spirit alive year-round."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-6 text-black">OUR FOUNDERS</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The visionaries who brought Hyde Premier League to life
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="text-center max-w-sm">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-black shadow-2xl">
                <Image
                  src="/founder_1.jpg"
                  alt="Nurul Ullah"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Nurul Ullah</h3>
              <p className="text-lg text-gray-600 font-semibold mb-3">Co-Founder</p>
              <p className="text-gray-700 leading-relaxed">
                Joining forces with Mohammed Abu Khalid, Nurul helped transform a simple conversation into a thriving movement, bringing structure and dedication to make Hyde Premier League a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-5 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6">OUR MISSION</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To provide high-quality, organized football leagues that bring the Hyde community together, 
                promote healthy competition, and create unforgettable moments on the pitch. We're committed 
                to making football accessible to everyone, regardless of skill level or background.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6">OUR VISION</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the premier local football league in Hyde, recognized for our community spirit, 
                competitive integrity, and commitment to the beautiful game. We envision a future where 
                football continues to unite people, create lifelong memories, and inspire the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4 text-black">WHAT WE OFFER</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Multiple Tournaments</h3>
              <p className="text-gray-700">
                Four distinct competitions throughout the year, each offering unique challenges and excitement.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                👥
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Community Focus</h3>
              <p className="text-gray-700">
                Building friendships and connections that extend far beyond the pitch.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                ⚽
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Organized Fixtures</h3>
              <p className="text-gray-700">
                Well-structured leagues with regular fixtures, fair scheduling, and professional organization.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Stats & Records</h3>
              <p className="text-gray-700">
                Track your team's performance with detailed statistics and historical records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4">OUR VALUES</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">RESPECT</h3>
              <p className="text-gray-300">
                We treat all players, teams, and officials with dignity and respect, fostering a positive 
                environment where everyone feels valued.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">INTEGRITY</h3>
              <p className="text-gray-300">
                Fair play and honest competition are at the heart of everything we do. We uphold the 
                highest standards of sportsmanship.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">PASSION</h3>
              <p className="text-gray-300">
                Our love for football drives us to create the best possible experience for every player 
                and supporter in our community.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">INCLUSIVITY</h3>
              <p className="text-gray-300">
                Football is for everyone. We welcome players of all backgrounds, abilities, and 
                experiences to be part of our league.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">EXCELLENCE</h3>
              <p className="text-gray-300">
                We strive for the highest quality in everything from match organization to player 
                experience and community engagement.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all">
              <h3 className="text-2xl font-bold mb-4">FUN</h3>
              <p className="text-gray-300">
                At the end of the day, it's about enjoying the beautiful game. We ensure every match 
                is an experience to remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4 text-black">BY THE NUMBERS</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-black mb-2">100+</div>
              <p className="text-xl text-gray-700">Active Players</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-black mb-2">100+</div>
              <p className="text-xl text-gray-700">Games Played</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-black mb-2">3</div>
              <p className="text-xl text-gray-700">Major Tournaments</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-black mb-2">Year-Round</div>
              <p className="text-xl text-gray-700">Football Action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">COMMUNITY IMPACT</h2>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <p className="text-lg text-gray-300 mb-4">
                Hyde Premier League is more than just a football league – we're a cornerstone of the local 
                community. Our matches bring people together, create social connections, and promote 
                physical and mental wellbeing through sport.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                We've helped countless players discover their love for the game, form lasting friendships, 
                and stay active throughout the year. From regular season matches to summer tournaments, 
                we ensure there's always an opportunity to play.
              </p>
              <p className="text-lg text-gray-300">
                Our commitment to keeping football accessible and enjoyable has made Hyde Premier League 
                a beloved institution in the local area, and we're proud to continue growing this legacy.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🤝</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Building Connections</h3>
                    <p className="text-gray-300">Creating lasting friendships through shared passion</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">💪</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Promoting Health</h3>
                    <p className="text-gray-300">Encouraging active lifestyles in our community</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🌟</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inspiring Excellence</h3>
                    <p className="text-gray-300">Motivating players to reach their potential</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎉</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Creating Memories</h3>
                    <p className="text-gray-300">Unforgettable moments on and off the pitch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-black">BE PART OF OUR STORY</h2>
          <p className="text-xl mb-8 text-gray-700">
            Whether you're looking to compete, support, or get involved, there's a place for you at Hyde Premier League.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/hydepremierleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded font-bold text-lg hover:bg-gray-800 transition-all inline-block transform hover:scale-105"
            >
              Follow Us on Instagram
            </a>
            <Link
              href="/"
              className="bg-white text-black border-2 border-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-all inline-block transform hover:scale-105"
            >
              Explore Tournaments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
