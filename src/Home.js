import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(35);
  const handleClick = () => {
    setName('luigi');
    setAge(30);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('Mario', e) }>Click me again</button>
    </div>
  );
}
 
export default Home;