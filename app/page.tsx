import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Calendar, MapPin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-stone-50 to-amber-50">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-orange-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Header Section */}
      <header className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Repeating background image for larger screens */}
        <div 
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: 'url(/parth_nation/photo1.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 400px',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 to-slate-900/40 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center md:object-contain md:object-center z-10"
        >
          <source src="/parth_nation/video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">Parth Nation</h1>
          <p className="text-3xl md:text-3xl lg:text-4xl text-amber-100 mb-4 text-balance">
            Honoring the Heart 
            <br />of Charlton Basketball
          </p>
          <p className="text-xl md:text-xl lg:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto text-pretty">
            We remember Parth 
            <br />by continuing the love he shared 
            <br />on and off the court.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
            Scroll down to sign Up for the Tournament
          </Button>
        </div>
      </header>

      <main id="main-content" className="relative z-30">
        {/* Parth's Story Section */}
        <section className="py-20 px-4 bg-stone-50 rounded-t-3xl" aria-labelledby="parth-story">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 id="parth-story" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Parth's Story</h2>
          </div>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-xl leading-relaxed text-pretty">
              Parth Patel grew up in Charlton, Massachusetts, where he became known as one of the greatest town league
              players to ever step on the court. His skill was undeniable, but what truly set him apart was his heart.
              Parth was the kind of teammate who lifted everyone around him, the kind of player who made the game better
              just by being there.
            </p>
            <blockquote className="my-8 border-l-4 border-orange-500 bg-orange-50 p-6 italic">
              <p className="text-xl text-slate-800 mb-2 text-pretty">
                "The closest thing Charlton had to Lebron was definitely Parth Patel. But it wasn't just the way he played. It was the way he made everyone feel like they belonged on the court."
              </p>
              <footer className="text-lg text-slate-600 not-italic">— Parth's Favorite Coach, Mr. Rice</footer>
            </blockquote>
            <p className="text-xl leading-relaxed text-pretty">
              He played with passion and led with kindness. Whether he was draining a three-pointer or encouraging a
              teammate, Parth brought people together. The local basketball community knew him not just for his talent,
              but for his spirit and the genuine love he had for the game and the people who played it.
            </p>
            <p className="text-xl leading-relaxed text-pretty">
              Parth's passing in 2024 left a hole in our hearts and our community that can never be filled. 
            </p>
            <p className="text-xl leading-relaxed text-pretty">
              Parth's impact remains. The way he
              played, the way he cared, the way he showed up for others continues to inspire us. 
            </p>
            <p className="text-xl leading-relaxed text-pretty">
              
              We honor Parth's memory by
              carrying forward the values he lived by.
            </p>
            <div className="bg-linear-to-r from-orange-50 to-amber-50 p-12 rounded-lg border-2 border-orange-200 shadow-lg mt-12">
              <div className="text-center space-y-4">
                <p className="text-3xl md:text-4xl font-bold text-orange-700">
                  His game stays with us.
                </p>
                <p className="text-3xl md:text-4xl font-bold text-orange-700">
                  His spirit stays with us.
                </p>
                <p className="text-3xl md:text-4xl font-bold text-orange-700">
                  We play for Parth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Section */}
      <section className="py-20 px-4 bg-slate-900 text-white" aria-labelledby="tournament-info">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 id="tournament-info" className="text-4xl md:text-5xl font-bold mb-6 text-balance">The Parth Nation Tournament</h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto text-pretty">
              Join us for a community pickup basketball tournament to celebrate Parth's legacy and raise funds for
              mental health awareness and support services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <Calendar className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">When</h3>
              <p className="text-stone-300 text-lg">
                Saturday, TBD 2025
                <br />
                9:00 AM - 5:00 PM
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <MapPin className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Where</h3>
              <p className="text-stone-300 text-lg">
                Charlton Location TBD
                <br />
                <br />
                Charlton, MA
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <Users className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Format</h3>
              <p className="text-stone-300 text-lg">
                5v5 Pickup Games
                <br />
                All skill levels welcome
                <br />
                Teams of 6-8 players
              </p>
            </Card>
          </div>

          <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Tournament Details</h3>
            <div className="space-y-4 text-stone-300 text-lg">
              <p className="text-pretty">
                <strong className="text-white">Registration:</strong> Open to all community members. Teams can register
                together or individuals can sign up and be placed on a team. Registration fee is $10 per player, with
                all proceeds going to local mental health services.
              </p>
              <p className="text-pretty">
                <strong className="text-white">Schedule:</strong> Games run throughout the day with breaks for food,
                music, and community time. Finals and awards ceremony at 4:00 PM.
              </p>
              <p className="text-pretty">
                <strong className="text-white">Purpose:</strong> This tournament is about more than basketball. We are
                raising funds for mental health awareness programs and local support services. Every game played honors
                Parth's memory and helps our community.
              </p>
              <p className="text-pretty">
                <strong className="text-white">Everyone is Welcome:</strong> Whether you want to play, cheer from the
                sidelines, volunteer, or just spend time with the community, we want you there.
              </p>
            </div>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              Register Now
            </Button>
            <p className="mt-4 text-stone-400">
              Questions? Contact us at{" "}
              <a
                href="mailto:ballers@parthnation.com"
                className="text-orange-400 hover:text-orange-300"
                rel="noopener noreferrer"
              >
                ballers@parthnation.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Message Section */}
      <section className="py-20 px-4 bg-amber-50" aria-labelledby="mental-health-message">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-orange-600 mx-auto mb-6" />
          <h2 id="mental-health-message" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-balance">More Than Basketball</h2>
          <div className="space-y-6 text-lg text-slate-700">
            <p className="text-xl leading-relaxed text-pretty">
              Parth Nation is grounded in support, empathy, and community care. This tournament is not only about
              basketball. It is about coming together, looking out for each other, and recognizing how real mental
              health challenges are.
            </p>
            <p className="text-xl leading-relaxed text-pretty">
              We know that life can be hard. We know that sometimes the weight feels too heavy. We want you to know that
              your feelings matter, that struggling does not make you weak, and that asking for help is one of the
              bravest things you can do.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-orange-200 mt-8">
              <p className="text-2xl font-semibold text-orange-700 text-balance">
                If you are struggling, you are not alone. Your feelings matter. We are here, together.
              </p>
            </div>
            <p className="text-base text-slate-600 mt-6">
              If you or someone you know needs support, please reach out to the{" "}
              <a
                href="https://988lifeline.org"
                className="text-orange-600 hover:text-orange-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                988 Suicide and Crisis Lifeline
              </a>{" "}
              or contact local mental health services.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-slate-900" aria-label="Photo Gallery">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 text-balance">
            Remembering Parth
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image
                src="/parth_nation/photo1.png"
                alt="Parth Patel - cherished memories on the court"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image
                src="/parth_nation/photo2.png"
                alt="Parth Patel - celebrating life and basketball"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image
                src="/parth_nation/photo3.png"
                alt="Parth Patel - treasured moments with the community"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image
                src="/parth_nation/photo4.png"
                alt="Parth Patel - memories and moments"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image
                src="/parth_nation/photo5.png"
                alt="Parth Patel - celebrating together"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image
                src="/parth_nation/photo6.png"
                alt="Parth Patel - forever in our hearts"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Support Section */}
      <section className="py-20 px-4" aria-labelledby="how-to-support">
        <div className="max-w-5xl mx-auto">
          <h2 id="how-to-support" className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12 text-balance">
            How to Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Play in the Tournament</h3>
              <p className="text-slate-700 text-lg text-pretty">
                Register your team or sign up as an individual. Every player helps us raise funds and honor Parth's love
                for the game.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Make a Donation</h3>
              <p className="text-slate-700 text-lg text-pretty">
                Can't make it to the tournament? You can still support mental health services in Parth's name through a
                direct donation.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Volunteer</h3>
              <p className="text-slate-700 text-lg text-pretty">
                We need help with setup, scorekeeping, food service, and more. Your time and energy make this event
                possible.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-orange-300 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Show Up</h3>
              <p className="text-slate-700 text-lg text-pretty">
                Come watch the games, spend time with the community, and be part of something meaningful. Your presence
                matters.
              </p>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-slate-700 text-pretty">
              This is not about demands or obligations. It is about coming together in whatever way feels right for you.
              Every bit of support, big or small, helps us honor Parth and care for our community.
            </p>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Parth Nation</h3>
          <p className="text-stone-400 mb-6 text-pretty">
            Made with love by friends, family, and the Charlton community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <a
              href="mailto:ballers@parthnation.com"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
              ballers@parthnation.com
            </a>
          </div>
          <p className="text-sm text-stone-500 text-pretty">
            In loving memory of Parth Patel. His spirit lives on in every game we play and every person we support.
          </p>
        </div>
      </footer>
    </div>
  )
}
