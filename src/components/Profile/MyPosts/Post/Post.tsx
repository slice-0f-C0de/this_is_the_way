import React from "react";
import c from "./Post.module.css";

type postType = {
    message: string
    likes: number
}

const Post = (props: postType) => {
    return <div className={c.item}>
        <img src={"https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/31238de283d59304fd1aab61_rw_1200.jpg?h=f469540450d1b0f4c86f7b6cce99487e"}/>
        {props.message}
        <div>
        <span>{props.likes}</span>
        </div>
    </div>
}

export default Post;