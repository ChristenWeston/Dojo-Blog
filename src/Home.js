import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  const [name, setName] = useState('mario');

  return (
    <div className="home">
      {/* //blogs is a prop */}
        { error && <div>{ error }</div>}
        { isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="All blogs!"/>}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs"/>
        <button onClick={() => setName('Luigi')}>change name</button> */}
        <p> { name }</p>
    </div>
  );
}
 
export default Home;