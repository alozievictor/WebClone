import style from "../../assets/css/admin.module.css";
import React, { useEffect } from "react";

const DeleteModal = (props) => {

  const closeHandler = () => {
    props.onCancel();
  };

  const ConfirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className={style.modal2}>
      <div>
        
        <div className="my-1">
          <form className="container mt-2">
            <div>
              <h3 className="text-center text-dark">Are you Sure??</h3>
              <h5>This action will block this user's access, do you want to proceed?</h5>
            </div>
            <div className={style.ModalBtnCont2}>
              <div className={style.modalActionBtn}>
                <button className={style.CanBtn} onClick={ConfirmHandler}>
                  Cancel
                </button>
                <button className={style.ActBtn} onClick={closeHandler}>
                Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
