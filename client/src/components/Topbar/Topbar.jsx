import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

export default function Topbar() {

    const {
        isAuthenticated,
        isAdmin,
        username
    } = useContext(AuthContext)
    return (
        <div>
            <div className="container-fluid bg-primary py-3 d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">

                                {!isAuthenticated && (
                                    <div>
                                        <Link className="text-white pr-3" to={Path.Register}>Регистрация</Link>
                                        <span className="text-white">|</span>
                                        <Link className="text-white px-3" to={Path.Login}>Вход</Link>
                                    </div>
                                )}

                                {isAuthenticated && !isAdmin && (
                                    <div>
                                        <Link className="text-white pr-3" to={Path}>Моята Зала</Link>
                                        <span className="text-white">|</span>
                                        <Link className="text-white px-3" to={Path}>Любими</Link>
                                        <span className="text-white">|</span>
                                        <Link className="text-white px-3" to={Path}>Профил</Link>
                                        <span className="text-white">|</span>
                                        <Link className="text-white pl-3" to={Path.Logout}>Изход</Link>
                                    </div>
                                )}
                                {isAdmin && (
                                    <div>
                                        {/* <Link className="text-white pr-3" to={Path.StudioDetails}>Мойте Групи</Link>
                                        <span className="text-white">|</span> */}
                                        <Link className="text-white pr-3" to={Path.CreateStudio}>Добави зала</Link>
                                        <span className="text-white">|</span>
                                        <Link className="text-white px-3" to={Path}>Профил</Link>
                                        <span className="text-white">|</span>
                                        <Link className="text-white pl-3" to={Path.Logout}>Изход</Link>
                                    </div>
                                )}



                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="text-white pl-3" href="">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}