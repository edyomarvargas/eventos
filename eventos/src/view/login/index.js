function Login() {
  return (
    <div className="login-container d-flex align-items-center">
      <form className="mx-auto">
        <img
          className="mb-4"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </div>
  );
}

export default Login;
