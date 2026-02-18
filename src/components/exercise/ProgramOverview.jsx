import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import WorkoutDayNavigation from '@/components/exercise/WorkoutDayNavigation';

const ProgramOverview = ({ program, selectedDay, onSelectDay, onStartWorkout, onTrackProgress }) => (
  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 sticky top-24">
    <h2 className="text-2xl font-bold text-white mb-4">{program.title}</h2>
    <p className="text-gray-300 mb-6">{program.description}</p>
    
    <div className="space-y-4 mb-6">
      <div className="flex justify-between items-center py-2 border-b border-white/10">
        <span className="text-gray-300">Duration</span>
        <span className="text-white font-semibold">{program.duration}</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-white/10">
        <span className="text-gray-300">Frequency</span>
        <span className="text-white font-semibold">{program.frequency}</span>
      </div>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-300">Level</span>
        <span className="text-white font-semibold">{program.level}</span>
      </div>
    </div>

    <div className="space-y-3">
      <Button
        onClick={onStartWorkout}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl"
      >
        <Play className="h-4 w-4 mr-2" />
        Start Workout
      </Button>
      <Button
        onClick={onTrackProgress}
        variant="outline"
        className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
      >
        Track Progress
      </Button>
    </div>

    <WorkoutDayNavigation
      days={program.days}
      selectedDay={selectedDay}
      onSelectDay={onSelectDay}
    />
  </Card>
);

export default ProgramOverview;