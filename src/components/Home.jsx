import { useUserSession } from "../context/AuthContext";
import React, {useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const {meFunc, logOut, user} = useUserSession();

    const token = sessionStorage.getItem('token')
    useEffect(() => {
        let header =  {
            headers: {
              Authorization: 'Bearer ' + token
            }
        }
        axios
          .get("http://127.0.0.1:8000/api/auth/me", header)
          .then((data) => {
              meFunc(data.data.user)
          })
          .catch((error) => {
            console.log("login error", error);
          });
      }, []);

      const logoutFunc = () =>{
        logOut()
      }

  return (
    <div>
      <h1>Welcome {user.user.name}</h1>
      {token ?
      <button onClick={logoutFunc}>Logout</button>
    : 
        <Link to="/SignIn">
            <button>SignIn</button>
        </Link>
    }
    </div>
  );
};

export default Home;
