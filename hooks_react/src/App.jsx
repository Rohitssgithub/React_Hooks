import React from 'react'
import UseCallBack from './components/UseCallbackHook/UseCallbackHook'
import UseMemoHook from './components/UseMemoHooks/USeMemoHook'
import UseEffectHook from './components/UseEffectHook/UseEffectHook'
import UseLayoutEffect from './components/UseLayoutEffect/UseLayoutEffect'
import UseQueryHook from './components/UseQueryHook/UseQueryHook'
import UseRef from './components/UseRef/UseRefHook'
import { UseReducer } from './components/UseContext/UseContext'
import Parent from './components/UseContext/Parent'
import Todos from './components/UseReducer/UseReducerHook'
import Todo from './components/Todo/Todo'
import Com from "./components/customHook/Com"
const App = () => {
  return (
    <>
      <UseCallBack />
      <UseMemoHook />
      <UseEffectHook />
      <UseLayoutEffect />
      <UseRef></UseRef>
      {/* <UseQueryHook></UseQueryHook> */}
      <UseReducer>
        <Parent />
      </UseReducer>
      <Todos></Todos>
    {/* <Todo></Todo> */}
    <Com></Com>


    </>
  )
}

export default App