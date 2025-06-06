import React from "react";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

type Post = {
  id: string;
  title: string;
  content: string;
  postAcount: {
    username: string;
    id: string;
  };
};

type CardProps = {
  post: Post;
  getPosts: () => void;
};
const Card: React.FC<CardProps> = ({ post, getPosts }) => {
  let userId = "";
  if (auth.currentUser) {
    userId = auth.currentUser.uid;
  }

  const deletePost = async () => {
    await deleteDoc(doc(db, "posts", post.id));
    getPosts();
  };
  return (
    <div className="card">
      <h2 className="cardTitle">{post.title}</h2>
      <p>{post.content}</p>
      <span className="postAcount">@{post.postAcount.username}</span>
      {post.postAcount.id === userId ? (
        <button className="deleteBtn" onClick={deletePost}>
          削除
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
