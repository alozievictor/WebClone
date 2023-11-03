import React from "react";
import style from "../assets/css/login.module.css"

function Login() {
  const { useState } = React;
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [wemail, setwemail] = useState(false);
  const [wpass, setwpass] = useState(false);
  const [danger, setdanger] = useState(true);

  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");
  const [changeeye, setchangeeye] = useState(false);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinput((holdvalue) => {
      return {
        ...holdvalue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwemail(false);
    setwpass(false);
    setdanger(true);
    if (input.email.length < 1) {
      setdanger(false);
    }
    if (input.email == "") {
      setwemail(true);
    } else if (input.password == "") {
      setwpass(true);
    } else {
      alert("Loged in Successfully");
    }
  };
  const Eye = () => {
    if (pass == "password") {
      setpass("text");
      seteye(false);
      setchangeeye(true);
    } else {
      setpass("password");
      seteye(true);
      setchangeeye(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.image}>
          <img src="https://imgur.com/jgKj19A.png" />
          <h2>Sign in to Veritex</h2>
          <p className={style.headerText}>An automate staff management system for all business type </p>
        </div>
        <form onSubmit={submitForm}>
          <div className={style.input}>
            <span className={style.inputspan}>E-mail</span>
            <input
              className={` ${wemail ? "warning" : ""}`}
              type="text"
              name="email"
              value={input.email}
              onChange={inputEvent}
              placeholder="Company@email.com"
            />
            <p className={` ${danger ? "d-none" : ""}`}>
              <i className="fa fa-exclamation-circle"></i>Invalid Email Address
            </p>
          </div>

          <div className={style.input}>
            <span className={style.inputspan}>Password</span>
            <div className={style.inputDev}>
              <input
                className={` ${wpass ? "warning" : ""}`}
                
                type={pass}
                name="password"
                value={input.password}
                onChange={inputEvent}
                placeholder="Password"
              />
              <div className={style.eyeDiv}>
                <i
                  onClick={Eye}
                  className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </div>
              <p className={` ${danger ? "d-none" : ""}`}>
              <i className="fa fa-exclamation-circle"></i>Invalid Email Address
            </p>
            </div>
          </div>
          <div className={style.dont }>
            <a href="#">Forgot Password?</a>
          </div>
          <div className={style.button}>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
