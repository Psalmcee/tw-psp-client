import logo from './logo1.png'
import './App.css';
import { useState } from 'react';


function App() {

  const [passphrase, setPassphrase] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
 
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:8888/retrieve-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ passphrase, email }),
      })
        .then((response) => response.json())
        .then(
      setSuccess('Passphrase Sent'));
    } catch (err) {
      console.log(`network error: ${err}`);
    }
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input placeholder="Secret Phrase" value={passphrase} onChange = {e => setPassphrase(e.target.value)} className="Input" />
        <input placeholder="Email" value={email} onChange = {e => setEmail(e.target.value)} className="Input" />
        <input type="submit" value="Confirm" className="Input-button" />
        <p>{success}</p>
      </form>
    </div>
  );
}

export default App;