import React from 'react';
import SubscribeButton from './components/SubscribeButton';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur ma chaîne !</h1>
        <p>Abonnez-vous pour ne rien manquer de nos vidéos.</p>
        <SubscribeButton />
      </header>
    </div>
  );
}

export default App;