import logo from './logo.svg';
import './App.css';
import Profile from "./profil/Profile"



function App() {
  function handlName(name){
    alert(name)}
  return (
    <div className="App">

      <Profile bio="hello" handleName={handlName } proffesion="full stack dev">
       
        </Profile>
    </div>
  );
}

export default App;
