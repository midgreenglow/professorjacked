import React from 'react';

const WorkoutDayNavigation = ({ days, selectedDay, onSelectDay }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-white mb-3">Workout Days</h3>
    <div className="space-y-2">
      {days.map((day, index) => (
        <button
          key={index}
          onClick={() => onSelectDay(index)}
          className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
            selectedDay === index
              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <div className="font-medium">{day.name.split(' - ')[0]}</div>
          <div className="text-xs opacity-75">{day.name.split(' - ')[1]}</div>
        </button>
      ))}
    </div>
  </div>
);

export default WorkoutDayNavigation;