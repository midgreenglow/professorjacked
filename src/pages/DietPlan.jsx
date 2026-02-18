import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useToast } from '@/components/ui/use-toast';
import { dietPlans } from '@/data/dietPlans';
import DietPlanHeader from '@/components/diet/DietPlanHeader';
import CalorieTargetCard from '@/components/diet/CalorieTargetCard';
import DietPlanSelector from '@/components/diet/DietPlanSelector';
import PlanOverview from '@/components/diet/PlanOverview';
import MealSchedule from '@/components/diet/MealSchedule';
import NutritionTips from '@/components/diet/NutritionTips';

const DietPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('muscle-building');
  const [calorieData, setCalorieData] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedResults = localStorage.getItem('calorieResults');
    if (savedResults) {
      setCalorieData(JSON.parse(savedResults));
    }
  }, []);

  const currentPlan = dietPlans[selectedPlan];
  const totalCalories = currentPlan.meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = currentPlan.meals.reduce((sum, meal) => sum + meal.protein, 0);

  const handleMealPlanRequest = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Diet Plans - PowerFit Pro</title>
        <meta name="description" content="Get personalized healthy diet plans tailored to your fitness goals. Choose from muscle building, fat loss, or maintenance diet plans designed by nutrition experts." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <DietPlanHeader />
          <CalorieTargetCard calorieData={calorieData} />
          <DietPlanSelector selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <PlanOverview
                plan={currentPlan}
                totalCalories={totalCalories}
                totalProtein={totalProtein}
                onCustomPlanRequest={handleMealPlanRequest}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <MealSchedule meals={currentPlan.meals} />
            </motion.div>
          </div>

          <NutritionTips />
        </div>
      </div>
    </>
  );
};

export default DietPlan;