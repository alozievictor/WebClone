import React from "react";
import style from "../../assets/css/block.module.css";
import "react-datepicker/dist/react-datepicker.css";

import { Card } from "reactstrap";

function ExpenditureRegister() {
  const [batchName, setBatchName] = React.useState("");
  const [batchType, setBatchType] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Batch Name:", batchName);
    console.log("Batch Type:", batchType);
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div className="">
      {/* Table */}
      <div className="">
        <div className="">
          <Card className="shadow">
            <div class={style.tableContainer2} data-v-17b4fe89="">
              <form className="row gap-5" onSubmit={handleSubmit}>
                <div className="col-md-6 col-12 py-3">
                  <label htmlFor="batchName" className="float-left text-dark">
                    Batch Name
                  </label>
                  <input
                    type="text"
                    id="batchName"
                    className="form-control"
                    placeholder="Enter Batch Name"
                    value={batchName}
                    onChange={(e) => setBatchName(e.target.value)}
                  />
                </div>
                <div className="col-md-6 col-12 py-3">
                  <label htmlFor="batchType" className="float-left text-dark">
                    Batch Type
                  </label>
                  <select
                    className="form-control"
                    id="batchType"
                    value={batchType}
                    onChange={(e) => setBatchType(e.target.value)}
                  >
                    <option value="">Please Select</option>
                    <option value="ABUJA FCT">ABUJA FCT</option>
                    <option value="ABIA">ABIA</option>
                    <option value="ADAMAWA">ADAMAWA</option>
                    <option value="AKWA IBOM">AKWA IBOM</option>
                  </select>
                </div>
                <div className="col-md-6 col-12 py-3">
                  <label
                    htmlFor="selectedDate"
                    className="float-left text-dark"
                  >
                    Year/Month
                  </label>
                  <input 
                    type="date" 
                    className="form-control"
                    id="date" 
                    name={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="col-12">
                  <div className={style.ActionBtn}>
                    <button type="submit" className={style.ActBtn}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ExpenditureRegister;
