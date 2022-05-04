import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useToken = () => {
  const [token, setToken] = useState("");
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user.email;
      if (email) {
        const { data } = await axios.post("http://localhost:3000/login", {
          email,
        });
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
