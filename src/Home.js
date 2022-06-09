import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
// Use effect runs after every render. Second value passed in is the dependency. So, it will only run if the dependency changes
  useEffect(() => {
    console.log('use effect ran')
    console.log(name)
  }, [name]);

  return (
    <div className="home">
      {/* //blogs is a prop */}
        <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs"/>
        <button onClick={() => setName('Luigi')}>change name</button>
        <p> { name }</p>
    </div>
  );
}
 
export default Home;