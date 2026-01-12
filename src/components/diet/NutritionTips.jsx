import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const NutritionTips = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="mt-12"
  >
    <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-blue-500/30 p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Nutrition Tips</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Hydration</h3>
          <p className="text-gray-300">Drink at least 3-4 liters of water daily, more on training days.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Meal Timing</h3>
          <p className="text-gray-300">Eat protein within 2 hours post-workout for optimal recovery.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Food Quality</h3>
          <p className="text-gray-300">Choose whole, unprocessed foods whenever possible.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Consistency</h3>
          <p className="text-gray-300">Stick to your plan 80% of the time for best results.</p>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default NutritionTips;