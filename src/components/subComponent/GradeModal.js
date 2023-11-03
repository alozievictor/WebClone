import style from "../../assets/css/admin.module.css";
import React, { useEffect } from "react";

function GradeModal(props) {
    const closeHandler = () => {
        props.onCancel();
      };
    
      const ConfirmHandler = () => {
        props.onConfirm();
      };
      return (
        <div className={style.modal}>
          <div className={style.ModalHeader}>
            <div className={style.iconCont}>
              <svg
                className={style.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <span>Create Admin</span>
            </div>
            <button className={style.ModalBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
              </svg>
            </button>
          </div>
          <div className="my-1">
            <form className="container mt-4">
              <div className="row">
                <div className={"form-group col-md-12"}>
                  <label htmlFor="town" className="float-left text-dark">
                    Employee Name <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-control valid form-select"
                    required
                    id="town"
                    aria-invalid="false"
                  >
                    <option value="">Please Select</option>
                    <option value="ABUJA FCT">ABUJA FCT</option>
                    <option value="ABIA">ABIA</option>
                    <option value="ADAMAWA">ADAMAWA</option>
                    <option value="AKWA IBOM">AKWA IBOM</option>
                    <option value="ANAMBRA">ANAMBRA</option>
                    <option value="BAUCHI">BAUCHI</option>
                    <option value="BAYELSA">BAYELSA</option>
                    <option value="BENUE">BENUE</option>
                    <option value="BORNO">BORNO</option>
                    <option value="CROSS RIVER">CROSS RIVER</option>
                    <option value="DELTA">DELTA</option>
                    <option value="EBONYI">EBONYI</option>
                    <option value="EDO">EDO</option>
                    <option value="EKITI">EKITI</option>
                    <option value="ENUGU">ENUGU</option>
                    <option value="GOMBE">GOMBE</option>
                    <option value="IMO">IMO</option>
                  </select>
                  <span
                    className="spanValid field-validation-valid"
                    data-valmsg-for="town"
                    data-valmsg-replace="true"
                  ></span>
                </div>
    
                <div className={"form-group col-md-12"}>
                  <label htmlFor="module" className="float-left text-dark">
                    Module <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-control valid form-select"
                    required
                    id="module"
                    aria-invalid="false"
                  >
                    <option value="">Please Select</option>
                    <option value="ANAMBRA">ANAMBRA</option>
                    <option value="BAUCHI">BAUCHI</option>
                    <option value="BAYELSA">BAYELSA</option>
                    <option value="BENUE">BENUE</option>
                    <option value="BORNO">BORNO</option>
                    <option value="CROSS RIVER">CROSS RIVER</option>
                    <option value="DELTA">DELTA</option>
                    <option value="EBONYI">EBONYI</option>
                    <option value="EDO">EDO</option>
                    <option value="EKITI">EKITI</option>
                    <option value="ENUGU">ENUGU</option>
                    <option value="GOMBE">GOMBE</option>
                    <option value="IMO">IMO</option>
                  </select>
                  <span
                    className="spanValid field-validation-valid"
                    data-valmsg-for="module"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div className="row">
                <div className={"form-group col-md-12"}>
                  <label htmlFor="town" className="float-left text-dark">
                    Employee Name <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-control valid form-select"
                    required
                    id="town"
                    aria-invalid="false"
                  >
                    <option value="">Please Select</option>
                    <option value="ABUJA FCT">ABUJA FCT</option>
                    <option value="ABIA">ABIA</option>
                    <option value="ADAMAWA">ADAMAWA</option>
                    <option value="AKWA IBOM">AKWA IBOM</option>
                    <option value="ANAMBRA">ANAMBRA</option>
                    <option value="BAUCHI">BAUCHI</option>
                    <option value="BAYELSA">BAYELSA</option>
                    <option value="BENUE">BENUE</option>
                    <option value="BORNO">BORNO</option>
                    <option value="CROSS RIVER">CROSS RIVER</option>
                    <option value="DELTA">DELTA</option>
                    <option value="EBONYI">EBONYI</option>
                    <option value="EDO">EDO</option>
                    <option value="EKITI">EKITI</option>
                    <option value="ENUGU">ENUGU</option>
                    <option value="GOMBE">GOMBE</option>
                    <option value="IMO">IMO</option>
                  </select>
                  <span
                    className="spanValid field-validation-valid"
                    data-valmsg-for="town"
                    data-valmsg-replace="true"
                  ></span>
                </div>
    
                <div className={"form-group col-md-12"}>
                  <label htmlFor="module" className="float-left text-dark">
                    Module <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-control valid form-select"
                    required
                    id="module"
                    aria-invalid="false"
                  >
                    <option value="">Please Select</option>
                    <option value="ANAMBRA">ANAMBRA</option>
                    <option value="BAUCHI">BAUCHI</option>
                    <option value="BAYELSA">BAYELSA</option>
                    <option value="BENUE">BENUE</option>
                    <option value="BORNO">BORNO</option>
                    <option value="CROSS RIVER">CROSS RIVER</option>
                    <option value="DELTA">DELTA</option>
                    <option value="EBONYI">EBONYI</option>
                    <option value="EDO">EDO</option>
                    <option value="EKITI">EKITI</option>
                    <option value="ENUGU">ENUGU</option>
                    <option value="GOMBE">GOMBE</option>
                    <option value="IMO">IMO</option>
                  </select>
                  <span
                    className="spanValid field-validation-valid"
                    data-valmsg-for="module"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div className={style.ModalBtnCont}>
                <div className={style.modalActionBtn}>
                  <button className={style.ActBtn} onClick={closeHandler}>
                    Create
                  </button>
                  <button className={style.CanBtn} onClick={ConfirmHandler}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
          
        </div>
      );
}

export default GradeModal