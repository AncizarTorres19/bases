import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';
import { CounterEffect } from './components/CounterEffect';
import { CounterHook } from './components/CounterHook';
import { CounterReducer } from './counter-reducer/CounterReducer';
// import { CounterReducer } from './components/CounterReducer';

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <hr />
      <CounterBy initialValue={15} />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
      {/* <hr />
      <CounterReducer /> */}
      <hr />
      <CounterReducer />
    </>
  );
}

export default App;
