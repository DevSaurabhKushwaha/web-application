import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const CardList = () => {
  const { posts, currentPage, postsPerPage } = useSelector(state => state.posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="card-list">
      {currentPosts.map(post => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardList;
