import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />

              <Routes>
                <Route path="/room/:roomId" element={<Chat />}>
                  {/* <h1>Chat Screen</h1> */}
                </Route>
                <Route path="/">{/* <h1>Welcome</h1> */}</Route>
              </Routes>
              {/* React-Router -> Chat Screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
