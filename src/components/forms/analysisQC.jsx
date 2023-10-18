import { Outlet } from "react-router-dom";

function AnalysisQC() {
  return (
    <>
        <form>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="d-flex flex-row">
                            <div class="input-group">
                                <span class="input-group-text">NºLab</span>
                                <input type="number" id="nLab" class="form-control" />
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Cód</span>
                                <input type="text" id="cod" class="form-control" />
                                <span class="input-group-text">Año</span>
                                <input type="number" id="year" class="form-control" />
                                <span class="input-group-text">Serial</span>
                                <input type="number" id="serial" class="form-control" />
                            </div>
                        </div>
                            
                    </div>


                </div>
          <div class="d-flex align-items-baseline flex-col">
            <div class="d-flex  align-items-baseline flex-row">
              
               
            
                
            
                <div class="input-group">
                  <span class="input-group-text">pH</span>
                  <input type="number" id="pH" class="form-control" />
                </div>
              
                <div class="input-group">
                  <span class="input-group-text">Acidez ext.</span>
                  <input
                    type="number"
                    id="pH"
                    placeholder="cmol(+)/L"
                    class="form-control"
                  />
                  <span class="input-group-text">Ca</span>
                  <input
                    type="number"
                    id="pH"
                    placeholder="cmol(+)/L"
                    class="form-control"
                  />
                  <span class="input-group-text">Mg</span>
                  <input
                    type="number"
                    id="pH"
                    placeholder="cmol(+)/L"
                    class="form-control"
                  />
                  <span class="input-group-text">K</span>
                  <input
                    type="number"
                    id="pH"
                    placeholder="cmol(+)/L"
                    class="form-control"
                  />
                  <span class="input-group-text">cmol(+)/L</span>
                </div>
         


             </div>
           </div>
           </div>
        </form>
      <Outlet />
    </>
  );
}

export default AnalysisQC;
