import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calculator, Target, TrendingDown, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: ''
  });
  const [results, setResults] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedResults = localStorage.getItem('calorieResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  const activityLevels = [
    { value: '1.2', label: 'Sedentary (little/no exercise)' },
    { value: '1.375', label: 'Light activity (light exercise 1-3 days/week)' },
    { value: '1.55', label: 'Moderate activity (moderate exercise 3-5 days/week)' },
    { value: '1.725', label: 'Very active (hard exercise 6-7 days/week)' },
    { value: '1.9', label: 'Extremely active (very hard exercise, physical job)' }
  ];

  const goals = [
    { value: 'maintain', label: 'Maintain current weight' },
    { value: 'lose', label: 'Lose weight (fat loss)' },
    { value: 'gain', label: 'Gain weight (muscle building)' }
  ];

  const calculateCalories = () => {
    if (!formData.age || !formData.gender || !formData.weight || !formData.height || !formData.activityLevel || !formData.goal) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your calories.",
        variant: "destructive"
      });
      return;
    }

    let bmr;
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseInt(formData.age);

    if (formData.gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * parseFloat(formData.activityLevel);

    let targetCalories;
    let description;
    
    switch (formData.goal) {
      case 'lose':
        targetCalories = tdee - 500;
        description = 'Calorie deficit for healthy weight loss (1-2 lbs per week)';
        break;
      case 'gain':
        targetCalories = tdee + 300;
        description = 'Calorie surplus for lean muscle building';
        break;
      default:
        targetCalories = tdee;
        description = 'Maintenance calories to maintain current weight';
    }

    const protein = weight * 2.2;
    const fat = targetCalories * 0.25 / 9;
    const carbs = (targetCalories - (protein * 4) - (fat * 9)) / 4;

    const newResults = {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: Math.round(targetCalories),
      description,
      macros: {
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fat: Math.round(fat)
      }
    };

    setResults(newResults);
    localStorage.setItem('calorieResults', JSON.stringify(newResults));

    toast({
      title: "Calculation Complete!",
      description: "Your personalized calorie and macro targets have been calculated."
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Calorie Calculator - PowerFit Pro</title>
        <meta name="description" content="Calculate your maintenance calories and create the perfect calorie deficit for weight loss or surplus for muscle building with our advanced calorie calculator." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Calorie <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Calculate your maintenance calories and get personalized recommendations for your fitness goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Target className="h-6 w-6 mr-2 text-blue-500" />
                  Your Information
                </h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age" className="text-white mb-2 block">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender" className="text-white mb-2 block">Gender</Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) => handleInputChange('gender', value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weight" className="text-white mb-2 block">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="70"
                        value={formData.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-white mb-2 block">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="175"
                        value={formData.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="activity" className="text-white mb-2 block">Activity Level</Label>
                    <Select
                      value={formData.activityLevel}
                      onValueChange={(value) => handleInputChange('activityLevel', value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    >
                      <option value="">Select activity level</option>
                      {activityLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="goal" className="text-white mb-2 block">Goal</Label>
                    <Select
                      value={formData.goal}
                      onValueChange={(value) => handleInputChange('goal', value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    >
                      <option value="">Select your goal</option>
                      {goals.map((goal) => (
                        <option key={goal.value} value={goal.value}>
                          {goal.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <Button
                    onClick={calculateCalories}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl"
                  >
                    Calculate My Calories
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {results ? (
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-blue-500/30 p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <TrendingDown className="h-6 w-6 mr-2 text-blue-500" />
                      Your Results
                    </h2>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-300">Basal Metabolic Rate (BMR)</span>
                        <span className="text-2xl font-bold text-white">{results.bmr} cal</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-300">Maintenance Calories (TDEE)</span>
                        <span className="text-2xl font-bold text-white">{results.tdee} cal</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-300">Target Calories</span>
                        <span className="text-3xl font-bold text-blue-400">{results.targetCalories} cal</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mt-4 text-sm">{results.description}</p>
                  </Card>

                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-green-500" />
                      Macronutrient Breakdown
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-400">{results.macros.protein}g</div>
                        <div className="text-sm text-gray-300">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{results.macros.carbs}g</div>
                        <div className="text-sm text-gray-300">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">{results.macros.fat}g</div>
                        <div className="text-sm text-gray-300">Fat</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center flex flex-col justify-center items-center h-full">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                    <Calculator className="h-12 w-12 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Ready to Calculate?</h3>
                  <p className="text-gray-300">
                    Fill in your information on the left to get your personalized calorie and macronutrient recommendations.
                  </p>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalorieCalculator;