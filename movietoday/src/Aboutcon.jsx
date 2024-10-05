function Aboutcon() {
  return (
    <div className="aboutcon">
      <h2 className="ac-h2">
        About Movie <span className="ac-today">Today</span>
      </h2>
      <div className="points">
        <p className="web-p1">
          This <span className="p-website">website</span> is for searching movie{" "}
          <span className="imdb-p">imdb Rating</span>,{" "}
          <span className="plot-p">Plot</span>,{" "}
          <span className="dir-p">Director</span> and{" "}
          <span className="actors-p">Actiors</span>.
        </p>
        <p className="web-p2">
          {" "}
          It{"'"}s build with React and vite. The api used is "
          <span className="ombd-p">ombd-API</span>".
        </p>
        <p className="web-p3">
          You can just search for the movie name in search box.
        </p>
        <p className="web-p4">
          This website could access 3 pages with{" "}
          <span className="router-p">React router</span>.
        </p>
      </div>
    </div>
  );
}
export default Aboutcon;
