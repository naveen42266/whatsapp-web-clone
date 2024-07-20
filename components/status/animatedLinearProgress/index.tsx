import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

// Custom LinearProgressBar component
function LinearProgressBar(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" color="inherit" {...props} />
      </Box>
    </Box>
  );
}

// LinearWithValueLabel component
export default function LinearWithValueLabel({ progress }: { progress: number }) {
  // No need to manage internal progress state; it's managed by the parent component

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressBar value={progress} />
    </Box>
  );
}
