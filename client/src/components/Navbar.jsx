import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: 9}}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <Link to='/' className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary" ><span className="text-secondary"></span><div className={styles.navTitle}>Еремия</div></h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/studios" className="nav-item nav-link active">Зали</Link>
                            <Link to="/shedule" className="nav-item nav-link">График</Link>
                            <Link to="/about" className="nav-item nav-link">За Нас</Link>
                        </div>
                        <Link to="/" className="navbar-brand mx-5 d-none d-lg-block">
                            <h1 className="m-0 display-4 text-primary " ><span className="text-secondary"></span><div className={styles.navTitle}>Еремия</div></h1>
                        </Link>
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/services" className="nav-item nav-link">Услуги</Link>
                            <Link to="/events" className="nav-item nav-link">Събития</Link>
                            <Link to="/contacts" className="nav-item nav-link">Контакти</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}