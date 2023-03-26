function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#Home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Nosotros">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Servicios">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Talleres">Talleres</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contacto">Contacto</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  export default Navbar