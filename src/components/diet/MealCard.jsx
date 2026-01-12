import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Utensils, Clock } from 'lucide-react';

const MealCard = ({ meal, index }) => (
  <motion.div
    key={meal.name}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <Utensils className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{meal.name}</h3>
            <div className="flex items-center text-gray-300 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {meal.time}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-400">{meal.calories} cal</div>
          <div className="text-sm text-gray-300">{meal.protein}g protein</div>
        </div>
      </div>

      <div className="space-y-2">
        {meal.foods.map((food, foodIndex) => (
          <div key={foodIndex} className="flex items-center text-gray-300">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0" />
            <span>{food}</span>
          </div>
        ))}
      </div>
    </Card>
  </motion.div>
);

export default MealCard;