function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-s1">
        <h1 className="navbar-s1__title">Udemy</h1>
      </div>

      <div className="navbar-s2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search anything here. Tech, Business or etc..." />
      </div>

      <div className="navbar-s3">
        <p>Courses</p>
        {/* <p>My Learning</p> */}
        <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
            <p>U did not purchase any courses yet.</p>
          </div>
        </div>
        <i
          className="fa-solid fa-cart-shopping fa-width-auto"
          style={{ color: "rgb(18, 19, 21)" }}
        ></i>
        <i
          className="fa-solid fa-bell fa-width-auto"
          style={{ color: "rgb(18, 19, 21)" }}
        ></i>
        <i
          className="fa-solid fa-user fa-width-auto"
          style={{ color: "rgb(18, 19, 21)" }}
        ></i>
      </div>
      <div className="navbar-s4">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;