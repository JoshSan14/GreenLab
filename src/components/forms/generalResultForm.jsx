import { Outlet } from "react-router-dom";

function GeneralResultForm() {
    return (
        <>
            <div
                className="card border-5 rounded-5 mx-auto col-10 col-md-8 col-lg-6 mt-5"
                style={{
                    width: "35rem",
                }}

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
                        Ingreso
                    </h1>
                </div>
                <form>

                    <div className="form-group row">
                        <label className="col-auto col-form-label ms-3" for="idCliente">ID Cliente</label>
                        <div class="col-auto">
                            <input className="form-control text-center" type="text" id="idCliente" placeholder="Cédula física o jurídica"></input>
                        </div>
                    </div>


                </form>

            </div>

            <Outlet />
        </>
    )
}

export default GeneralResultForm