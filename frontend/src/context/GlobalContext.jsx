import React, { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Toast } from "../components/Toast";
import axios from 'axios';

const AppContext = createContext({
  token: null,
  user: null,
  setToken: (value) => { },
  setUser: (value) => { },
});


export function GlobalContext(props) {
  const [{ status, message }, setStatus] = useState({ status: "", message: "" });
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  const localToken = localStorage.getItem("token");
  let userId = '';

  if (localToken) {
    let tokenPayload = jwtDecode(localToken);
    userId = tokenPayload.id;
  }

  useEffect(() => {
    async function loadUser() {
      if (userId) {
        const endPoint = `/users/${userId}`;
        const response = await axios.get("http://localhost:5050/api/v1" + endPoint);

        setUser(response.data.data);
        console.log('response', response.data.data);
        setTimeout(() => {
          setStatus({ status: "", message: "" });
        }, 1000);
      }
    }
    if (!user) loadUser();
  }, [localToken, userId, user]);
  return (
    <AppContext.Provider value={{ token, setToken, setUser, user }}>
      <Toast status={status} message={message} />
      {props.children}
    </AppContext.Provider>
  );
}
export { AppContext };