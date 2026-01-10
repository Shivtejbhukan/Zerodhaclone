import * as React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Alert,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../hooks/useAuth";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Roboto, Arial",
  },
});

export default function Register() {
  const [alert, setAlert] = React.useState({ st: false, msg: "" });
  const navigate = useNavigate();
  const { login, user } = useAuth();

  React.useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (!data.username || !data.email || !data.password) {
      setAlert({ st: true, msg: "Please fill all fields" });
      return;
    }

    try {
      const res = await axios.post(
        "https://zerodhaclone-x8xd.onrender.com/user/register",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      await login(res.data.token);
    } catch (error) {
      setAlert({
        st: true,
        msg:
          error.response?.data?.error ||
          "Registration failed. Try again.",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          {/* Zerodha Logo */}
          <Box mb={2}>
            <img
              src="https://kite.zerodha.com/static/images/kite-logo.svg"
              alt="Zerodha Kite"
              style={{ height: 40 }}
            />
          </Box>

          <Typography variant="h6" fontWeight={500} mb={2}>
            Create your Kite account
          </Typography>

          {alert.st && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {alert.msg}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              required
              name="username"
              placeholder="User name"
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              name="email"
              placeholder="Email address"
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              name="password"
              type="password"
              placeholder="Password"
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#ff5722",
                color: "#fff",
                py: 1.2,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e64a19",
                },
              }}
            >
              Sign up
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" mt={3}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#387ed1", textDecoration: "none" }}
            >
              Login
            </Link>
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
