import React, { useEffect} from "react";
import "./CreatePost.css";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";

type CreatePostProps = {
  isAuth: boolean;
};

type PostForm = {
  title: string;
  content: string;
};

export const CreatePost: React.FC<CreatePostProps> = (isAuth) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  const uploadBlog: SubmitHandler<PostForm> = async (post: PostForm) => {
    if (auth.currentUser) {
      await addDoc(collection(db, "posts"), {
        title: post.title,
        content: post.content,
        postAcount: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
    }
    navigate("/");
  };

  const isInValid: SubmitErrorHandler<PostForm> = (e: any) => {
    console.log(e);
    console.log("Fail Login");
  };
  return (
    <div className="formCard">
      <h2 className="formTitle">記事を投稿する</h2>
      <form onSubmit={handleSubmit(uploadBlog, isInValid)}>
        <label>
          タイトル
          <br />
          <input
            type="text"
            className="blogTitleForm"
            {...register("title", { required: "タイトルを記入" })}
          />
        </label>
        <br />
        <label>
          投稿
          <br />
          <textarea
            className="blogTextAreaForm"
            {...register("content", {
              required: "投稿内容を記入",
              minLength: { value: 8, message: "8文字以上入力してください" },
            })}
          ></textarea>
          {errors.content?.message}
        </label>
        <br />

        <input type="submit" value="投稿する" className="submitBtn" />
      </form>
    </div>
  );
};
