import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-next f-right'
          type='button'
          onClick={() => setCurrentStep(prevStep => prevStep + 1)}
        >
          Next
        </button>
      );
    }
    return null;
  };

  const previousButton = () => {
    if (currentStep > 1) {
      return (
        <button
          className='btn btn-previous'
          type='button'
          onClick={() => setCurrentStep(prevStep => prevStep - 1)}
        >
          Previous
        </button>
      );
    }
    return null;
  };

  return (
    <div className='container'>
      <h1>React Wizard Form 🧙‍♂️</h1>
      <p>Step {currentStep} </p>

      <form>
        <Step1 currentStep={currentStep} />
        <Step2 currentStep={currentStep} />
        <Step3 currentStep={currentStep} />
        {nextButton()}
        {previousButton()}
      </form>
    </div>
  );
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className='form-group'>
      <label htmlFor='email'>Email address</label>
      <input
        className='form-control'
        id='email'
        name='email'
        type='text'
        placeholder='Enter email'
      />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className='form-group'>
      <label htmlFor='username'>Username</label>
      <input
        className='form-control'
        id='username'
        name='username'
        type='text'
        placeholder='Enter username'
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          className='form-control'
          id='password'
          name='password'
          type='password'
          placeholder='Enter password'
        />
      </div>
    </>
  );
}

export default App;
