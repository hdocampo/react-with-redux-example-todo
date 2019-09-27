import React from 'react';
import './App.css';
import Form from './components/Form/Form';

const App: React.FC = () => {
  return (
    <div className="App">
      <Form
        text="It seems that"
        age={90}
      />
    </div>
  );
};

export default App;
