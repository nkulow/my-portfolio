import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Home from './components/Home'

function App() {
    return (
        <div className="App">
            
            <header className="App-header">
                <Home />
                <Particles options={particlesOptions}/>
               
            </header>
        </div>
    );
}

export default App;
