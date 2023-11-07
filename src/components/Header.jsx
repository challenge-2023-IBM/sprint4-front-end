import logo from '../assets/logo.png'

function Header() {

return (
    <>
    <header className="menu-header">
        <nav className="navbar navbar-expand-lg menu-header">
            <div className="container-fluid">
                <a className="navbar-brand logo-menu" href="#">
                    <img src={logo} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center ms-auto">
                        <li className="nav-item">
                            <a href="#About">Quem somos?</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Problem">Problema</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Impacts">Impactos</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#Solution">Solução</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#Arduino">Arduino</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#Application">Aplicativo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
)
}

export default Header
