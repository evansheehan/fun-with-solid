import { Component, createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <section class="bg-slate-800 w-full h-full flex flex-col">
      <div class="self-center my-auto">
        <Counter />
      </div>
    </section>
  );
};

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  const counterDiv = (
    <div class="bg-blue-200 text-blue-500 p-8 rounded">Counter: {count()}</div>
  );

  setInterval(() => setCount((curr) => curr + 1), 1000);

  return counterDiv;
};

export default App;
