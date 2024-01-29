import React, { useState } from "react";
import style from "../../../assets/css/block.module.css";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";

import {
  Card, CardBody
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

const CountByLocation = () => {

    const [entity, setEntity] = useState("");
    const [chartExample1Data, setChartExample1Data] = useState("data1");


    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }

    const data = {
      labels: ['Uyo', 'Karu', 'Eket', 'Abuja', 'Lagos', 'Calabar'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 20],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        // Add more datasets as needed
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        zoom: {
          pan: {
            enabled: true,
            mode: 'xy',
          },
          zoom: {
            enabled: true,
            mode: 'xy',
          },
        },
      },
    };

    return (
      <div className="">
      {/* Table */}
      <div className="">
        <div className="">
        <Card className="shadow">
            <div class="table_container px-3" >
              <div class={style.tableButton} >
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
                </div>
                <div class={style.buttonsContainer} >
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
              <CardBody>
              <div className="chart">
                <Line
                  data={data}
                  options={options}
                />
              </div>
              </CardBody>
            </div>
          </Card>
          <Card className="shadow my-2">
            <div class="table_container px-3" >
              <div class={style.tableButton} >
                <div class="tableFilters" >
                  <div class={style.searchInput} >
                    <i class="fa fa-search fa-icon" aria-hidden="true"></i>
                    <input
                      type="text"
                      placeholder="Search"
                      className={style.input}
                    />
                  </div>
                </div>
                <div class={style.buttonsContainer} >
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
                style={{ overflowX: "auto;" }}
                
              >
                <div
                  id="branchTable_wrapper"
                  class="dataTables_wrapper dt-bootstrap5 no-footer"
                >
                  <div class="top">
                    <div
                      class={style.tableInfo}
                      id="branchTable_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 4 of 4 entries
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <table
                  id="example"
                  class="table table-hover py-18"
                  style={{ width: "100%" }}
                >
                  <thead className={style.Header}>
                    <tr>
                      <th class="" scope="col"></th>
                      <th class="">
                        <span class={style.HeaderText}>Location</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>
                          Number of Employees
                        </span>
                      </th>
                      <th class="" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody className={style.TableBody}>
                    {LOCATIONS.map((location, index) => {
                      return (
                        <tr class="odd" key={index}>
                          <td className={style.check}>
                            <div class="item_check">
                              <input
                                type="checkbox"
                                data-id="29"
                                class="row_input"
                              />
                            </div>
                          </td>
                          <td className="pt-4">{location.name}</td>
                          <td className="pt-4">{location.number}</td>

                          <td className="pt-4">
                            <div className={style.actBtn}>
                              <button
                                class={style.tableAction}
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {" "}
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                              </button>
                              <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  <a
                                    class="dropdown-item btn-edit"
                                    data-row='{"id":29,"location":"Abuja","location_type":"Head Office","address":"3 Isiyaku Ismiala Crescent, Wuye","subsidiary_id":14,"subsidiary":"Techvibes International Limited","action":"","DT_RowIndex":29}'
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                </li>{" "}
                                <li>
                                  <a
                                    class="dropdown-item btn-delete"
                                    data-id="29"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </li>{" "}
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div class={style.tableFooter}>
                <div
                  class="dataTables_paginate paging_simple_numbers"
                  id="branchTable_paginate"
                >
                  <ul class="pagination">
                    <li
                      class="paginate_button page-item previous disabled"
                      id="branchTable_previous"
                    >
                      <a
                        href="#"
                        aria-controls="branchTable"
                        aria-label="Previous"
                        data-dt-idx="0"
                        tabindex="0"
                        class="page-link"
                      >
                        «
                      </a>
                    </li>
                    <li class="page-item active">
                      <a
                        href="#"
                        aria-controls="branchTable"
                        data-dt-idx="1"
                        tabindex="0"
                        class="page-link"
                        style={{
                          background: "#01bfc9",
                          border: "none",
                          margin: "0px 10px",
                        }}
                      >
                        1
                      </a>
                    </li>
                    <li
                      class="paginate_button page-item next disabled"
                      id="branchTable_next"
                    >
                      <a
                        href="#"
                        aria-controls="branchTable"
                        aria-label="Next"
                        data-dt-idx="2"
                        tabindex="0"
                        class="page-link"
                      >
                        »
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="dataTables_length" id="branchTable_length">
                  <label>
                    Show
                    <select
                      name="branchTable_length"
                      aria-controls="branchTable"
                      class="form-select form-select-sm"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="-1">All</option>
                    </select>{" "}
                    entries
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    )
}

export default CountByLocation;

const LOCATIONS = [
  {
    name: "EKET",
    number: 13,
  },
  {
    name: "IKOT EKPENE",
    number: 27,
  },
  {
    name: "UYO",
    number: 6,
  },
  {
    name: "URUAN",
    number: 12,
  },
];