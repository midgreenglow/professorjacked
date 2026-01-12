import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import CalorieCalculator from '@/pages/CalorieCalculator';
import DietPlan from '@/pages/DietPlan';
import ExerciseProgram from '@/pages/ExerciseProgram';
import Navigation from '@/components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <Helmet>
          <title>PowerFit Pro - Your Ultimate Fitness Companion</title>
          <meta name="description" content="Transform your fitness journey with PowerFit Pro. Calculate maintenance calories, get personalized diet plans, and follow expert exercise programs designed for powerlifters and fitness enthusiasts." />
        </Helmet>
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calories" element={<CalorieCalculator />} />
          <Route path="/diet" element={<DietPlan />} />
          <Route path="/exercise" element={<ExerciseProgram />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;