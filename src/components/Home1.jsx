const Home1 = () => {
  const handleClick = () => {
    console.log('hello ninjas');
  };

  return (
    <div className="home">
      <h2>Tutorial example</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home1;
