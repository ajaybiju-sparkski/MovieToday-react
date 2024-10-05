const Navbar3 = () => {
  return (
    <nav className="navbar3">
      <div className="logo3">MovieToday</div>
      <div className="logo-img3">
        <img src="images.jpg" alt="logo"></img>
      </div>
      <div className="nav-links3">
        <a href="/">Home</a>
        <a href="review_btn">Review</a>
        <a href="about_btn" className="active3">
          About
        </a>
      </div>
      <div className="nav-icons2">
        <div className="icon-btn-1-3">
          <img src="/Vector.png"></img>
        </div>
        <div className="icon-btn-2-3">
          <img src="/Vector-2.png"></img>
        </div>
        <div className="icon-btn-3-3">
          <img src="/Vector-3.png"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
