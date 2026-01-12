import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import ExerciseCard from '@/components/exercise/ExerciseCard';
import RpeGuide from '@/components/exercise/RpeGuide';

const WorkoutDetails = ({ day }) => (
  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-white">{day.name}</h2>
      <div className="flex items-center text-gray-300">
        <Clock className="h-5 w-5 mr-2" />
        <span>60-90 min</span>
      </div>
    </div>

    <div className="space-y-4">
      {day.exercises.map((exercise, index) => (
        <ExerciseCard key={exercise.name} exercise={exercise} index={index} />
      ))}
    </div>

    <RpeGuide />
  </Card>
);

export default WorkoutDetails;