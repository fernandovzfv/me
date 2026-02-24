import React from 'react';
import Waves from './Waves';
import { useTheme } from './ThemeProvider';

const WavesBackground = () => {
  const { theme } = useTheme();
  
  // Define color variables based on theme
  const lineColor = theme === 'dark' ? 'rgba(228, 238, 248, 0.15)' : 'rgba(0, 113, 227, 0.2)';

  return (
    <div className="fixed inset-0 -z-10">
      <Waves
        lineColor={lineColor}
        backgroundColor="transparent"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={32}
        waveAmpY={16}
        xGap={10}
        yGap={32}
        friction={0.925}
        tension={0.005}
        maxCursorMove={100}
      />
    </div>
  );
};

export default WavesBackground;
