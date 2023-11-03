import React from "react";
import style from "../../../assets/css/admin.module.css";
// import BranchModal from "components/subComponent/BranchModal";
import Backdrop from "components/subComponent/Backdrop";
import AllowanceUnitModal from "components/subComponent/AllowanceUnitModal";

import {
  Card,
} from "reactstrap";

function EmployeeDeduction() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Card className="shadow py-3">
            <form className="container mt-4">
              <div className="row">
                <div className={"form-group col-md-6"}>
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
                    
                  </select>
                  <span
                    className="spanValid field-validation-valid"
                    data-valmsg-for="town"
                    data-valmsg-replace="true"
                  ></span>
                </div>

                <div className={"form-group col-md-6"}>
                  <label htmlFor="module" className="float-left text-dark">
                    File <b className="text-danger">*</b>
                  </label>

                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                  <span
                    className="spanValid field-validation-valid"
                    data-valmsg-for="module"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div className={style.ModalBtnCont}>
                <div className={style.modalActionBtn}>
                  <button className={style.ActBtn}>Upload</button>
                  <button className={style.CanBtn}>Reset</button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDeduction;
