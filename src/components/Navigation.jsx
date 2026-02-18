import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Calculator, Apple, Activity, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    path: '/',
    label: 'Home',
    icon: Dumbbell
  }, {
    path: '/calories',
    label: 'Calories',
    icon: Calculator
  }, {
    path: '/diet',
    label: 'Diet Plan',
    icon: Apple
  }, {
    path: '/exercise',
    label: 'Exercise',
    icon: Activity
  }];
  return <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Professor Jacked</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return <Link key={item.path} to={item.path} className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${isActive ? 'bg-orange-500/20 text-orange-400' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>;
          })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden py-4 border-t border-white/10">
            {navItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-orange-500/20 text-orange-400' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>;
        })}
          </motion.div>}
      </div>
    </nav>;
};
export default Navigation;