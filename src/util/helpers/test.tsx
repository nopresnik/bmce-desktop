import { render } from '@testing-library/react';
import React from 'react';

export const renderTestComponent = (children: React.ReactNode) => {
  return render(<>{children}</>);
};
