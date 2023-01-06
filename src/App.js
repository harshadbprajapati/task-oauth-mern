import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import Message from "./components/Message";
import Logout from "./components/Logout";

function App() {
  const [isLogin, setLogin] = useState(false);

  const response = (res) => {
    setLogin(res);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isLogin ? (
          <Login response={response} />
          ) 
          : 
          (
          <div>
            <Message name={isLogin.profileObj.name} />
            <Logout response={response} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
