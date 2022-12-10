import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../store/postSlice";
import PostItems from "./PostItems";

const PostList = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const removeHandler = (id) => {
    dispatch(removePost(id));
  };
  return (
    <div className="post__container">
      <div className="post__items">
        <PostItems
          post={post}
          removeHandler={removeHandler}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default PostList;
