import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../Store/postSlice';
import avtar from '../assets/image/avtar.png'

const Card = ({ post }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePost(post.id));
  };

  const formattedDate = new Date(post.date || '2020-12-21T14:57:00Z').toGMTString();

  return (
    <div className="card">
      <h3>{post.title.length > 30 ? `${post.title.slice(0, 30)}...` : post.title}</h3>
      <p>{post.body.length > 50 ? `${post.body.slice(0, 50)}...` : post.body}</p>
      <img src={avtar} alt={post.title} />
      <p>{formattedDate}</p>
      <button className="remove-btn" onClick={handleRemove}><i class="fa-solid fa-trash"></i></button>
    </div>
  );
};

export default Card;
