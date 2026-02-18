import { Trophy, Zap, Target } from 'lucide-react';

export const programs = {
  powerlifting: {
    title: 'Powerlifting Program',
    description: 'Focus on the big three: squat, bench press, and deadlift',
    icon: Trophy,
    color: 'from-red-500 to-pink-500',
    duration: '12 weeks',
    frequency: '4 days/week',
    level: 'Intermediate-Advanced',
    days: [
      { name: 'Day 1 - Squat Focus', exercises: [
          { name: 'Back Squat', sets: '5x3', rpe: '8-9', rest: '3-4 min', notes: 'Competition style, focus on depth' },
          { name: 'Romanian Deadlift', sets: '3x8', rpe: '7-8', rest: '2-3 min', notes: 'Hamstring and glute focus' },
          { name: 'Bulgarian Split Squats', sets: '3x10 each', rpe: '7', rest: '90s', notes: 'Unilateral strength' },
          { name: 'Leg Press', sets: '3x15', rpe: '8', rest: '2 min', notes: 'High volume quad work' },
          { name: 'Walking Lunges', sets: '3x20', rpe: '6-7', rest: '90s', notes: 'Stability and endurance' },
          { name: 'Plank', sets: '3x60s', rpe: '7', rest: '60s', notes: 'Core stability' }
      ]},
      { name: 'Day 2 - Bench Press Focus', exercises: [
          { name: 'Bench Press', sets: '5x3', rpe: '8-9', rest: '3-4 min', notes: 'Competition grip and arch' },
          { name: 'Incline Dumbbell Press', sets: '4x8', rpe: '7-8', rest: '2-3 min', notes: 'Upper chest development' },
          { name: 'Barbell Rows', sets: '4x8', rpe: '8', rest: '2-3 min', notes: 'Back strength for bench' },
          { name: 'Close-Grip Bench Press', sets: '3x10', rpe: '7', rest: '2 min', notes: 'Tricep strength' },
          { name: 'Dumbbell Flyes', sets: '3x12', rpe: '6-7', rest: '90s', notes: 'Chest isolation' },
          { name: 'Face Pulls', sets: '3x15', rpe: '6', rest: '60s', notes: 'Rear delt health' }
      ]},
      { name: 'Day 3 - Deadlift Focus', exercises: [
          { name: 'Conventional Deadlift', sets: '5x3', rpe: '8-9', rest: '3-4 min', notes: 'Competition style' },
          { name: 'Deficit Deadlift', sets: '3x6', rpe: '7-8', rest: '3 min', notes: '2-3 inch deficit' },
          { name: 'Bent-Over Rows', sets: '4x8', rpe: '8', rest: '2-3 min', notes: 'Back thickness' },
          { name: 'Good Mornings', sets: '3x10', rpe: '7', rest: '2 min', notes: 'Posterior chain' },
          { name: 'Barbell Hip Thrusts', sets: '3x12', rpe: '8', rest: '90s', notes: 'Glute power' },
          { name: 'Hanging Leg Raises', sets: '3x12', rpe: '7', rest: '60s', notes: 'Core strength' }
      ]},
      { name: 'Day 4 - Accessory & Conditioning', exercises: [
          { name: 'Overhead Press', sets: '4x8', rpe: '7-8', rest: '2-3 min', notes: 'Shoulder strength' },
          { name: 'Weighted Pull-ups', sets: '4x6', rpe: '8', rest: '2-3 min', notes: 'Upper body power' },
          { name: 'Dumbbell Bench Press', sets: '3x12', rpe: '7', rest: '2 min', notes: 'Unilateral pressing' },
          { name: 'Barbell Curls', sets: '3x10', rpe: '7', rest: '90s', notes: 'Bicep strength' },
          { name: 'Tricep Dips', sets: '3x12', rpe: '7', rest: '90s', notes: 'Tricep mass' },
          { name: 'Farmer\'s Walk', sets: '3x40m', rpe: '8', rest: '2 min', notes: 'Grip and core' }
      ]}
    ]
  },
  bodybuilding: {
    title: 'Bodybuilding Program',
    description: 'Muscle hypertrophy and aesthetic development',
    icon: Zap,
    color: 'from-purple-500 to-indigo-500',
    duration: '8 weeks',
    frequency: '5 days/week',
    level: 'Intermediate',
    days: [
        { name: 'Day 1 - Chest & Triceps', exercises: [
            { name: 'Barbell Bench Press', sets: '4x8-10', rpe: '8', rest: '2-3 min', notes: 'Focus on muscle contraction' },
            { name: 'Incline Dumbbell Press', sets: '4x10-12', rpe: '7-8', rest: '2 min', notes: 'Upper chest emphasis' },
            { name: 'Decline Barbell Press', sets: '3x10-12', rpe: '7', rest: '2 min', notes: 'Lower chest focus' },
            { name: 'Dumbbell Flyes', sets: '3x12-15', rpe: '6-7', rest: '90s', notes: 'Chest isolation' },
            { name: 'Close-Grip Bench Press', sets: '4x10-12', rpe: '7-8', rest: '2 min', notes: 'Tricep mass' },
            { name: 'Tricep Pushdowns', sets: '3x12-15', rpe: '7', rest: '90s', notes: 'Tricep isolation' },
            { name: 'Overhead Tricep Extension', sets: '3x12-15', rpe: '6-7', rest: '90s', notes: 'Long head focus' }
        ]},
        { name: 'Day 2 - Back & Biceps', exercises: [
            { name: 'Deadlifts', sets: '4x6-8', rpe: '8', rest: '3 min', notes: 'Full back development' },
            { name: 'Pull-ups/Lat Pulldowns', sets: '4x8-12', rpe: '7-8', rest: '2 min', notes: 'Lat width' },
            { name: 'Barbell Rows', sets: '4x8-10', rpe: '8', rest: '2 min', notes: 'Mid-back thickness' },
            { name: 'T-Bar Rows', sets: '3x10-12', rpe: '7', rest: '2 min', notes: 'Back thickness' },
            { name: 'Cable Rows', sets: '3x12-15', rpe: '6-7', rest: '90s', notes: 'Back width' },
            { name: 'Barbell Curls', sets: '4x10-12', rpe: '7-8', rest: '90s', notes: 'Bicep mass' },
            { name: 'Hammer Curls', sets: '3x12-15', rpe: '7', rest: '90s', notes: 'Brachialis focus' },
            { name: 'Cable Curls', sets: '3x12-15', rpe: '6-7', rest: '90s', notes: 'Bicep peak' }
        ]},
        { name: 'Day 3 - Shoulders', exercises: [
            { name: 'Overhead Press', sets: '4x8-10', rpe: '8', rest: '2-3 min', notes: 'Overall shoulder mass' },
            { name: 'Lateral Raises', sets: '4x12-15', rpe: '7', rest: '90s', notes: 'Side delt width' },
            { name: 'Rear Delt Flyes', sets: '4x12-15', rpe: '7', rest: '90s', notes: 'Rear delt development' },
            { name: 'Arnold Press', sets: '3x10-12', rpe: '7', rest: '2 min', notes: 'Full ROM shoulder work' },
            { name: 'Upright Rows', sets: '3x10-12', rpe: '6-7', rest: '90s', notes: 'Trap and delt' },
            { name: 'Face Pulls', sets: '3x15-20', rpe: '6', rest: '60s', notes: 'Rear delt and posture' },
            { name: 'Shrugs', sets: '4x12-15', rpe: '7', rest: '90s', notes: 'Trap development' }
        ]},
        { name: 'Day 4 - Legs', exercises: [
            { name: 'Back Squats', sets: '4x8-10', rpe: '8', rest: '3 min', notes: 'Overall leg mass' },
            { name: 'Romanian Deadlifts', sets: '4x10-12', rpe: '7-8', rest: '2-3 min', notes: 'Hamstring focus' },
            { name: 'Leg Press', sets: '4x15-20', rpe: '8', rest: '2 min', notes: 'High volume quad work' },
            { name: 'Walking Lunges', sets: '3x12 each', rpe: '7', rest: '2 min', notes: 'Unilateral strength' },
            { name: 'Leg Curls', sets: '4x12-15', rpe: '7', rest: '90s', notes: 'Hamstring isolation' },
            { name: 'Leg Extensions', sets: '3x15-20', rpe: '6-7', rest: '90s', notes: 'Quad isolation' },
            { name: 'Calf Raises', sets: '4x15-20', rpe: '7-8', rest: '90s', notes: 'Calf development' }
        ]},
        { name: 'Day 5 - Arms & Core', exercises: [
            { name: 'Close-Grip Bench Press', sets: '4x8-10', rpe: '8', rest: '2 min', notes: 'Tricep strength' },
            { name: 'Barbell Curls', sets: '4x8-10', rpe: '8', rest: '2 min', notes: 'Bicep strength' },
            { name: 'Tricep Dips', sets: '3x12-15', rpe: '7', rest: '90s', notes: 'Tricep mass' },
            { name: 'Preacher Curls', sets: '3x10-12', rpe: '7', rest: '90s', notes: 'Bicep isolation' },
            { name: 'Diamond Push-ups', sets: '3x12-15', rpe: '7', rest: '90s', notes: 'Tricep endurance' },
            { name: 'Cable Hammer Curls', sets: '3x12-15', rpe: '6-7', rest: '90s', notes: 'Forearm and bicep' },
            { name: 'Plank', sets: '3x60s', rpe: '7', rest: '60s', notes: 'Core stability' },
            { name: 'Russian Twists', sets: '3x20', rpe: '6-7', rest: '60s', notes: 'Oblique strength' }
        ]}
    ]
  },
  strength: {
    title: 'Strength Building',
    description: 'Build raw strength with compound movements',
    icon: Target,
    color: 'from-orange-500 to-red-500',
    duration: '16 weeks',
    frequency: '3 days/week',
    level: 'Beginner-Intermediate',
    days: [
      { name: 'Day 1 - Squat & Press', exercises: [
          { name: 'Back Squat', sets: '5x5', rpe: '8', rest: '3-5 min', notes: 'Progressive overload focus' },
          { name: 'Overhead Press', sets: '5x5', rpe: '8', rest: '3 min', notes: 'Strict form' },
          { name: 'Barbell Rows', sets: '3x8', rpe: '7', rest: '2-3 min', notes: 'Back strength' },
          { name: 'Dips', sets: '3x8-12', rpe: '7', rest: '2 min', notes: 'Tricep and chest' },
          { name: 'Plank', sets: '3x45s', rpe: '7', rest: '60s', notes: 'Core stability' }
      ]},
      { name: 'Day 2 - Deadlift & Bench', exercises: [
          { name: 'Deadlift', sets: '5x5', rpe: '8', rest: '3-5 min', notes: 'Perfect form priority' },
          { name: 'Bench Press', sets: '5x5', rpe: '8', rest: '3 min', notes: 'Controlled tempo' },
          { name: 'Pull-ups', sets: '3x5-8', rpe: '7-8', rest: '2-3 min', notes: 'Add weight if possible' },
          { name: 'Barbell Curls', sets: '3x8', rpe: '7', rest: '2 min', notes: 'Bicep strength' },
          { name: 'Face Pulls', sets: '3x12', rpe: '6', rest: '90s', notes: 'Shoulder health' }
      ]},
      { name: 'Day 3 - Volume & Accessories', exercises: [
          { name: 'Front Squat', sets: '4x6', rpe: '7-8', rest: '3 min', notes: 'Quad emphasis' },
          { name: 'Incline Bench Press', sets: '4x6', rpe: '7-8', rest: '2-3 min', notes: 'Upper chest' },
          { name: 'Romanian Deadlift', sets: '3x8', rpe: '7', rest: '2-3 min', notes: 'Hamstring focus' },
          { name: 'Weighted Dips', sets: '3x8', rpe: '7', rest: '2 min', notes: 'Tricep strength' },
          { name: 'Barbell Rows', sets: '3x8', rpe: '7', rest: '2 min', notes: 'Back thickness' },
          { name: 'Farmer\'s Walk', sets: '3x30m', rpe: '8', rest: '2 min', notes: 'Grip and core' }
      ]}
    ]
  }
};