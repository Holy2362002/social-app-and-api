import { Card, CardContent, Avatar, Typography, Box } from "@mui/material"
import { FavoriteBorderOutlined as Like , ChatBubble as Comment } from "@mui/icons-material"
import { useNavigate } from "react-router"
export default function Post({post}) {
    const navigate = useNavigate();
    return <Card sx={{mb: 2}}>
    <CardContent>
        <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
            <Avatar sx={{mr: 2}}>{post.user.name[0]}</Avatar>
            <Typography variant="h6">{post.user.name}</Typography>
            <Typography variant="body2" sx={{ml: 2, color: "text.secondary"}}>{post.created}</Typography>
        </Box>
        <Typography variant="body1">
           {post.content}
           </Typography>
        <Box sx={{display: "flex", mt: 2}}>
            <Box sx={{display: "flex", alignItems: "center", mr: 3, cursor: "pointer"}}>
                <Like sx={{mr: 1}}/>
                <Typography>Like</Typography>
            </Box>
            <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}} onClick={() => navigate(`/view/${post.id}`)} cursor="pointer">
                <Comment sx={{mr: 1}}/>
                <Typography>{post.comments.length}</Typography>
            </Box>
        </Box>
    </CardContent>
    </Card>
}