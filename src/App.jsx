import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from './Components/CardList';
import Pagination from './Components/Pagination';
import { fetchPosts } from './Store/postSlice';


const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.posts);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts());
    }, 5000);  
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <CardList />
      <Pagination />
    </div>
  );
};

export default App;
