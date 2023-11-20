import "./App.css";
// Components
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
const App = () => {
  const page_Number = useParams().pageNumber || 1;
  // console.log(pageNumber);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // if something wrong with our call to backend
  const [error, setError] = useState(false);
  console.log('PageNumberInState', page_Number);
  const [page, setPage] = useState(page_Number);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    console.log('PageNumberEffect', page_Number);
    const fetchPosts = async () => {
      // we are making a request so setLoading to true

      setLoading(true);
      try {
        let res = await fetch(`/api/v1/posts?page=${page_Number}`, {
          headers: {
            accept: "application/json",
            "User-agent": "learning app",
          },
        });
        const { data, pages: totalPages } = await res.json();
        console.log('pageNumberAfterFetch',page_Number );
        setPages(totalPages);
        setPosts(data);

        // after data is fetched we set loading to false
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some error occured");
      }
    };
    fetchPosts();
  }, [page_Number]);
  return (
    <div className="app">
      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : error ? (
        <h3 className="error-text">{error}</h3>
      ) : (
        <>
        {console.log('pageNumberInReturnBeforePagination', page_Number)}
          <Pagination page={page_Number} pages={pages} changePage={setPage} />
          <div className="app__posts">
            {posts.map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </div>
          <Pagination page={page_Number} pages={pages} changePage={setPage} />
        </>
      )}

      {/* <Outlet /> */}
    </div>
  );
};

export default App;
