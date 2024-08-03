import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const {counter, incrementCounter, resetCounter, decrementCounter} = useCounter()
  
  return (
    <>
    <h1>Counter with custom hook: {counter}</h1>
    <hr />
    <button className='btn btn-primary' onClick={incrementCounter}>+1</button>
    <button className='btn btn-primary' onClick={resetCounter}>Reset</button>
    <button className='btn btn-primary' onClick={decrementCounter}>-1</button>
    </>
  )
}
