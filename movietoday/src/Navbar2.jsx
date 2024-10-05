const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <div className="logo2">MovieToday</div>
      <div className="logo-img2">
        <img src="images.jpg" alt="logo"></img>
      </div>
      <div className="nav-links2">
        <a href="/">Home</a>
        <a href="review_btn" className="active2">
          Review
        </a>
        <a href="about_btn">About</a>
      </div>
      <div className="nav-icons2">
        <div className="icon-btn-1-2">
          <img src="/Vector.png"></img>
        </div>
        <div className="icon-btn-2-2">
          <img src="/Vector-2.png"></img>
        </div>
        <div className="icon-btn-3-2">
          <img src="/Vector-3.png"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
