const  Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>Thunderstruck</h1>
      <div className="links">
        <a href="/">about</a>
        <a href="/">artists</a>
        <a href="/">exhibitions</a>
        <a href="/">store</a>
        {/* <a href="/create" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</a> */}
      </div>
    </nav>
  );
}

export default Navbar;