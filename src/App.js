import './App.css';
import { useState } from "react";

import AngryButton from './components/AngryButton';
import LightSwitchButton from './components/LightSwitchButton';

function App() {
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <LightSwitchButton light={light} setLight={setLight}/>
      </section>
    </div>
  );
}

export default App;
