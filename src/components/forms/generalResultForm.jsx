import { Outlet } from "react-router-dom";

function GeneralResultForm() {
    return (
        <>
            <div
                className="card border-5 rounded-5 mx-auto col-10 col-md-8 col-lg-6 mt-5 w-auto"
                style={{}}
            >
                <div className="text-center my-2">
                    <h1
                        style={{
                            fontFamily: "Roboto Slab, serif",
                            textDecoration: "none",
                            fontWeight: 800,
                            fontSize: 50,
                        }}
                    >
                        Formulario de Análisis
                    </h1>
                </div>



                <form>
                    <div className="mx-3 px-4 pb-2">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="d-flex flex-row justify-content-center px-4 pb-3">
                        <div className="container px-3">
                            <div className="form-group pb-2">
                                <label for="idCliente">ID Cliente</label>
                                <input
                                    className="form-control text-center"
                                    type="text"
                                    id="idCliente"
                                    placeholder="Cédula física o jurídica"
                                ></input>
                            </div>
                            <label for="provincia">Provincia</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="container px-3">
                            <div className="form-group pb-2">
                                <label for="nombre">Nombre</label>
                                <input
                                    className="form-control text-center"
                                    type="text"
                                    id="idCNombre"
                                    placeholder="Nombre"
                                ></input>
                            </div>
                            <div className="form-group">
                                <label for="canton">Cantón</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="container px-3">
                            <div className="form-group pb-2">
                                <label for="fecha">Fecha</label>
                                <input
                                    className="form-control text-center"
                                    type="datetime-local"
                                    id="idCNombre"
                                ></input>
                            </div>
                            <div className="form-group">
                                <label for="distrito">Distrito</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form >
            </div >

            <Outlet />
        </>
    );
}

export default GeneralResultForm;
