import { useEffect, useState } from 'react';
import Footer from './Footer';
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // * API call
    async function getUserInfo() {
    }
  }, []);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Palanivel</h3>
      <h4>Contact: palanivel250804@gmail.com</h4>
    </div>
  );
};

export default User;