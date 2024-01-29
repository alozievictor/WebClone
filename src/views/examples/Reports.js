import style from "../../assets/css/salary.module.css";
import UserHeader from "components/Headers/UserHeader";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Reports</h1>
          </div>
        </div>
        <div className="row gy-3">
          {TEMPLATE.map((report, index) => {
            const { title, description, url } = report;
            return (
              <div
                className="col-11 col-md-6 col-lg-3 border card-stats mb-4 mb-xl-0 w-50 mx-4 my-4 px-3 py-4 rounded bg-white"
                key={index}
              >
                <Link to={url}>
                  <div>
                    <h2 className="text-capitalize mb-0 text-dark">{title}</h2>
                    <p className="font-weight-bold mb-0">{description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reports;

const TEMPLATE = [
  {
    title: "Head Count Report",
    description: "Showing reports of organization's heads count",
    url: "/admin/head_count",
  },
  {
    title: "Monthly Statutory Report",
    description: "Showing reports of organization's monthly statutory",
    url: "/admin/month_report",
  },
  {
    title: "Salary Report",
    description: "Showing reports of organization's salary records",
    url: "/admin/salary_report",
  },
  {
    title: "Expenditure Report",
    description: "Showing reports of organization's expenditure records",
    url: "/admin/expenditure_report",
  },
  {
    title: "Variation Report",
    description: "Showing reports of organization's salary variations",
    url: "/admin/variation_report",
  },
  {
    title: "Deduction Report",
    description: "Showing reports of organization's deduction records",
    url: "/admin/deduction_report",
  },
  {
    title: "Performance Report",
    description: "Showing reports of organization's employees performance",
    url: "/admin/performance_report",
  },
  {
    title: "On-Boarding/Off-Boarding Report",
    description: "Showing reports of all on-boarding and off-boarding",
    url: "/admin/boarding_report",
  },
  {
    title: "Attendance Report",
    description: "Showing reports of employee attendance",
    url: "/admin/attendance_report",
  },
];
