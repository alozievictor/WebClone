import React, { useState } from "react";

import style from "../../assets/css/salary.module.css";
import UserHeader from "components/Headers/UserHeader";

import ExpenditureType from "components/expenditure/ExpenditureType";
import ExpenditureRegister from "components/expenditure/ExpenditureRegister";
import ExpenditureUnapproval from "components/expenditure/ExpenditureUnapproval";
import ExpenditureApproval from "components/expenditure/ExpenditureApproval";
import ExpenditureDecline from "components/expenditure/ExpenditureDecline";

const Expenditure = () => {
  const [showTab, setShowTab] = React.useState({
    ExpenditureType: true,
    ExpenditureRegister: false,
    ExpenditureUnapproval: false,
    ExpenditureApproval: false,
    ExpenditureDecline: false,
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
        <div className="div">
          <div className={style.NavDiv}>
            <div className={style.fullCont3}>
              <ul className={style.Nav3}>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ExpenditureType ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ExpenditureType: true,
                        ExpenditureRegister: false,
                        ExpenditureUnapproval: false,
                        ExpenditureApproval: false,
                        ExpenditureDecline: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Expenditure-Type</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ExpenditureRegister ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ExpenditureType: false,
                        ExpenditureRegister: true,
                        ExpenditureUnapproval: false,
                        ExpenditureApproval: false,
                        ExpenditureDecline: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Expenditure pay Register</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ExpenditureUnapproval ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ExpenditureType: false,
                        ExpenditureRegister: false,
                        ExpenditureUnapproval: true,
                        ExpenditureApproval: false,
                        ExpenditureDecline: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Unapproved-Expenditure</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ExpenditureApproval ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ExpenditureType: false,
                        ExpenditureRegister: false,
                        ExpenditureUnapproval: false,
                        ExpenditureApproval: true,
                        ExpenditureDecline: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Approved-Expenditure</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ExpenditureDecline ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ExpenditureType: false,
                        ExpenditureRegister: false,
                        ExpenditureUnapproval: false,
                        ExpenditureApproval: false,
                        ExpenditureDecline: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>Declined Expenditure</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.ExpenditureType && <ExpenditureType />}
            {showTab.ExpenditureRegister && <ExpenditureRegister />}
            {showTab.ExpenditureUnapproval && <ExpenditureUnapproval />}
            {showTab.ExpenditureApproval && <ExpenditureApproval />}
            {showTab.ExpenditureDecline && <ExpenditureDecline />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenditure;
