import React from 'react';
import { motion } from 'framer-motion';
import { Tabs } from '@/components/ui/tabs';
import { dietPlans } from '@/data/dietPlans';

const DietPlanSelector = ({ selectedPlan, setSelectedPlan }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="mb-8"
  >
    <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {Object.entries(dietPlans).map(([key, plan]) => {
          const Icon = plan.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedPlan === key
                  ? 'border-green-500 bg-green-500/20'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{plan.title}</h3>
              <p className="text-sm text-gray-300">{plan.description}</p>
            </button>
          );
        })}
      </div>
    </Tabs>
  </motion.div>
);

export default DietPlanSelector;