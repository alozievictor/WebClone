import React, { useState } from "react";
import ActivateEmployee from "components/Approval/ActivateEmployee";
import DeactivateEmployee from "components/Approval/DeactivateEmployee";
import EmployeeUpdate from "components/Approval/EmployeeUpdate";
import SalaryApproval from "components/Approval/SalaryApproval";
import HodApproval from "components/Approval/HodApproval";
import LeaveApproval from "components/Approval/LeaveApproval";
import ExpenditureApproval from "components/Approval/ExpenditureApproval";
import UserApproval from "components/Approval/UserApproval";

import style from "../../assets/css/salary.module.css";
import UserHeader from "components/Headers/UserHeader";


const Approval = () => {
  const [showTab, setShowTab] = React.useState({
    ActivateEmployee: true,
    DeactivateEmployee: false,
    EmployeeUpdate: false,
    SalaryApproval: false,
    LeaveApproval: false,
    ExpenditureApproval: false,
    UserApproval: false,
    HodApproval:false
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
                <div className={style.fullCont}>
                  <ul className={style.Nav}>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.ActivateEmployee ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: true,
                            DeactivateEmployee: false,
                            EmployeeUpdate: false,
                            SalaryApproval: false,
                            LeaveApproval: false,
                            ExpenditureApproval: false,
                            UserApproval: false,
                            HodApproval:false
                          }))
                        }
                      >
                        <span>Activate Employee</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.DeactivateEmployee ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: false,
                            DeactivateEmployee: true,
                            EmployeeUpdate: false,
                            SalaryApproval: false,
                            LeaveApproval: false,
                            ExpenditureApproval: false,
                            UserApproval: false,
                            HodApproval:false
                          }))
                        }
                      >
                        <span>Deactivate Employee</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.EmployeeUpdate ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: false,
                            DeactivateEmployee: false,
                            EmployeeUpdate: true,
                            SalaryApproval: false,
                            LeaveApproval: false,
                            ExpenditureApproval: false,
                            UserApproval: false,
                            HodApproval:false
                          }))
                        }
                      >
                        <span>Employee Update</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.SalaryApproval ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: false,
                            DeactivateEmployee: false,
                            EmployeeUpdate: false,
                            SalaryApproval: true,
                            LeaveApproval: false,
                            ExpenditureApproval: false,
                            UserApproval: false,
                            HodApproval:false
                          }))
                        }
                      >
                        <span>Salary Approval</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.LeaveApproval ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: false,
                            DeactivateEmployee: false,
                            EmployeeUpdate: false,
                            SalaryApproval: false,
                            LeaveApproval: true,
                            ExpenditureApproval: false,
                            UserApproval: false,
                            HodApproval:false
                          }))
                        }
                      >
                        <span>Found Approval</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.ExpenditureApproval ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: false,
                            DeactivateEmployee: false,
                            EmployeeUpdate: false,
                            SalaryApproval: false,
                            LeaveApproval: false,
                            ExpenditureApproval: true,
                            UserApproval: false,
                            HodApproval:false
                          }))
                        }
                      >
                        <span>Expenditure</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.UserApproval ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: false,
                            DeactivateEmployee: false,
                            EmployeeUpdate: false,
                            SalaryApproval: false,
                            LeaveApproval: false,
                            ExpenditureApproval: false,
                            UserApproval: true,
                            HodApproval:false
                          }))
                        }
                      >
                        <span>User Approval</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.HodApproval ? style.active : ""
                        }`}
                        
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            ActivateEmployee: false,
                            DeactivateEmployee: false,
                            EmployeeUpdate: false,
                            SalaryApproval: false,
                            LeaveApproval: false,
                            ExpenditureApproval: false,
                            UserApproval: false,
                            HodApproval:true
                            
                          }))
                        }
                      >
                        <span>Hod Approval</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 bg-white rounded">
                {showTab.ActivateEmployee && <ActivateEmployee />}
                {showTab.DeactivateEmployee && <DeactivateEmployee />}
                {showTab.EmployeeUpdate && <EmployeeUpdate />}
                {showTab.SalaryApproval && <SalaryApproval />}
                {showTab.LeaveApproval && <LeaveApproval />}
                {showTab.ExpenditureApproval && <ExpenditureApproval />}
                {showTab.UserApproval && <UserApproval />}
                {showTab.HodApproval && <HodApproval />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
