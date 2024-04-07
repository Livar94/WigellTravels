// import React, { useState } from 'react';
// import '../../assets/signIn.css';
// import { useNavigate } from "react-router-dom";



// export default function SignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const hardcodedUsername = 'example@example.com';
//     const hardcodedPassword = 'password';

//     if (username === hardcodedUsername && password === hardcodedPassword) {
//       console.log('Inloggning lyckades!');
//       navigate("/AdminWeb");

//       // Utför vidare åtgärder efter inloggning, t.ex. navigera användaren till en annan sida
//     } else {
//       setError('Fel användarnamn eller lösenord');
//     }
//   };

//   return (
//     <div className="signInContainer">
//       <h1>Login</h1>
      
//       <input
//         type="text"
//         placeholder="Användarnamn"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Lösenord"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Logga in</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }
import React, { useState } from 'react';
import '../../assets/signIn.css';
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Här kan du byta ut dessa hårdkodade uppgifter mot en databasfråga eller andra autentiseringsmetoder
    const users = [
      { username: 'example@example.com', password: 'password', role: 'admin' },
      { username: 'customer@example.com', password: 'password', role: 'customer' }
    ];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      console.log('Inloggning lyckades!');
      if (user.role === 'admin') {
        navigate("/AdminWeb");
      } else if (user.role === 'customer') {
        navigate("/UserPage");
      }
    } else {
      setError('Fel användarnamn eller lösenord');
    }
  };

  return (
    <div className="signInContainer">
      <h1>Login</h1>
      
      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Logga in</button>
      {error && <p>{error}</p>}
    </div>
  );
}
