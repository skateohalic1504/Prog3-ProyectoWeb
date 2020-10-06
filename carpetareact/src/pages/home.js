import React, {useState, useEffect} from 'react';
import Header from '../Components/header';
import Hello from '../Components/hero';
import Jobs from '../Components/jobs';

import axios from 'axios';
import Posts from '../Components/Posts';
import Pagination from '../Components/Pagination';

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    //cuantas publicaciones saldran en la pagina
    const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  //Get current Post
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPage - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPage);

  //Change pages for publication 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <Header></Header>
        <Hello></Hello>
        {/* <Jobs></Jobs> */}

        <div className="container mt-5">
            <h1 className="text-dark mb-3">Publicaciones</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination  postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
        {/* <Footer></Footer> */}
        </>
    );
}

export default Home;