import { Modal, ModalHeader, FormGroup } from "reactstrap";
import { SiAirtable } from "react-icons/si";
export const ModalAgregarMesas = ({
  modalAgregarMesas,
  setModalAgregarMesas,
}) => {
  return (
    <>
      <Modal isOpen={modalAgregarMesas}>
        <ModalHeader>
          <h4 className="titulo-modal-agregar">Agregar Mesas</h4>
        </ModalHeader>
        <FormGroup>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
                <SiAirtable size={80} />
                <h4 className="titulo-modal-agregar">Valor de Mesa:$$$</h4>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <h4 className="subtitulo-modal-agregar">
                  Ingrese la cantidad de mesas
                </h4>
                <input
                  name="numeroMesas"
                  //value={contrasenaUsuario}
                  //onChange={handleInnputChange}
                  type="numeroMesas"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  placeholder="Número de mesas"
                />
                <h4 className="subtitulo-modal-agregar">
                  Total a cancelar:$$$
                </h4>
              </div>
            </div>
          </div>
        </FormGroup>
      </Modal>
    </>
  );
};
