import { CircularProgress } from '@material-ui/core';
import * as React from 'react';

export const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
    <CircularProgress />
  </div>
);
