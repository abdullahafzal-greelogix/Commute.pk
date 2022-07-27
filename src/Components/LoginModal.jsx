import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Google from "../Components/assets/google.png";
import Facebook from "../Components/assets/facebook.png";
import Apple from "../Components/assets/apple.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const LoginModal = (props) => {
  const [value, setValue] = useState();
  return (
    <div className="login-modal-compo">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="modal-heading">
            <h3>Login to Commute.pk</h3>
            <p>
              Not registered yet? <span>Create an account</span>
            </p>
          </div>
          <div className="modail-tabs">
            <Tabs>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>

              <TabPanel>
                <div className="modal-content-form">
                  <Form>
                    <div className="form-input">
                      <label>Email</label>
                      <br></br>
                      <input type="text" placeholder="abuzer@greelogix.com" />
                    </div>
                    <div className="form-input">
                      <label>Password</label>
                      <br></br>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <div className="">
                      {["Remember Me"].map((type) => (
                        <div key={`default-${type}`} className="forget-pas">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`${type}`}
                          />
                          <p>Forgot Password?</p>
                        </div>
                      ))}
                    </div>
                    <div className="login-button">
                      <Button varient="secondary" className="login-main-button">
                        Button
                      </Button>
                    </div>
                    <div className="sign-heading">
                      <h3>or Sign in with</h3>
                    </div>
                    <div className="modal-social-icon">
                      <img src={Google} />
                      <img src={Facebook} />
                      <img src={Apple} />
                    </div>
                  </Form>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="modal-content-form">
                  <Form>
                    <div className="form-input">
                      <label>Phone No.</label>
                      <br></br>
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                      />
                    </div>
                    <div className="">
                      {["Remember Me"].map((type) => (
                        <div key={`default-${type}`} className="forget-pas">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={` ${type}`}
                          />
                          <p>Forgot Password?</p>
                        </div>
                      ))}
                    </div>
                    <div className="login-button">
                      <Button
                        varient="secondary"
                        className="login-main-button"
                        // onClick={() => setModalShow(true)}
                        onClick={props.onClickLoginButton}
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
