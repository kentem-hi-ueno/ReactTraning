import React from "react";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

// Comment(Chiba): このPostという型はHome.tsxの方で定義されているので、そこからインポートするのが良いと思います。(逆にこちらで定義してHome.tsxでインポートしても良いです。)
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
  // Comment(Chiba): この「getPosts」はイベントらしく「onDelete」のような名前の方が良いと思います。あるいは「onPostDelete」ですね。
  getPosts: () => void;
};
const Card: React.FC<CardProps> = ({ post, getPosts }) => {
  // Comment(Chiba): Reactではletを使うとバグが発生するリスクが高まるので、余程の理由が無い限り使わない方が良いと思います。
  // Comment(Chiba): 今回のケースでは以下のような書き方の方が良いと思います。(あえて空文字を定義するより無いことを明確にしたundefinedを返すほうが理想的です。)
  // const userId = auth.currentUser?.uid;

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
