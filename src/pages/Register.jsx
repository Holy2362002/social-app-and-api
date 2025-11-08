import { Box, TextField, Button, Paper, Typography, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const api = "http://localhost:8800";

export default function Register() {
    const navigate = useNavigate();
    
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
    try {
        const res = await fetch(`${api}/users`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.status === 201) {
            return navigate("/login");
        }

        // show server response for debugging
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
                    <Typography variant="h5" component="h1" sx={{ mb: 3, textAlign: "center" }}>
                        Create Account
                    </Typography>
                    <Box component="form"  sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit(onSubmit)} >
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            type="text"
                            variant="outlined"
                            placeholder="Name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                    <Typography color="error">name is required</Typography>
                )}
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
                            label="Bio"
                            name="bio"
                            type="text"
                            variant="outlined"
                            placeholder="Bio"
                            {...register("bio")}
                        />
                        
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            placeholder="Password"
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
                            Register
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
