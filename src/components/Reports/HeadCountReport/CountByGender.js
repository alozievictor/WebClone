import React, { useState } from "react";
import style from "../../../assets/css/block.module.css";
import { Card } from "reactstrap";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";


const Data = [
  { gender: 'Male', number: 316 },
  { gender: 'Female', number: 2316 },
];


// Chart.register(PieController, CategoryScale);

const CountByGender = () => {
  const [entity, setEntity] = useState("");
  const [department, setDepartment] = useState("");

  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.gender),
    datasets: [
      {
        label: "Employees Gender",
        data: Data.map((data) => data.number),
        backgroundColor: [
          '#F7B2AD',
          '#CEB7B3',
          '#FEA82F',
        ],
        borderWidth: 2
      }
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Batch Type:", entity);
  };

  return (
    <div className="">
      {/* Table */}
      <div className="">
        <div className="">
          <Card className="shadow">
            <div class="table_container px-3" data-v-17b4fe89="">
              <div class={style.tableButton} data-v-17b4fe89="">
                <div class="row col-md-10 col-12 py-3">
                  <div className="col-md-3 col-12 py-3">
                    {/* <label htmlFor="batchType" className="float-left text-dark">
                    Batch Type
                  </label> */}
                    <select
                      className="form-control"
                      id="batchType"
                      value={entity}
                      onChange={(e) => setEntity(e.target.value)}
                    >
                      <option value="">ALL ENTITY</option>
                      <option value="ASUBEB EKET">ASUBEB EKET</option>
                      <option value="ASUBEB IKOT EKPENE">
                        ASUBEB IKOT EKPENE
                      </option>
                      <option value="ASUBEB UYO">ASUBEB UYO</option>
                      <option value="ASUBEB IKA">ASUBEB IKA</option>
                    </select>
                  </div>
                  <div className="col-md-3 col-12 py-3">
                    {/* <label htmlFor="batchType" className="float-left text-dark">
                    Batch Type
                  </label> */}
                    <select
                      className="form-control"
                      id="batchType"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value="">ALL DEPARTMENT</option>
                    </select>
                  </div>
                </div>
                <div class={style.buttonsContainer} data-v-17b4fe89="">
                  <div
                    class="csv d-none d-md-block d-lg-block"
                    id="csv"
                    data-v-17b4fe89=""
                  >
                    <div class="dt-buttons btn-group flex-wrap">
                      <button
                        class="btn btn-secondary buttons-excel buttons-html5 csv"
                        tabindex="0"
                        aria-controls="branchTable"
                        type="button"
                        className={style.exportBtn}
                      >
                        <i class="fa fa-download mr-1" aria-hidden="true"></i>
                        <span className="h4"> Export </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={style.tableContainer}
                style={{ overflowX: "auto"}}
                data-v-17b4fe89=""
              >
                <div className="chart">
                  <Doughnut
                    data={chartData}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "Employee's Gender"
                        },
                        legend: {
                          display: true,
                          position: 'bottom',
                          
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default CountByGender;
