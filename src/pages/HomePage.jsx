import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calculator, Apple, Activity, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HomePage = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const motivationalQuotes = ["The iron never lies to you. You can walk outside and listen to all kinds of talk, get told that you're a god or a total bastard. The iron will always kick you the real deal.", "Strength does not come from physical capacity. It comes from an indomitable will.", "The successful warrior is the average person with laser-like focus.", "Champions aren't made in the gyms. Champions are made from something deep inside them - a desire, a dream, a vision.", "Your body can stand almost anything. It's your mind that you have to convince.", "The pain you feel today will be the strength you feel tomorrow.", "Success isn't given. It's earned in the gym, in every rep, in every set, in every choice you make."];
  const imageDescriptions = ["Powerful athlete lifting heavy barbell in modern gym", "Determined powerlifter performing deadlift with perfect form", "Muscular person doing squats with heavy weights", "Focused athlete bench pressing in professional gym setting", "Strong individual performing overhead press with determination", "Athlete doing pull-ups showing incredible upper body strength", "Powerlifter celebrating successful heavy lift with arms raised"];
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % motivationalQuotes.length);
    }, 8000);
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageDescriptions.length);
    }, 6000);
    return () => {
      clearInterval(quoteInterval);
      clearInterval(imageInterval);
    };
  }, []);
  const features = [{
    icon: Calculator,
    title: 'Calorie Calculator',
    description: 'Calculate your maintenance calories and create the perfect deficit for weight loss',
    link: '/calories',
    color: 'from-blue-500 to-cyan-500'
  }, {
    icon: Apple,
    title: 'Diet Recommendations',
    description: 'Get personalized healthy diet plans tailored to your fitness goals',
    link: '/diet',
    color: 'from-green-500 to-emerald-500'
  }, {
    icon: Activity,
    title: 'Exercise Programs',
    description: 'Follow expert-designed workout routines to build serious muscle mass',
    link: '/exercise',
    color: 'from-orange-500 to-red-500'
  }];
  const stats = [{
    icon: Zap,
    value: '10K+',
    label: 'Active Users'
  }, {
    icon: Target,
    value: '95%',
    label: 'Success Rate'
  }, {
    icon: TrendingUp,
    value: '500+',
    label: 'Transformations'
  }];
  return <>
      <Helmet>
        <title>PowerFit Pro - Transform Your Fitness Journey</title>
        <meta name="description" content="Welcome to PowerFit Pro, your ultimate fitness companion. Calculate calories, get diet plans, and follow exercise programs designed by powerlifting experts." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                    Transform Your Body
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">Master your fitness journey with precision calorie tracking, expert diet plans, and goal specific programs designed to build serious strength.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-xl">
                    <Link to="/calories" className="flex items-center space-x-2">
                      <Calculator className="h-5 w-5" />
                      <span>Start Calculating</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-xl">
                    <Link to="/exercise">View Programs</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img key={currentImage} className="w-full h-96 lg:h-[500px] object-cover transition-all duration-1000" alt={`Fitness motivation image ${currentImage + 1}`} src="https://horizons-cdn.hostinger.com/053fd9c3-90bf-40d7-be98-424e054a0842/karsten-winegeart-egsbvvtvccw-unsplash-cal2G.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Daily Quote Section */}
        <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div key={currentQuote} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-500 mb-6">Daily Motivation</h2>
              <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed italic">
                "{motivationalQuotes[currentQuote]}"
              </blockquote>
              <div className="flex justify-center space-x-2 mt-6">
                {motivationalQuotes.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentQuote ? 'bg-orange-500 w-8' : 'bg-gray-600'}`} />)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Everything You Need to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Succeed</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive tools and expert guidance to help you achieve your fitness goals faster than ever before.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
              const Icon = feature.icon;
              return <motion.div key={feature.title} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.2
              }} className="group">
                    <Link to={feature.link}>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                        <div className="flex items-center text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">
                          <span>Get Started</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => {
              const Icon = stat.icon;
              return <motion.div key={stat.label} initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Transform</span> Your Life?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">Join thousands of athletes who have already transformed their bodies and minds with Professor Jacked.</p>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-12 py-4 rounded-xl text-lg">
                <Link to="/calories" className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default HomePage;