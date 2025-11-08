import { Box, TextField, Button, Paper, Typography, Container } from "@mui/material";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useApp } from "../AppProvider";

const api = "http://localhost:8800";

export default function Login() {
    const { setUser } = useApp();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        const res = await fetch(`${api}/users/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            const {user , token} = await res.json();
            localStorage.setItem("token", token);
            setUser(user);
            return navigate("/");
        }else {
            setError("Invalid username or password");
        }

        const body = await res.json().catch(() => null);
        console.error("Registration failed", res.status, body);
    } catch (err) {
        console.error("Network or server error during registration:", err);
    }
};

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8 }}>
                <Paper sx={{ p: 4 }}>
                    
                    <Box component="form"  sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit(onSubmit)}>
                        {error && (
                        <Typography color="error" sx={{ mb: 2 }}>
                            {error}
                        </Typography>
                    )}
                    <Typography variant="h5" component="h1" sx={{ mb: 3, textAlign: "center" }}>
                        Login
                    </Typography>
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            type="text"
                            variant="outlined"
                            placeholder="UserName"
                            {...register("username", { required: true })}
                        />
                        {errors.username && (
                            <Typography color="error">username is required</Typography>
                        )}
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <Typography color="error">Password is required</Typography>
                            )}
                        <Button 
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
