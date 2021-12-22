import React, {useEffect} from "react";
import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    console.log('sdfs');
    dispatch(getAllPosts())
  }, [])

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
