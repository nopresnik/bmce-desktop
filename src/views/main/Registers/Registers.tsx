import React from 'react';
import { Route } from 'react-router-dom';

export const Registers: React.VFC = () => {
  return (
    <Route path="/registers">
      <Route exact path="/registers">
        <h1>Registers main</h1>
      </Route>
      <Route exact path="/registers/slab">
        <h1>Registers slabs</h1>
      </Route>
    </Route>
  );
};
