export default function Topbar() {
    return (
        <div>
            <div className="container-fluid bg-primary py-3 d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                            <a className="text-white pr-3" href="">Регистрация</a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="">Вход</a>
                                <a className="text-white pr-3" href="">Моята Зала</a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="">Любими</a>
                                <span className="text-white">|</span>
                                <a className="text-white pl-3" href="">Профил</a>
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