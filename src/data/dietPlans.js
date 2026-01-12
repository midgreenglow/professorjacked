import { Users, Heart, ChefHat } from 'lucide-react';

export const dietPlans = {
  'muscle-building': {
    title: 'Muscle Building Diet',
    description: 'High-protein diet designed to support muscle growth and recovery',
    icon: Users,
    color: 'from-red-500 to-pink-500',
    meals: [
      { name: 'Breakfast', time: '7:00 AM', foods: ['3 whole eggs + 2 egg whites scrambled', '1 cup oatmeal with banana and berries', '1 glass whole milk', '1 tbsp almond butter'], calories: 650, protein: 35 },
      { name: 'Mid-Morning Snack', time: '10:00 AM', foods: ['Protein shake (30g whey protein)', '1 medium apple', '1 handful almonds'], calories: 350, protein: 32 },
      { name: 'Lunch', time: '1:00 PM', foods: ['200g grilled chicken breast', '1.5 cups brown rice', 'Mixed vegetables (broccoli, carrots)', '1 tbsp olive oil'], calories: 750, protein: 45 },
      { name: 'Pre-Workout', time: '4:00 PM', foods: ['1 banana', '1 cup coffee', '1 slice whole grain toast with honey'], calories: 250, protein: 5 },
      { name: 'Post-Workout', time: '6:30 PM', foods: ['Protein shake (40g whey protein)', '1 cup chocolate milk', '1 medium banana'], calories: 400, protein: 45 },
      { name: 'Dinner', time: '8:00 PM', foods: ['200g lean beef or salmon', '200g sweet potato', 'Large mixed salad with olive oil', '1 cup steamed vegetables'], calories: 700, protein: 40 }
    ]
  },
  'fat-loss': {
    title: 'Fat Loss Diet',
    description: 'Balanced, calorie-controlled diet for sustainable fat loss',
    icon: Heart,
    color: 'from-green-500 to-emerald-500',
    meals: [
      { name: 'Breakfast', time: '7:00 AM', foods: ['2 whole eggs + 2 egg whites', '1 slice whole grain toast', '1/2 avocado', '1 cup green tea'], calories: 400, protein: 25 },
      { name: 'Mid-Morning Snack', time: '10:00 AM', foods: ['Greek yogurt (150g)', '1 handful berries', '1 tbsp chia seeds'], calories: 200, protein: 15 },
      { name: 'Lunch', time: '1:00 PM', foods: ['150g grilled chicken breast', 'Large mixed salad', '1 tbsp olive oil dressing', '1/2 cup quinoa'], calories: 450, protein: 35 },
      { name: 'Afternoon Snack', time: '4:00 PM', foods: ['1 medium apple', '1 tbsp almond butter', 'Green tea'], calories: 180, protein: 4 },
      { name: 'Dinner', time: '7:00 PM', foods: ['150g white fish or tofu', '2 cups steamed vegetables', '1 tbsp olive oil', 'Small portion brown rice'], calories: 400, protein: 30 },
      { name: 'Evening Snack', time: '9:00 PM', foods: ['Casein protein shake', '1 handful nuts'], calories: 200, protein: 25 }
    ]
  },
  'maintenance': {
    title: 'Maintenance Diet',
    description: 'Balanced nutrition to maintain current weight and support training',
    icon: ChefHat,
    color: 'from-blue-500 to-cyan-500',
    meals: [
      { name: 'Breakfast', time: '7:00 AM', foods: ['2 whole eggs + 1 egg white', '1 cup oatmeal with fruits', '1 glass milk', '1 tbsp nuts'], calories: 550, protein: 28 },
      { name: 'Mid-Morning Snack', time: '10:00 AM', foods: ['Protein smoothie', '1 banana', '1 tbsp peanut butter'], calories: 300, protein: 20 },
      { name: 'Lunch', time: '1:00 PM', foods: ['180g lean protein (chicken/fish)', '1 cup brown rice', 'Mixed vegetables', '1 tbsp healthy fats'], calories: 600, protein: 40 },
      { name: 'Pre-Workout', time: '4:00 PM', foods: ['1 banana', '1 cup coffee', 'Small handful dates'], calories: 200, protein: 3 },
      { name: 'Post-Workout', time: '6:30 PM', foods: ['Protein shake (30g)', '1 cup chocolate milk'], calories: 300, protein: 35 },
      { name: 'Dinner', time: '8:00 PM', foods: ['180g lean protein', '150g sweet potato', 'Large salad with olive oil', 'Steamed vegetables'], calories: 550, protein: 35 }
    ]
  }
};