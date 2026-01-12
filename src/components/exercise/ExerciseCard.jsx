import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const ExerciseCard = ({ exercise, index }) => (
  <motion.div
    key={exercise.name}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-white">{exercise.name}</h3>
      <div className="flex items-center space-x-4 text-sm">
        <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
          {exercise.sets}
        </span>
        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
          RPE {exercise.rpe}
        </span>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-4 text-sm">
      <div className="flex items-center text-gray-300">
        <Clock className="h-4 w-4 mr-2 text-green-500" />
        <span>Rest: {exercise.rest}</span>
      </div>
      <div className="text-gray-300">
        <span className="text-green-500 font-medium">Notes:</span> {exercise.notes}
      </div>
    </div>
  </motion.div>
);

export default ExerciseCard;