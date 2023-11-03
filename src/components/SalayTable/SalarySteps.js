import React from "react";
import style from "../../assets/css/step.module.css";
import Backdrop from "components/subComponent/Backdrop";
import StepsModal from "components/subComponent/stepsModal";

import { Card } from "reactstrap";

function SalarySteps() {
  const [action, setAction] = React.useState(false); 
  const [isEdit, setIsEdit] = React.useState(false);


  const actionOpen = () => {
    setAction(!action);
  };

  const HandleEdit = () => {
    setIsEdit(true);
    handleMenuTwo();
  };

  const handleMenuTwo = () => {
    setAction(false);
  };

 

  const closehandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="">
      {/* Table */}
      <div className="">
        <div className="">
          <Card className="shadow">
            <div class={style.stepCont}>
              <div className={style.Div}>
                <div className={style.innerBtn}>
                  <div className={style.dropdown}>
                    <button className={style.ActionBtn} onClick={actionOpen}>
                      <i className="fas fa-ellipsis-v" />
                    </button>
                    {action ? (
                      <ul className={style.menu}>
                        <li>
                          <button className={style.menuItem} onClick={HandleEdit}>Edit</button>
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </div>
                <div className={style.cont}>
                  <div className={style.contContent}>
                    <p className={style.text}>2 steps</p>
                    <div>
                    <p className={style.status}>
                        <i className={style.icon} class="fa-solid fa-circle" data-v-6cf4ddcb=""></i>
                        {/* <svg className={style.icon} class="svg-inline--fa fa-circle" data-v-6cf4ddcb="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> */}
                         Active 
                    </p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div>
              {isEdit && (
                <StepsModal onCancel={closehandler} onConfirm={closehandler} />
              )}
              {isEdit && <Backdrop onClick={closehandler} />}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SalarySteps;
