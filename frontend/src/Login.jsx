import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";
import axios from "axios";

export default function LoginForm({
  onLogin = (creds) => console.log("login", creds),
}) {
  const [values, setValues] = useState({
    user_email: "",
    user_password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //validation of email and password are notl null
  const validate = () => {
    const err = {};
    if (!values.user_email) {
      err.user_email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.user_email)) {
      err.user_email = "Enter a valid email";
    }
    if (!values.user_password) {
      err.user_password = "Password is required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({}); // Clear previous general errors

    try {
      // Send login credentials to the server using a POST request
      const response = await axios
        .post("http://localhost:9000/api/user_login/login")
        .then((res) => setValues(res.data))
        .catch((err) => console.error(err));

      // If successful, proceed with login
      console.log("Login successful!", response.data);
      sessionStorage.setItem("isAuthenticated", "true");
      onLogin(values);
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      // Handle errors from the server
      if (error.response) {
        if (error.response.status === 404) {
          setErrors({ general: "User not found. Redirecting to Sign Up..." });
          setTimeout(() => {
            navigate("/signup");
          }, 2000);
        } else if (
          error.response.status === 400 ||
          error.response.status === 401
        ) {
          setErrors({ general: "Invalid email or password." });
        } else {
          setErrors({ general: "Something went wrong on the server." });
        }
      } else {
        // For network or other issues
        setErrors({
          general: "Cannot connect to the server. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (!!errors.general || !!errors[name]) {
      setErrors({});
    }
  };

  // --- UI PART (No changes needed here) ---
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(1200px 600px at 10% 20%, rgba(255,215,200,0.08), transparent), radial-gradient(1000px 500px at 90% 80%, rgba(100,120,255,0.06), transparent), linear-gradient(180deg, #0f172a 0%, #071229 100%)",
        p: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", maxWidth: 980 }}
      >
        <Paper
          elevation={12}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(2,6,23,0.6)",
            backdropFilter: "blur(6px)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Panel */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 4, md: 6 },
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              color: "white",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Welcome back
            </Typography>
            <Typography variant="body2" sx={{ opacity: 1, mb: 3 }}>
              Sign in to continue to <strong>EliteCare</strong>.
            </Typography>

            {errors.general && (
              <Typography
                color="error"
                variant="body2"
                align="center"
                sx={{ mb: 2, minHeight: "20px" }}
              >
                {errors.general}
              </Typography>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                name="user_email"
                value={values.user_email}
                onChange={handleChange}
                label="Email"
                margin="normal"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined sx={{ opacity: 0.85 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ background: "rgba(255,255,255,0.02)", borderRadius: 1 }}
                error={!!errors.user_email}
                helperText={errors.user_email}
              />
              <TextField
                fullWidth
                name="user_password"
                value={values.user_password}
                onChange={handleChange}
                label="Password"
                margin="normal"
                variant="filled"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined sx={{ opacity: 0.85 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ background: "rgba(255,255,255,0.02)", borderRadius: 1 }}
                error={!!errors.user_password}
                helperText={errors.user_password}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ mt: 3, py: 1.5, fontWeight: 700 }}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Box>
          {/* Right Panel */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 6,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#f8fafc", fontWeight: 800, mb: 1 }}
            >
              EliteCare
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                mb: 3,
                textAlign: "center",
              }}
            >
              Seamless appointments, personalized care.
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
