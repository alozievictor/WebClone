import React from "react";

// core components
import Header from "components/Headers/Header.js";
import SalarySteps from "components/SalayTable/SalarySteps";
import SalaryGrade from "components/SalayTable/SalaryGrade";
import SalaryStructure from "components/SalayTable/SalaryStructure";
import BasicSalary from "components/SalayTable/BasicSalary";
import AllowanceType from "../../components/SalayTable/Allowance/AllowanceType";
import UnitAllowance from "components/SalayTable/Allowance/UnitAllowance";
import AllowanceWxclusion from "components/SalayTable/Allowance/AllowanceWxclusion";
import NonTaxable from "components/SalayTable/Allowance/NonTaxable";
import EmployeeAllowance from "components/SalayTable/Allowance/EmployeeAllowance";
import DedicationType from "components/SalayTable/Deduction/DeductionType";
import DedicationAccount from "components/SalayTable/Deduction/DeductionAccount";
import UnitDedication from "components/SalayTable/Deduction/UnitDeduction";
import DeductionExclusion from "components/SalayTable/Deduction/DeductionExclusion"; 
import OverPayment from "components/SalayTable/Deduction/OverPayment";
// import DeactivateEmployee from "components/Approval/DeactivateEmployee";
import EmployeeDeduction from "components/SalayTable/Deduction/EmployeeDeduction";


// import Stepper from "hooks/stepper";
import style from "../../assets/css/salary.module.css";
import UserHeader from "components/Headers/UserHeader";

const Salary = () => {
  const [showTab, setShowTab] = React.useState({
    SalaryStructure: true,
    SalaryGrade: false,
    SalarySteps: false,
    BasicSalary: false,
    AllowanceType: false,
    UnitAllowance: false,
    AllowanceWxclusion:false,
    NonTaxable: false,
    EmployeeAllowance: false,
    DedicationType: false,
    DedicationAccount: false,
    UnitDedication: false,
    DeductionExclusion: false,
    OverPayment: false,
    EmployeeDeduction: false,
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
                          showTab.SalaryStructure ? style.active : ""
                        }`}
                        // className={`${showTab.SalaryStructure ? "active" : ""}`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: true,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Salary Structure</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.SalaryGrade ? style.active : ""}`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: true,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Salary Grade</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.SalarySteps ? style.active : ""}`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: true,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Salary Steps</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.BasicSalary ? style.active : ""}`}
                        id="tab-2"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: true,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Basic Salary</span>
                      </a>
                    </li>

                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.AllowanceType ? style.active : ""
                        }`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: true,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Allowance Type</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.UnitAllowance ? style.active : ""
                        }`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: true,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Unit Allowance</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.AllowanceWxclusion ? style.active : ""
                        }`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:true,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Allowance Exclusion</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.NonTaxable ? style.active : ""}`}
                        id="tab-2"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: true,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>NonTaxable</span>
                      </a>
                    </li>

                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.EmployeeAllowance ? style.active : ""
                        }`}
                        // className={`${showTab.SalaryStructure ? "active" : ""}`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: true,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Employee Allowance</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.DedicationType ? style.active : ""}`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: true,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Deduction Type</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.DedicationAccount ? style.active : ""}`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: true,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Dedication Account</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.UnitDedication ? style.active : ""}`}
                        id="tab-2"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: true,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>UnitDedication</span>
                      </a>
                    </li>

                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${
                          showTab.DeductionExclusion ? style.active : ""
                        }`}
                        // className={`${showTab.SalaryStructure ? "active" : ""}`}
                        id="tab-0"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: true,
                            OverPayment: false,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Deduction Exclusion</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.OverPayment ? style.active : ""}`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: true,
                            EmployeeDeduction: false,
                          }))
                        }
                      >
                        <span>Over Payment</span>
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a
                        role="button"
                        className={`${showTab.DeactivateEmployee ? style.active : ""}`}
                        id="tab-1"
                        data-toggle="tab"
                        href="#"
                        onClick={() =>
                          setShowTab((prev) => ({
                            ...prev,
                            SalaryStructure: false,
                            SalaryGrade: false,
                            SalarySteps: false,
                            BasicSalary: false,
                            AllowanceType: false,
                            UnitAllowance: false,
                            AllowanceWxclusion:false,
                            NonTaxable: false,
                            EmployeeAllowance: false,
                            DedicationType: false,
                            DedicationAccount: false,
                            UnitDedication: false,
                            DeductionExclusion: false,
                            OverPayment: false,
                            EmployeeDeduction: true,
                          }))
                        }
                      >
                        <span>Deactivate Employee</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 bg-white rounded">
                {showTab.SalaryStructure && <SalaryStructure />}
                {showTab.SalaryGrade && <SalaryGrade />}
                {showTab.SalarySteps && <SalarySteps />}
                {showTab.BasicSalary && <BasicSalary />}
                {showTab.AllowanceType && <AllowanceType />}
                {showTab.UnitAllowance && <UnitAllowance />}
                {showTab.AllowanceWxclusion && <AllowanceWxclusion />}
                {showTab.NonTaxable && <NonTaxable />}
                {showTab.EmployeeAllowance && <EmployeeAllowance />}
                {showTab.DedicationType && <DedicationType />}
                {showTab.DedicationAccount && <DedicationAccount />}
                {showTab.UnitDedication && <UnitDedication />}
                {showTab.DeductionExclusion && <DeductionExclusion />}
                {showTab.OverPayment && <OverPayment />}
                {showTab.EmployeeDeduction && <EmployeeDeduction />}
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
