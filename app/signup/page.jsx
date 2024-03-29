"use client"
export default function SignUp() {
    const handleSubmit = (e) => {
        //e.pr
    }
  return (
    <div className="d-flex align-items-center justify-content-center" style={{"height": "80vh"}}>
      <form on onSubmit={handleSubmit}>
        <div class="fs-3 my-3 text-center">
            Sign Up
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
