/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import { Container } from "reactstrap";
// core components
import React from "react";
import Header from "components/Headers/Header.js";
import style from "../../assets/css/admin.module.css";
import Modal from "components/subComponent/Modal";
import Backdrop from "components/subComponent/Backdrop";
import NewModal from "components/subComponent/NewModal";
import RoleModal from "components/subComponent/Role";
import Blockdrop from "components/subComponent/Backdrop";
import DeleteModal from "components/subComponent/DeleteModal";
import BlockModal from "components/subComponent/Block";

const Admin = () => {
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState(false);
  const [isExist, setIsExist] = React.useState(false);
  const [isNew, setIsNew] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isBlock, setIsBlock] = React.useState(false);
  const [isRole, setIsRole] = React.useState(false);

  const HandleExist = () => {
    setIsExist(true);
    handleMenuOne();
    handleMenuTwo();
  };

  const HandleNew = () => {
    setIsNew(true);
    handleMenuOne();
    handleMenuTwo();
  };

  const HandleDelete = () => {
    setIsDelete(true);
    handleMenuOne();
    handleMenuTwo();
  };

  const HandleBlock = () => {
    setIsBlock(true);
    handleMenuOne();
    handleMenuTwo();
  };

  const HandleRole = () => {
    setIsRole(true);
    handleMenuOne();
    handleMenuTwo();
  };

  const closehandler = () => {
    setIsExist(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const actionOpen = () => {
    setAction(!action);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  const actionMenuOne = () => {
    // do something
    setAction(false);
  };

  const actionMenuTwo = () => {
    // do something
    setAction(false);
  };

  return (
    <>
      <Header />

      {/* Pagecontent */}

      <div className="container my-3 my-md-2">
        <div className="Container">
          <div className={style.BtnCont}>
            <div className={style.dropdown}>
              <button className={style.Btn} onClick={handleOpen}>
                Create Admin
              </button>
              {open ? (
                <ul className={style.menu}>
                  <li className="menu-item">
                    <button onClick={HandleExist}>
                      From Existing Employee
                    </button>
                  </li>
                  <li className="menu-item">
                    <button onClick={HandleNew}>New Employee</button>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className={style.AdminCard}>
            <div className={style.innerCard}>
              <div className={style.innerBtn}>
                <div className={style.dropdown}>
                  <button className={style.ActionBtn} onClick={actionOpen}>
                    <i className="fas fa-ellipsis-v" />
                  </button>
                  {action ? (
                    <ul className={style.menu}>
                      <li className="menu-item">
                        <button onClick={HandleBlock}>
                          Block Login Access
                        </button>
                      </li>
                      <li className="menu-item">
                        <button onClick={HandleRole}>Reassign Role</button>
                      </li>
                      <li className="menu-item">
                        <button onClick={HandleDelete}>Delete</button>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
              <div className={style.ImgCont}>
                <img
                  alt="HR image"
                  className={style.Img}
                  src={require("../../assets/img/theme/bootstrap.jpg")}
                />
              </div>
              <div className={style.cardDetails}>
                <div className={style.cardContent}>
                  <h3 style={{ color: "#00abb3" }}>HR Admin</h3>
                  <div>
                    <h5 style={{ color: "#bbb" }}>
                      Techvibes International Limited
                    </h5>
                    <h3 style={{ color: "#000" }}>Mr Jimmy</h3>
                    <h5 style={{ color: "#bbb" }}>09012345678</h5>
                    <h5 style={{ color: "#bbb" }}>SirJimmy456@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {isExist && (
              <Modal onCancel={closehandler} onConfirm={closehandler} />
            )}
            {isExist && <Backdrop onClick={closehandler} />}
          </div>
          <div>
            {isNew && (
              <NewModal onCancel={closehandler} onConfirm={closehandler} />
            )}
            {isNew && <Backdrop onClick={closehandler} />}
          </div>
          <div>
            {isDelete && (
              <DeleteModal onCancel={closehandler} onConfirm={closehandler} />
            )}
            {isDelete && <Backdrop onClick={closehandler} />}
          </div>
          <div>
            {isRole && (
              <RoleModal onCancel={closehandler} onConfirm={closehandler} />
            )}
            {isRole && <Backdrop onClick={closehandler} />}
          </div>
          <div>
            {isBlock && (
              <BlockModal onCancel={closehandler} onConfirm={closehandler} />
            )}
            {isBlock && <Backdrop onClick={closehandler} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
