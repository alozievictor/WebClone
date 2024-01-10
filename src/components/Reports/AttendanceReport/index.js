import React, { useState } from "react";
import style from "../../../assets/css/block.module.css";
import UserHeader from "components/Headers/UserHeader";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

const AttendanceReport = () => {
    const [entity, setEntity] = useState("");
    const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    return (
        <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Attendance Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Attendance
              </li>
            </ol>
          </nav>
        </div>
        <div className="div">
      {/* Table */}
      <div className="">
          <Card className="shadow my-2">
          <div class="table_container px-3">
              <div class={style.tableButton}>
                <div class="row col-md-10 col-12 py-3">
                  <div className="col-md-3 col-12 py-3">
                    <div className={style.searchInput}>
                      <i class="fa fa-search fa-icon" aria-hidden="true"></i>
                      <input
                        type="text"
                        placeholder="search"
                        className={style.input}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-12 py-4">
                    <select
                      className="form-control"
                      id="entity"
                      value={entity}
                      onChange={(e) => setEntity(e.target.value)}
                    >
                      <option value="">ALL ENTITY</option>
                    </select>
                  </div>
                  <div className="col-md-3 col-12 py-3">
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name={selectedDate}
                      onChange={(event) => handleDateChange(event.target.value)}
                    />
                  </div>
                </div>

                <div class={style.buttonsContainer}>
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
            </div>
            <div class="table_container px-3" data-v-17b4fe89="">
              <div
                class={style.tableContainer}
                style={{ overflowX: "auto;" }}
                data-v-17b4fe89=""
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
                  class="table table-hover py-18 table-responsive"
                  style={{ width: "100%" }}
                >
                  <thead className={style.Header}>
                    <tr>
                      <th class="" scope="col"></th>
                      <th class="">
                        <span class={style.HeaderText}>EMPLOYEE NAME</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>ENTITY</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>EXPECTED CHECK-INS</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>CHECK INS</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>ON TIME</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>EXCUSED ABSENT</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>UNEXCUSED ABSENT</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>MONTH/YEAR</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>ACTION</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={style.TableBody}>
                    {REPORTS.map((department, index) => {
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
                          <td className="pt-4">{department.name}</td>
                          <td className="pt-4">{department.number}</td>

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
    </div>
    )
}

export default AttendanceReport;

const REPORTS = [];