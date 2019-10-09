import React from 'react';
import logo from './logo.svg';
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";
import './App.css';

function App() {
  
  const [teams, setTeams] = React.useState([
    {
      id: 1,
      title: "Jake Gifford",
      email: "panamajake86@gmail.com",
      role: "Sexy beast",
    }
  ]);

  const addTeammate = team => {
    const newTeam = {
      id: Date.now(),
      title: team.title,
      email: team.email,
      role: team.role,
    };
    setTeams([ ...teams, newTeam])
  };
  
  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addTeamFn={addTeammate} />
      <Team teamList={teams} />
    </div>
  );
}

export default App;
