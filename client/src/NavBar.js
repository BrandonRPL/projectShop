function NavBar() {

return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid ">
      <a className="navbar-brand" href="#">Shopping Time</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row-reverse">
        <ul className="navbar-nav">
            <li className="nav-item me-5 ">
                <a className="nav-link ms-auto bd-highlight" href="#">Carrito</a>
            </li>
        </ul>
       </div>
    </div>
  </nav>


    );
}

export default NavBar;