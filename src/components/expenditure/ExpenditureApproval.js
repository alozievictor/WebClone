import React from "react";
import style from "../../assets/css/block.module.css";
import Backdrop from "components/subComponent/Backdrop";
import AddSalary from "../../components/subComponent/AddSalary";

import { Card } from "reactstrap";

function ExpenditureApproval() {
  return (
    <div className="">
      {/* Table */}
      <div className="">
        <div className="">
          <Card className="shadow">
            <div class="table_container px-3" data-v-17b4fe89="">
              <div class={style.tableButton} data-v-17b4fe89="">
                <div class={style.tableButton2} data-v-17b4fe89="">

                  <div class={style.searchInput} data-v-17b4fe89="">
                    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                    <input
                      type="text"
                      placeholder="Search"
                      data-v-17b4fe89=""
                      className={style.input}
                    />
                  </div>
                  <div class={style.buttonsContainer2} data-v-17b4fe89="">
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      // name={selectedDate}
                      // onChange={handleDateChange}
                    />
                  </div>

                </div>
              </div>
              <div
                // class={style.tableContainer}
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

              <div className={`table-responsive ${style.tableContain}`} style={{ overflowX: "auto;" }} data-v-17b4fe89="">
                <table
                  id="example"
                  className={`table table-hover py-18 ${style.customTable}`} 
                  style={{ width: "100%" }}
                >
                  <thead className={style.Header}>
                    <tr>
                      <th class="" scope="col"></th>
                      <th class="">
                        <span class={style.HeaderText}>Batch Name</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Expenditure Type</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Name</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Amount</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Month/Year</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Bank</span>
                      </th>
                      <th class="">
                        <span class={style.HeaderText}>Account Number</span>
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
                      <td className="pt-4">1ST_BATCH_JULY_64C389E3170F4</td>
                      <td className="pt-4">SUPLEMENTRY PAYMENTS</td>
                      <td className="pt-4">ComanJr</td>
                      <td className="pt-4">15,000</td>
                      <td className="pt-4">JULY / 2023</td>
                      <td className="pt-4">ACCESS BANK PLC</td>
                      <td className="pt-4">12345678901</td>
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
                      <td className="pt-4">1ST_BATCH_JULY_64C389E3170F4</td>
                      <td className="pt-4">SUPLEMENTRY PAYMENTS</td>
                      <td className="pt-4">ComanJr</td>
                      <td className="pt-4">15,000</td>
                      <td className="pt-4">JULY / 2023</td>
                      <td className="pt-4">ACCESS BANK PLC</td>
                      <td className="pt-4">12345678901</td>
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
                      <td className="pt-4">1ST_BATCH_JULY_64C389E3170F4</td>
                      <td className="pt-4">SUPLEMENTRY PAYMENTS</td>
                      <td className="pt-4">ComanJr</td>
                      <td className="pt-4">15,000</td>
                      <td className="pt-4">JULY / 2023</td>
                      <td className="pt-4">ACCESS BANK PLC</td>
                      <td className="pt-4">12345678901</td>
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
                      <td className="pt-4">1ST_BATCH_JULY_64C389E3170F4</td>
                      <td className="pt-4">SUPLEMENTRY PAYMENTS</td>
                      <td className="pt-4">ComanJr</td>
                      <td className="pt-4">15,000</td>
                      <td className="pt-4">JULY / 2023</td>
                      <td className="pt-4">ACCESS BANK PLC</td>
                      <td className="pt-4">12345678901</td>
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
                      <td className="pt-4">1ST_BATCH_JULY_64C389E3170F4</td>
                      <td className="pt-4">SUPLEMENTRY PAYMENTS</td>
                      <td className="pt-4">ComanJr</td>
                      <td className="pt-4">15,000</td>
                      <td className="pt-4">JULY / 2023</td>
                      <td className="pt-4">ACCESS BANK PLC</td>
                      <td className="pt-4">12345678901</td>
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
                      <td className="pt-4">1ST_BATCH_JULY_64C389E3170F4</td>
                      <td className="pt-4">SUPLEMENTRY PAYMENTS</td>
                      <td className="pt-4">ComanJr</td>
                      <td className="pt-4">15,000</td>
                      <td className="pt-4">JULY / 2023</td>
                      <td className="pt-4">ACCESS BANK PLC</td>
                      <td className="pt-4">12345678901</td>
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
  );
}

export default ExpenditureApproval;
