import React from 'react';
import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';

const DietPlanHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
  >
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
        <Apple className="h-8 w-8 text-white" />
      </div>
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
      Diet <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Plans</span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      Personalized nutrition plans designed to fuel your workouts and achieve your fitness goals.
    </p>
  </motion.div>
);

export default DietPlanHeader;