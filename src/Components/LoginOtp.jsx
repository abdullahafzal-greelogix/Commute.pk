import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import OTP from "../Components/assets/otp.png";

const LoginOtp = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="otp-main">
            <div className="otp-image">
              <img src={OTP} />
            </div>
            <div className="otp-content">
              <h3>Verification Code</h3>
              <p>We’ve sent the code verification code to your mobile number</p>
            </div>
            <div className="otp-code">
              <div className="otp-box">
                <Form>
                  <input type="tel" placeholder="2" />
                  <input type="tel" placeholder="3" />
                  <input type="tel" placeholder="2" />
                  <input type="tel" placeholder="8" />
                </Form>
              </div>
            </div>
            <div className="resend-otp">
              <Button varient="secondary">Resend</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginOtp;
