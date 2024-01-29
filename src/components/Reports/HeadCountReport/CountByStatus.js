import React, { useState} from "react";
import style from "../../../assets/css/block.module.css";
import { Card } from "reactstrap";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";

import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

const Data = [
  {type: "FULL TIME", number: 2},
  {type: "PART TIME", number:  1},
];

const CountByStatus = () => {
  const [entity, setEntity] = useState("");
  const [department, setDepartment] = useState("");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.type),
    datasets: [
      {
        data: Data.map((data) => data.number),
        backgroundColor: [
          '#F7B2AD',
          '#CEB7B3',
          '#FEA82F',
        ],
        borderWidth: 1
      }
    ]
  });

  const options = {
    responsive: true,
    legend: {
      display: true,
      position: 'right',
      labels: {
        color: 'black',
        fontSize: 14,
        fontStyle: 'italic',
      },
      title: {
        text: 'Status',
        display: true,
      },
      box: {
        backgroundColor: 'rgba(220, 220, 220, 0.8)',
        borderColor: 'grey',
        borderRadius: 5,
      },
    },
    cutoutPercentage: 70, // Define hole size in the center
  };

  return (
    <div className="">
      {/* Table */}
      <div className="">
        <div className="">
          <Card className="shadow">
            <div class="table_container px-3">
              <div class={style.tableButton}>
                <div class="row col-md-10 col-12 py-3">
                  <div className="col-md-3 col-12 py-3">
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
                <div class={style.buttonsContainer}>
                  <div
                    class="csv d-none d-md-block d-lg-block"
                    id="csv"
                   
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
               
              >
                <div className="chart">
                  <Doughnut
                    data={chartData}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CountByStatus;
