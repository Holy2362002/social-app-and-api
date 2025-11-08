import Post from "../components/Post.jsx";
import Comment from "../components/Comment.jsx";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const api = "http://localhost:8800";

async function fetchPosts({id}) {
	
	const res = await fetch(`${api}/posts/${id}`);
	
	return await res.json();
};

export default function View() {
    const {id} = useParams();
    const {data: post} = useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchPosts({id}),
    });

    if (!post) {
        return <div>Loading...</div>
    }

    return <div>
        <Post post={post} />
        {post.comments && post.comments.map(comment => (
            <Comment
                key={comment.id}
                comment={comment}
            />
        ))}
    </div>
}