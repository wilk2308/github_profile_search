import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import Error from './components/Error';
import Loading from './components/Loading';
import { fetchUserData } from './services/api';
import './style.css';
import githubIcon from '../public/github-icon.png';
import github from '../public/github.png';
import lupaIcon from '../public/lupa-icon.png';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="title-container">
        <img src={githubIcon} alt="Ícone do GitHub" className="github-icon" />
        <h1>Perfil</h1>
        <img src={github} alt="GitHub" className="github" />
      </div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loading />}
      {error && <Error message={error} />}
      {userData && <UserProfile user={userData} />}
    </div>
  );
}

export default App;