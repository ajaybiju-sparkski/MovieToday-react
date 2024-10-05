const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MovieToday</div>
      <div className="logo-img">
        <img src="images.jpg" alt="logo"></img>
      </div>
      <div className="nav-links">
        <a href="/" className="active">
          Home
        </a>
        <a href="review_btn">Review</a>
        <a href="about_btn">About</a>
      </div>
      <div className="nav-icons">
        <div className="icon-btn-1">
          <img src="/Vector.png"></img>
        </div>
        <div className="icon-btn-2">
          <img src="/Vector-2.png"></img>
        </div>
        <div className="icon-btn-3">
          <img src="/Vector-3.png"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
