import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const ExerciseProgramHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
  >
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
        <Activity className="h-8 w-8 text-white" />
      </div>
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
      Exercise <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Programs</span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      Expert-designed workout routines to build serious strength and muscle mass.
    </p>
  </motion.div>
);

export default ExerciseProgramHeader;