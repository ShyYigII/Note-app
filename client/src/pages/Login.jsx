import { Typography, Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import { graphqlRequest } from "../utils/request";

function Login() {
  const auth = getAuth();
  const { user } = useContext(AuthContext);

  const handleLoginwithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const {
      user: { uid, displayName },
    } = await signInWithPopup(auth, provider);
    console.log(uid, typeof displayName);

    const res = await graphqlRequest({
      query: `mutation register($uid: String!, $name: String!) {
      register(uid: $uid, name: $name) {
        uid
        name
      }
    }`,
      variables: {
        uid,
        name: displayName,
      },
    });

    console.log("register", res);
  };

  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Welcom to note APP
      </Typography>
      <Button variant="outlined" onClick={handleLoginwithGoogle}>
        Login with google
      </Button>
    </>
  );
}

export default Login;
