import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PlanOverview = ({ plan, totalCalories, totalProtein, onCustomPlanRequest }) => (
  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 sticky top-24">
    <h2 className="text-2xl font-bold text-white mb-4">{plan.title}</h2>
    <p className="text-gray-300 mb-6">{plan.description}</p>
    
    <div className="space-y-4">
      <div className="flex justify-between items-center py-2 border-b border-white/10">
        <span className="text-gray-300">Total Calories</span>
        <span className="text-xl font-bold text-green-400">{totalCalories}</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-white/10">
        <span className="text-gray-300">Total Protein</span>
        <span className="text-xl font-bold text-red-400">{totalProtein}g</span>
      </div>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-300">Meals per Day</span>
        <span className="text-xl font-bold text-blue-400">{plan.meals.length}</span>
      </div>
    </div>

    <Button
      onClick={onCustomPlanRequest}
      className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl"
    >
      Get Custom Meal Plan
    </Button>
  </Card>
);

export default PlanOverview;