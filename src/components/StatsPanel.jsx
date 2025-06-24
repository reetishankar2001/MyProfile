import React from 'react';
import CountUp from 'react-countup';
import '../styles/StatsPanel.css';

export default function StatsPanel() {
  const stats = [
    { number: 3, suffix: '+', label: 'Years Of Experience' },
    { number: 15, suffix: '+', label: 'Skills' },
  ];

  return (
    <div className="stats-panel">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <h3>
            <CountUp 
              start={0} 
              end={stat.number} 
              duration={2} 
              suffix={stat.suffix} 
              enableScrollSpy 
              scrollSpyOnce 
            />
          </h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
