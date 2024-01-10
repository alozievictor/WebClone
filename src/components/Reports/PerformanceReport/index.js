import React, { useState } from "react";
import UserHeader from "components/Headers/UserHeader";
import style from "../../../assets/css/salary.module.css";

import AppraisalReport from "./AppraisalReport";
import CommentReport from "./CommentReport";
import EmployeeScoreCard from "./EmployeeScoreCard";
import ProjectTaskReport from "./ProjectTaskReport";
import { Link } from "react-router-dom";

const PerformanceReport = () => {
    const [showTab, setShowTab] = useState({
        AppraisalReport: true,
        CommentReport: false,
        EmployeeScoreCard: false,
        ProjectTaskReport: false,
      });
    return (
        <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Performance Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Performance
              </li>
            </ol>
          </nav>
        </div>
        <div className="div">
          <div className={style.NavDiv}>
            <div className={style.fullCont3}>
              <ul className={style.Nav3}>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.AppraisalReport ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        AppraisalReport: true,
                        CommentReport: false,
                        EmployeeScoreCard: false,
                        ProjectTaskReport: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Performance Report</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.CommentReport ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        AppraisalReport: false,
                        CommentReport: true,
                        EmployeeScoreCard: false,
                        ProjectTaskReport: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Appraisal Comment Report</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.EmployeeScoreCard ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        AppraisalReport: false,
                        CommentReport: false,
                        EmployeeScoreCard: true,
                        ProjectTaskReport: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Employee Score Card</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ProjectTaskReport ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        AppraisalReport: false,
                        CommentReport: false,
                        EmployeeScoreCard: false,
                        ProjectTaskReport: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>Project/Task Report</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.AppraisalReport && <AppraisalReport />}
            {showTab.CommentReport && <CommentReport />}
            {showTab.EmployeeScoreCard && <EmployeeScoreCard />}
            {showTab.ProjectTaskReport && <ProjectTaskReport />}
          </div>
        </div>
      </div>
    </div>
    )
}

export default PerformanceReport;