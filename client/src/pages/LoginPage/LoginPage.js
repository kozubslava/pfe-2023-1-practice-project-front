import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo";
import styles from "./LoginPage.module.sass";
import { clearErrorSignUpAndLogin } from "../../actions/actionCreator";
import CONSTANTS from "../../constants";
import ButtonLogin from "../../components/ButtonLogin";

const LoginPage = (props) => (
  <div className={styles.mainContainer}>
    <div className={styles.loginContainer}>
      <div className={styles.headerSignUpPage}>
        <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt='logo' />
        <Link to='/registration' style={{ textDecoration: "none" }}>
          <ButtonLogin />
        </Link>
      </div>
      <div className={styles.loginFormContainer}>
        <LoginForm history={props.history} />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearErrorSignUpAndLogin()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
