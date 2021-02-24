import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { FancyButton, FancyProvider } from 'repro-ui-lib';

const App: FunctionComponent = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <FancyButton>Test</FancyButton>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
