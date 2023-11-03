import React from "react";
import style from "../../assets/css/block.module.css";
import Backdrop from "components/subComponent/Backdrop";
import AddSalary from "../../components/subComponent/AddSalary";

import {
  Card,
} from "reactstrap";

function ExpenditureDecline() {
  return (
    <div className="">
      {/* Table */}
      <div className="">
        <div className="">
          <Card className="shadow">
            <div class="table_container px-3" data-v-17b4fe89="">
              <div class={style.tableButton} data-v-17b4fe89="">
                <div class="tableFilters" data-v-17b4fe89="">
                  <div class={style.searchInput} data-v-17b4fe89="">
                    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                    <input
                      type="text"
                      placeholder="Steps"
                      data-v-17b4fe89=""
                      className={style.input}
                    />
                  </div>
                </div>
                {/* <div class={style.buttonsContainer} data-v-17b4fe89="">
                  <button
                    onClick={HandleLocation}
                    className={style.locationBtn}
                    data-v-17b4fe89=""
                  >
                    {" "}
                    + Add New{" "}
                  </button>
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
                </div> */}
              </div>
              {/* <div
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
              </div> */}

              <div>
                <table
                  id="example"
                  class="table py-18"
                  style={{ width: "100%" }}
                >
                  <thead className={style.Header}>
                    <tr>
                      <th class="" scope="col"></th>
                      <th class="">
                        <span class={style.HeaderText}>Batch Name</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Reason</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Rejected By</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Rejected On</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={style.TableBody}>
                    <tr class="odd">
                      <td className={style.check}>
                        <div class="item_check">
                          <input
                            type="checkbox"
                            data-id="29"
                            class="row_input"
                          />
                        </div>
                      </td>
                      <td className="pt-4">!ST_BATCH_FOR_JULY_PAY_64C37FCE4C093</td>
                      <td className="pt-4">To Much</td>
                      <td className="pt-4">EDCONBROWN+0@GMAIL.COM</td>
                      <td className="pt-4">2023-07-28 10:19:31</td>
                    </tr>
                    <tr class="odd">
                      <td className={style.check}>
                        <div class="item_check">
                          <input
                            type="checkbox"
                            data-id="29"
                            class="row_input"
                          />
                        </div>
                      </td>
                      <td className="pt-4">!ST_BATCH_FOR_JULY_PAY_64C37FCE4C093</td>
                      <td className="pt-4">To Much</td>
                      <td className="pt-4">EDCONBROWN+0@GMAIL.COM</td>
                      <td className="pt-4">2023-07-28 10:19:31</td>
                    </tr>
                    <tr class="odd">
                      <td className={style.check}>
                        <div class="item_check">
                          <input
                            type="checkbox"
                            data-id="29"
                            class="row_input"
                          />
                        </div>
                      </td>
                      <td className="pt-4">!ST_BATCH_FOR_JULY_PAY_64C37FCE4C093</td>
                      <td className="pt-4">To Much</td>
                      <td className="pt-4">EDCONBROWN+0@GMAIL.COM</td>
                      <td className="pt-4">2023-07-28 10:19:31</td>
                    </tr>
                    <tr class="odd">
                      <td className={style.check}>
                        <div class="item_check">
                          <input
                            type="checkbox"
                            data-id="29"
                            class="row_input"
                          />
                        </div>
                      </td>
                      <td className="pt-4">!ST_BATCH_FOR_JULY_PAY_64C37FCE4C093</td>
                      <td className="pt-4">To Much</td>
                      <td className="pt-4">EDCONBROWN+0@GMAIL.COM</td>
                      <td className="pt-4">2023-07-28 10:19:31</td>
                    </tr>
                    <tr class="odd">
                      <td className={style.check}>
                        <div class="item_check">
                          <input
                            type="checkbox"
                            data-id="29"
                            class="row_input"
                          />
                        </div>
                      </td>
                      <td className="pt-4">!ST_BATCH_FOR_JULY_PAY_64C37FCE4C093</td>
                      <td className="pt-4">To Much</td>
                      <td className="pt-4">EDCONBROWN+0@GMAIL.COM</td>
                      <td className="pt-4">2023-07-28 10:19:31</td>
                    </tr>
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

export default ExpenditureDecline