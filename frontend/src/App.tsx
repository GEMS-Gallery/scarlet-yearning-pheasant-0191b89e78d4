import React, { useState, useEffect } from 'react';
import { backend } from 'declarations/backend';

const App: React.FC = () => {
  const [dogArt, setDogArt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const generateNewDog = async () => {
    setLoading(true);
    try {
      const newDog = await backend.generateDog();
      setDogArt(newDog);
    } catch (error) {
      console.error('Error generating dog:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateNewDog();
  }, []);

  return (
    <div className="container">
      <h1>ASCII Dog Generator</h1>
      <div className="dog-display">
        {dogArt || 'Loading...'}
      </div>
      <button onClick={generateNewDog} disabled={loading}>
        {loading ? 'Generating...' : 'Generate New Dog'}
      </button>
    </div>
  );
};

export default App;
