import React from 'react';
import style from "../../assets/css/block.module.css";
import BranchModal from "components/subComponent/BranchModal";
import Backdrop from "components/subComponent/Backdrop";
// import style from "../../assets/css/salary.module.css"

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

function SalaryStructure() {

  const [isLocation, setIsLocation] = React.useState(false);

  const HandleLocation = () => {
    setIsLocation(true);
  };

  const closehandler = () => {
    setIsLocation(false);
  };


  return (
    <div className={style.strucCont}> 
        {/* Table */}
        <div className="">
          <div className="">
            <Card className="shadow px-3">
              <div class="" data-v-17b4fe89="">
                <div class={style.tableButton} data-v-17b4fe89="">
                  <div class="tableFilters" data-v-17b4fe89="">
                    <div class={style.searchInput} data-v-17b4fe89="">
                      <i class="fa fa-search" aria-hidden="true"></i>
                      <input
                        type="text"
                        placeholder="Structure"
                        data-v-17b4fe89=""
                        className={style.input}
                      />
                    </div>
                  </div>
                  <div class={style.buttonsContainer} data-v-17b4fe89="">
                    <button onClick={HandleLocation} className={style.locationBtn} data-v-17b4fe89="">
                      {" "}
                      + Add Location{" "}
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
                  </div>
                </div>
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
                    class="table table-hover py-18"
                    style={{ width: "100%" }}
                  >
                    <thead className={style.Header}>
                      <tr>
                        <th class="" scope="col"></th>
                        <th class={style.HeaderText}>Entity</th>
                        <th class="h1">Branch</th>
                        <th class="">Type</th>
                        <th class="">Address</th>
                        <th class=""></th>
                      </tr>
                    </thead>
                    <tbody className={style.TableBody}>
                      <tr class="odd">
                        <td class="sorting_1">
                          <div class="item_check">
                            <input
                              type="checkbox"
                              data-id="29"
                              class="row_input"
                            />
                          </div>
                        </td>
                        <td>Techvibes International Limited</td>
                        <td>Abuja</td>
                        <td>Head Office</td>
                        <td>3 Isiyaku Ismiala Crescent, Wuye</td>
                        <td>
                          <div class="dropdown">
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
                      <tr class="even">
                        <td class="sorting_1">
                          <div class="item_check">
                            <input
                              type="checkbox"
                              data-id="36"
                              class="row_input"
                            />
                          </div>
                        </td>
                        <td>Senbo Nigeria Limited</td>
                        <td>Port Harcourt</td>
                        <td>Head Office</td>
                        <td>3 Agip Estate, Mile 4 Rumueme</td>
                        <td>
                          <div class="dropdown">
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
                                  data-row='{"id":36,"location":"Port Harcourt","location_type":"Head Office","address":"3 Agip Estate, Mile 4 Rumueme","subsidiary_id":30,"subsidiary":"Senbo Nigeria Limited","action":"","DT_RowIndex":36}'
                                  href="#"
                                >
                                  Edit
                                </a>
                              </li>{" "}
                              <li>
                                <a
                                  class="dropdown-item btn-delete"
                                  data-id="36"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </li>{" "}
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr class="odd selected">
                        <td class="sorting_1">
                          <div class="item_check">
                            <input
                              type="checkbox"
                              data-id="37"
                              class="row_input"
                            />
                          </div>
                        </td>
                        <td>Techvibes International Limited</td>
                        <td>Port Harcourt</td>
                        <td>Branch</td>
                        <td>8 Azikiwe Street</td>
                        <td>
                          <div class="dropdown">
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
                                  data-row='{"id":37,"location":"Port Harcourt","location_type":"Branch","address":"8 Azikiwe Street","subsidiary_id":14,"subsidiary":"Techvibes International Limited","action":"","DT_RowIndex":37}'
                                  href="#"
                                >
                                  Edit
                                </a>
                              </li>{" "}
                              <li>
                                <a
                                  class="dropdown-item btn-delete"
                                  data-id="37"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </li>{" "}
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">
                          <div class="item_check">
                            <input
                              type="checkbox"
                              data-id="38"
                              class="row_input"
                            />
                          </div>
                        </td>
                        <td>Senbo Nigeria Limited</td>
                        <td>Abuja</td>
                        <td>Branch</td>
                        <td>Behind ShopRite Airport Road,</td>
                        <td>
                          <div class="dropdown">
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
                                  data-row='{"id":38,"location":"Abuja","location_type":"Branch","address":"Behind ShopRite Airport Road,","subsidiary_id":30,"subsidiary":"Senbo Nigeria Limited","action":"","DT_RowIndex":38}'
                                  href="#"
                                >
                                  Edit
                                </a>
                              </li>{" "}
                              <li>
                                <a
                                  class="dropdown-item btn-delete"
                                  data-id="38"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </li>{" "}
                            </ul>
                          </div>
                        </td>
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
              <div>
            {isLocation && (
              <BranchModal onCancel={closehandler} onConfirm={closehandler} />
            )}
            {isLocation && <Backdrop onClick={closehandler} />}
          </div>
            </Card>
          </div>
        </div>
      </div>
  )
}

export default SalaryStructure;