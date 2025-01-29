import React from 'react'

export default function Login() {
  return (
    <>
   <div className="Login">
  <div className="login">
    <h1>Login to Blood Link</h1>
    <p className="para1">Wellcome back! Please sign in to continue</p>
    <form className="form1" action="login.php">
      <div className="input">
        <label htmlFor="mail">Email address</label> <br />
        <input type="email" name="MyEmail" id="mail" />
      </div>
      <div className="btn">
        <button className="btn2">
          <span style={{ color: "White", fontWeight: "bold" }}>Continue</span>
        </button>
      </div>
    </form>
    <br />
    <div className="forgot">
      <span className="forgot">Don't have an account? </span>
      <a href="./signup.html" className="forgot forgot1">
        Sign up
      </a>
    </div>
  </div>
</div>

    </>
  )
}
