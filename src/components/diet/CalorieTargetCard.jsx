import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const CalorieTargetCard = ({ calorieData }) => {
  if (!calorieData) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-8"
    >
      <Card className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border-orange-500/30 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Your Calorie Target</h3>
            <p className="text-gray-300">Based on your previous calculation</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-orange-400">{calorieData.targetCalories} cal</div>
            <div className="text-sm text-gray-300">Daily target</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CalorieTargetCard;