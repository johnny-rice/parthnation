"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Heart, Users, Calendar, MapPin, Mail } from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

export default function Home() {
  const [showHeroText, setShowHeroText] = useState(true)
  const [isKyleCaresModalOpen, setIsKyleCaresModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollBasketballPos, setScrollBasketballPos] = useState({ y: 0, rotation: 0, bounce: 0 })
  const [isHeartMode, setIsHeartMode] = useState(false)

  // Section animation refs
  const storySection = useScrollAnimation()
  const playForParthSection = useScrollAnimation()
  const tournamentSection = useScrollAnimation()
  const mentalHealthSection = useScrollAnimation()
  const gallerySection = useScrollAnimation()
  const supportSection = useScrollAnimation()

  // Set video playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // 75% speed (slower)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Hide text when scrolled past 70% of viewport height
      // Show text when scrolled back to within 50% of viewport height
      if (scrollPosition > windowHeight * 0.7) {
        setShowHeroText(false)
      } else if (scrollPosition < windowHeight * 0.5) {
        setShowHeroText(true)
      }

      // Basketball animation based on scroll
      const scrollProgress = scrollPosition / 10 // Adjust speed
      const rotation = scrollPosition * 0.5 // Rotate as we scroll
      const bounce = Math.sin(scrollPosition * 0.02) * 20 // Create bouncing effect
      
      setScrollBasketballPos({
        y: scrollProgress,
        rotation: rotation,
        bounce: bounce
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle basketball click to show heart
  const handleBasketballClick = () => {
    setIsHeartMode(true)
    setTimeout(() => {
      setIsHeartMode(false)
    }, 1000) // Show heart for 1 second
  }
  return (
    <div className="min-h-screen bg-linear-to-b from-stone-50 to-amber-50">
      {/* Animated Basketball that follows scroll */}
      <div 
        className="fixed right-8 md:right-16 z-50 transition-all duration-500 cursor-pointer hover:scale-110 active:scale-95"
        style={{
          top: `${100 + scrollBasketballPos.y + scrollBasketballPos.bounce}px`,
          transform: `rotate(${scrollBasketballPos.rotation}deg)`,
          opacity: scrollBasketballPos.y > 0 ? 1 : 0
        }}
        onClick={handleBasketballClick}
        role="button"
        aria-label="Click for a surprise"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleBasketballClick()
          }
        }}
      >
        <div className={`text-5xl md:text-6xl drop-shadow-lg transition-all duration-300 ${isHeartMode ? 'scale-125' : 'scale-100'}`}>
          {isHeartMode ? '❤️' : '🏀'}
        </div>
      </div>

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
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center md:object-contain md:object-center z-10"
        >
          <source src="/parth_nation/video.mp4" type="video/mp4" />
        </video>
        <div 
          className={`relative z-20 text-center px-6 max-w-5xl mx-auto transition-opacity duration-500 ${
            showHeroText ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h1 className="text-7xl md:text-7xl font-extrabold text-white mb-6 text-balance">Parth Nation</h1>
          <p className="text-3xl md:text-3xl lg:text-4xl text-amber-100 mb-4 text-balance">
            Honoring the Heart 
            <br />of Charlton Basketball
          </p>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto text-pretty font-extrabold">
            We remember Parth 
            <br />by continuing the love he shared 
            <br />on and off the court.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
            Tournament Info Below
          </Button>
        </div>
      </header>

      <main id="main-content" className="relative z-30 max-w-7xl mx-auto px-4">
        {/* Parth's Story Section */}
        <section 
          ref={storySection.ref}
          className="py-20 px-4 md:px-8 bg-stone-50 rounded-3xl mt-[20vh] shadow-2xl"
          aria-labelledby="parth-story"
        >
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 fade-in-content ${storySection.isVisible ? 'visible' : ''}`}>
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 id="parth-story" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Parth's Story</h2>
          </div>
          <div className={`prose prose-lg max-w-none text-slate-700 space-y-6 fade-in-content ${storySection.isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
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
              <footer className="text-lg text-slate-600 not-italic">— Parth's Favorite Coach</footer>
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
          </div>
        </div>
      </section>

      {/* We Play for Parth Section */}
      <section 
        ref={playForParthSection.ref}
        className="py-20 px-4 md:px-8 mt-[20vh]"
        aria-label="We Play for Parth"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`bg-linear-to-r from-orange-50 to-amber-50 p-12 md:p-16 rounded-3xl border-2 border-orange-200 shadow-2xl fade-in-content ${playForParthSection.isVisible ? 'visible' : ''}`}>
            <div className="text-center space-y-6">
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
      </section>

      {/* Tournament Section */}
      <section 
        ref={tournamentSection.ref}
        className="py-20 px-4 md:px-8 bg-slate-900/90 text-white mt-[20vh] rounded-3xl shadow-2xl"
        aria-labelledby="tournament-info"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 fade-in-content ${tournamentSection.isVisible ? 'visible' : ''}`}>
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 id="tournament-info" className="text-4xl md:text-5xl font-bold mb-6 text-balance">The Parth Nation Tournament</h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto text-pretty">
              Join us for a community pickup basketball tournament to celebrate Parth's legacy and raise funds for
              mental health awareness and support services.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-12 fade-in-content ${tournamentSection.isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-orange-500 shrink-0" />
                <h3 className="text-2xl font-bold text-white">When</h3>
              </div>
              <p className="text-stone-300 text-lg">
                Saturday, December 13th, 2025
                <br />
                12:00 PM - 3:00 PM
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-orange-500 shrink-0" />
                <h3 className="text-2xl font-bold text-white">Where</h3>
              </div>
              <p className="text-stone-300 text-lg">
                Shepherd Hill Regional High School
                <br />
                <br />
                Dudley, MA
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-orange-500 shrink-0" />
                <h3 className="text-2xl font-bold text-white">Format</h3>
              </div>
              <p className="text-stone-300 text-lg">
                3v3 Pickup Games
                <br />
                All skill levels welcome
                <br />
                Teams of 3 to 4 players
                <br />
                Individuals welcome and will be assigned to teams
              </p>
            </Card>
          </div>

          <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Tournament Details</h3>
            <div className="space-y-4 text-stone-300 text-lg">
              <p className="text-pretty">
                <strong className="text-white">Registration:</strong> Open to all community members. Teams can register
                together or individuals can sign up and be placed on a team. Registration fee is $10 per player, with
                all proceeds going to Kyle Cares Inc to support mental health awareness and support services.
              </p>
              <p className="text-pretty">
                <strong className="text-white">Schedule:</strong> Games run throughout the time of the tournament. 
                Finals and awards ceremony at 2:45 PM.
              </p>
              <p className="text-pretty">
                <strong className="text-white">Purpose:</strong> This tournament is about more than basketball. We are
                raising funds for mental health awareness and local support services. Every game played honors
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
      <section 
        ref={mentalHealthSection.ref}
        className="py-20 px-4 md:px-8 bg-amber-50 mt-[20vh] rounded-3xl shadow-2xl"
        aria-labelledby="mental-health-message"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`fade-in-content ${mentalHealthSection.isVisible ? 'visible' : ''}`}>
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-6" />
            <h2 id="mental-health-message" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-balance">More Than Basketball</h2>
          </div>
          <div className={`space-y-6 text-lg text-slate-700 fade-in-content ${mentalHealthSection.isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
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

            {/* Kyle Cares Section */}
            <div className="mt-16 bg-white p-8 md:p-12 rounded-lg shadow-lg border-2 border-orange-300">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center text-balance">
                Supporting Kyle Cares Inc.
              </h3>
              <div className="space-y-5">
                <p className="text-xl leading-relaxed text-slate-700 text-pretty text-center">
                  All proceeds from the Parth Nation Tournament will be donated to{" "}
                  <a
                    href="https://kylecaresinc.org"
                    className="text-orange-600 hover:text-orange-700 underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kyle Cares Inc.
                  </a>
                  , a non-profit organization dedicated to mental health education and suicide prevention for teens and young adults.
                </p>
                <div className="text-center">
                  <Dialog open={isKyleCaresModalOpen} onOpenChange={setIsKyleCaresModalOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-orange-500 text-orange-700 hover:bg-orange-50"
                      >
                        Learn More About Kyle Cares
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl md:text-3xl font-bold text-slate-900">
                          About Kyle Cares Inc.
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <p className="text-lg leading-relaxed text-slate-700">
                          <a
                            href="https://kylecaresinc.org"
                            className="text-orange-600 hover:text-orange-700 underline font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Kyle Cares Inc.
                          </a>{" "}
                          is a non-profit organization dedicated to promoting open and honest communication about mental health
                          challenges faced by teens and young adults. Founded in memory of Kyle J. Johnson, a 19-year-old college
                          student who died by suicide in April 2018, Kyle Cares works to eliminate student self-harm and suicide by
                          creating supportive school environments where students and caregivers can seek help without shame or
                          hesitation.
                        </p>
                        <p className="text-lg leading-relaxed text-slate-700">
                          Since 2019, Kyle Cares has invested $445,000 to bring over 310 mental health workshops, trainings, and
                          stigma-breaking programs to New England high schools and colleges, directly engaging more than 84,000
                          students, 2,200 faculty, 1,550 parents, and 250 coaches in mental health education and awareness building.
                        </p>
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mt-6">
                          <p className="text-xl font-bold text-orange-800 text-center">
                            All proceeds from the Parth Nation Tournament will be donated to Kyle Cares Inc.
                          </p>
                          <p className="text-base text-slate-700 text-center mt-3">
                            By participating in this tournament, you are directly supporting mental health education and suicide
                            prevention programs for teens and young adults across New England.
                          </p>
                        </div>
                        <p className="text-base text-slate-600 text-center mt-4">
                          Learn more about their impactful work at{" "}
                          <a
                            href="https://kylecaresinc.org"
                            className="text-orange-600 hover:text-orange-700 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            kylecaresinc.org
                          </a>
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section 
        ref={gallerySection.ref}
        className="py-20 px-4 md:px-8 bg-slate-900 mt-[20vh] rounded-3xl shadow-2xl"
        aria-label="Photo Gallery"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-white text-center mb-12 text-balance fade-in-content ${gallerySection.isVisible ? 'visible' : ''}`}>
            Remembering Parth
          </h2>
          <div className={`grid md:grid-cols-3 gap-6 fade-in-content ${gallerySection.isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
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
      <section 
        ref={supportSection.ref}
        className="py-20 px-4 md:px-8 bg-stone-50 mt-[20vh] rounded-3xl shadow-2xl"
        aria-labelledby="how-to-support"
      >
        <div className="max-w-5xl mx-auto">
          <h2 id="how-to-support" className={`text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12 text-balance fade-in-content ${supportSection.isVisible ? 'visible' : ''}`}>
            How to Support Parth's Legacy
          </h2>
          <div className={`grid md:grid-cols-2 gap-8 fade-in-content ${supportSection.isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
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
          <div className={`text-center mt-12 fade-in-content ${supportSection.isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.4s'}}>
            <p className="text-2xl text-slate-900 text-pretty font-extrabold">
              This is about coming together 
              <br />in whatever way feels right for you.
            </p>
            <p className="text-2xl text-slate-900 text-pretty font-extrabold">
              Every bit of support, 
              <br />big or small, 
              <br />helps us honor Parth 
              <br />and care for our community.
            </p>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-[20vh]">
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
