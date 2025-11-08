import { Box, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

export default function Form({ onAddPost }) {
    const [postText, setPostText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!postText.trim()) return;

        const newPost = {
            id: Date.now(),
            body: postText.trim(),
            createdAt: new Date().toISOString(),
        };

        if (typeof onAddPost === "function") {
            onAddPost(newPost);
        }

        setPostText("");
    };

    return (
        <Paper sx={{ p: 2, mb: 2 }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    gap: 2,
                }}
            >
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    placeholder="What's on your mind?"
                    variant="outlined"
                />
                <Button 
                    variant="contained" 
                    type="submit"
                    disabled={!postText.trim()}
                >
                    Add Post
                </Button>
            </Box>
        </Paper>
    );
}