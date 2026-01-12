import React from 'react';
import MealCard from '@/components/diet/MealCard';

const MealSchedule = ({ meals }) => (
  <div className="space-y-6">
    {meals.map((meal, index) => (
      <MealCard key={meal.name} meal={meal} index={index} />
    ))}
  </div>
);

export default MealSchedule;