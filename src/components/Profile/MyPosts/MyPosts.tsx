import React from "react";
import Post from "./Post/Post";

export const MyPosts = () => {
    return <div> My Posts
        <div>
            <textarea></textarea>
            <button>add post</button>
        </div>
        <div>
            <Post message={"Hi, it's my first post!"} likes={27}/>
            <Post message={"Welcome back in 80's"} likes={72}/>
        </div>
    </div>
}