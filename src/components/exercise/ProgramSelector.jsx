import React from 'react';
import { motion } from 'framer-motion';
import { programs } from '@/data/exercisePrograms';
import { Calendar, Clock } from 'lucide-react';

const ProgramSelector = ({ selectedProgram, onSelectProgram }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mb-8"
  >
    <div className="grid md:grid-cols-3 gap-6">
      {Object.entries(programs).map(([key, program]) => {
        const Icon = program.icon;
        return (
          <button
            key={key}
            onClick={() => onSelectProgram(key)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedProgram === key
                ? 'border-orange-500 bg-orange-500/20'
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center mx-auto mb-4`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{program.description}</p>
            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex items-center justify-center">
                <Calendar className="h-3 w-3 mr-1" />
                {program.duration}
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-3 w-3 mr-1" />
                {program.frequency}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  </motion.div>
);

export default ProgramSelector;