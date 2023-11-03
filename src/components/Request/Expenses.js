import React from "react";
import style from "../../assets/css/salary.module.css";
import ExpenseHeader from "components/ExpressComp/ExpenseHeader";
import ExpenseLimit from "components/ExpressComp/ExpenseLimit";

function Expenses() {
  const [showTab, setShowTab] = React.useState({
    ExpenseHeader: true,
    ExpenseLimit: false,
  });

  return (
    <div className={style.cont}>
      <div className="container">
        <div className="div">
          <div className={style.NavDiv}>
            <div className={style.ExpenseNav}>
              <ul className={style.Nav}>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ExpenseHeader ? style.active2 : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ExpenseHeader: true,
                        ExpenseLimit: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Expense Header</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.ExpenseLimit ? style.active2 : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ExpenseHeader: false,
                        ExpenseLimit: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>Expense Limit</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.ExpenseHeader && <ExpenseHeader />}
            {showTab.ExpenseLimit && <ExpenseLimit />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
