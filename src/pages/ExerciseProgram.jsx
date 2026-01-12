import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useToast } from '@/components/ui/use-toast';
import { programs } from '@/data/exercisePrograms';
import ExerciseProgramHeader from '@/components/exercise/ExerciseProgramHeader';
import ProgramSelector from '@/components/exercise/ProgramSelector';
import ProgramOverview from '@/components/exercise/ProgramOverview';
import WorkoutDetails from '@/components/exercise/WorkoutDetails';

const ExerciseProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState('powerlifting');
  const [selectedDay, setSelectedDay] = useState(0);
  const { toast } = useToast();

  const currentProgram = programs[selectedProgram];

  const handleSelectProgram = (programKey) => {
    setSelectedProgram(programKey);
    setSelectedDay(0);
  };

  const handleStartWorkout = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleTrackProgress = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Exercise Programs - PowerFit Pro</title>
        <meta name="description" content="Follow expert-designed workout routines to build serious muscle mass. Choose from powerlifting, bodybuilding, or strength building programs tailored to your experience level." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ExerciseProgramHeader />
          <ProgramSelector selectedProgram={selectedProgram} onSelectProgram={handleSelectProgram} />

          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <ProgramOverview
                program={currentProgram}
                selectedDay={selectedDay}
                onSelectDay={setSelectedDay}
                onStartWorkout={handleStartWorkout}
                onTrackProgress={handleTrackProgress}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-3"
            >
              <WorkoutDetails day={currentProgram.days[selectedDay]} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseProgram;