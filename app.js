import React from "react";
import "./App.css";
import image from "img.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="left-side-wrapper">
          <img src={image}></img>
        </div>
        <div className="right-side-wrapper">
          <form>
            <h1 style={{ fontSize: "40px" }}>Log In</h1>

            <div className="input-section1">
              <label>LogIn ID</label>
              <input
                type="text"
                id="input-box1"
                placeholder="Enter LogIn Id"
              ></input>
            </div>
            <div className="input-section2">
              <label>Password</label>
              <input
                type="password"
                id="input-box2"
                placeholder="Enter Password"
              ></input>
            </div>

            <div className="footer">
              <input type="checkbox" id="input-box3"></input>

              <p id="p1">Remember Me</p>

              <a href="" style={{ color: " #F78719", marginLeft: "120px" }}>
                {" "}
                <p id="p2">Change Password</p>
              </a>
            </div>

            <div className="footer2">
              <input type="checkbox" id="input-box4"></input>
              <p id="p3">
                Agree to
                <a href="" style={{ color: " #F78719" }}>
                  Terms & Conditions
                </a>{" "}
              </p>
            </div>

            <div className="footer3">
              <button
                type="Submit"
                style={{ color: "white", fontSize: "22px" }}
              >
                LogIn
              </button>

              <p id="p4">
                Don't have an account?
                <a href="" style={{ color: " #F78719" }}>
                  Register Here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
