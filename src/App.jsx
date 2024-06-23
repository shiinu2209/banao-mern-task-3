import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import "./App.css";
import User from "./components/User";
import { Container, Typography } from "@mui/material";
function App() {
  // src/theme.js

  const [error, setError] = useState(null);
  const [Users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleImport = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setError(null);
      setIsLoading(false);
      const data = response.data;

      if (data) {
        setUsers(data);
      }
      // setUsers([]);
      console.log(data);
      console.log(Users);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log(error);
    }
  };
  useEffect(() => {
    handleImport();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {Users.length === 0 && !isLoading && error === null && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          No Users Found
          <button
            style={{
              padding: "10px",
              marginTop: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleImport}
          >
            Tap here to retry
          </button>
        </div>
      )}
      {error && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Error Occured: <h4>{error.message}</h4>
          <button
            style={{
              padding: "10px",
              marginTop: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleImport}
          >
            Tap here to retry
          </button>
        </div>
      )}
      {Users.length > 0 && (
        <div>
          <Container sx={{ padding: 4 }}>
            <Typography
              variant="h4"
              component="h1"
              textAlign={"center"}
              gutterBottom
            >
              User List
            </Typography>
            {Users.map((user, index) => (
              <>
                <User key={index} userdata={user} />
              </>
            ))}
          </Container>
        </div>
      )}
    </>
  );
}

export default App;
