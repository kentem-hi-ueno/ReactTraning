import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Card from "./Card";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";

type Post = {
  id: string;
  title: string;
  content: string;
  postAcount: {
    username: string;
    id: string;
  };
};
export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const dbPosts: Post[] = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      dbPosts.push({ ...(doc.data() as Post), id: doc.id });
    });
    setPosts(dbPosts);
  };

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} post={post} getPosts={getPosts} />
      ))}
    </div>
  );
};
