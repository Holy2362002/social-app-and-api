import { Avatar, Typography, Box } from "@mui/material"

export default function Comment({comment}) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 2,
                p: 2,
                bgcolor: "action.hover",
                borderRadius: 1,
            }}
        >
            <Avatar
                sx={{
                    width: 32,
                    height: 32,
                    fontSize: "1rem",
                    mr: 2,
                }}
            >
                {comment.user.name[0]}
            </Avatar>
            <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                        {comment.user.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {new Date(comment.created).toLocaleString()}
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {comment.content}
                </Typography>
            </Box>
        </Box>
    )
}