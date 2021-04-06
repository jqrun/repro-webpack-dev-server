import { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { FancyButton } from 'repro-ui-lib';

const App: FunctionComponent = () => {
  return (
    // <FancyProvider>
    <>
      <h1>Hello world!</h1>
      <FancyButton>Test</FancyButton>
    </>
    // </FancyProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
