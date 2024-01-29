import React, { useState } from "react";

import style from "../../assets/css/salary.module.css";
import UserHeader from "components/Headers/UserHeader";

// core components
import LoanType from "components/Request/LoanType";
import InterestType from "components/Request/InterestType";
import LoanSetting from "components/Request/LoanSetting";
import Expenses from "components/Request/Expenses";

const Request = () => {
  const [showTab, setShowTab] = React.useState({
    LoanType: true,
    InterestType: false,
    LoanSetting: false,
    Expenses: false,
  });

  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Salary Configuration</h1>
          </div>
        </div>
        <div>
          <div>
            <div className="div">
              <div className={style.NavDiv}>
                <div className={style.fullCont2}>
                  <ul className={style.Nav}>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.LoanType ? style.active : ""
                        }`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            LoanType: true,
                            InterestType: false,
                            LoanSetting: false,
                            Expenses: false,
                          }))
                        }
                      >
                        <span>LoanType</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.InterestType ? style.active : ""
                        }`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            LoanType: false,
                            InterestType: true,
                            LoanSetting: false,
                            Expenses: false,
                          }))
                        }
                      >
                        <span>Interest Type</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.LoanSetting ? style.active : ""
                        }`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            LoanType: false,
                            InterestType: false,
                            LoanSetting: true,
                            Expenses: false,
                          }))
                        }
                      >
                        <span>Loan Setting</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.Expenses ? style.active : ""
                        }`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            LoanType: false,
                            InterestType: false,
                            LoanSetting: false,
                            Expenses: true,
                          }))
                        }
                      >
                        <span>Expenses</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3">
                {showTab.LoanType && <LoanType />}
                {showTab.InterestType && <InterestType />}
                {showTab.LoanSetting && <LoanSetting />}
                {showTab.Expenses && <Expenses />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
