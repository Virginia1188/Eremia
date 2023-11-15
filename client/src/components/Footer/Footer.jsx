

export default function Footer() {

    return (
        <div className="container-fluid footer bg-light py-5" style={{marginTop: 90}}>
            <div className="container text-center py-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <a href="index.html" className="navbar-brand m-0">
                            <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary"></span>Еремия</h1>
                        </a>
                    </div>
                    <div className="col-12 mb-4">
                        <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-secondary btn-social" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="col-12 mt-2 mb-4">
                        <div className="row">
                            <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                                <h5 className="font-weight-bold mb-2">Свържете се с нас</h5>
                                <p className="mb-2">eremiabg@abv.bg</p>
                                <p className="mb-0">0888 888 888</p>
                            </div>
                            <div className="col-sm-6 text-center text-sm-left">
                                <h5 className="font-weight-bold mb-2">Работно Време</h5>
                                <p className="mb-2">Понеделник – Петък, 18.00ч – 20.30ч</p>
                                <p className="mb-0">Събота, Неделя: Затворено</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className="m-0">&copy; Всички права запазени.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}