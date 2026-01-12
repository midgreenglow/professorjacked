import React from 'react';

const RpeGuide = () => (
  <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
    <h3 className="text-lg font-semibold text-white mb-4">RPE Guide (Rate of Perceived Exertion)</h3>
    <div className="grid md:grid-cols-2 gap-4 text-sm">
      <div>
        <div className="text-gray-300 mb-2"><span className="text-green-400 font-bold">RPE 6-7:</span> Could do 3-4 more reps</div>
        <div className="text-gray-300 mb-2"><span className="text-yellow-400 font-bold">RPE 8:</span> Could do 2-3 more reps</div>
      </div>
      <div>
        <div className="text-gray-300 mb-2"><span className="text-orange-400 font-bold">RPE 9:</span> Could do 1 more rep</div>
        <div className="text-gray-300 mb-2"><span className="text-red-400 font-bold">RPE 10:</span> Maximum effort</div>
      </div>
    </div>
  </div>
);

export default RpeGuide;