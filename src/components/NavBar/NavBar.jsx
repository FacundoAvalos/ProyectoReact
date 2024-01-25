
function NavBar() {
  return (
    <>
      <nav>
        <div>
          <h1 href="#home">Logo</h1>
        </div>
        <div>
          <ul>
            <li href="#home"><a href=""> Inicio</a></li>
            <li href="#features"><a href=""> Productos</a></li>
            <li href="#pricing"><a href=""> Contacto</a></li>
            <li href="#pricing"><a href=""><img src="img/carrito.png" alt="" width="20px" /></a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;