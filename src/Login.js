import {useState} from "react";
import "./Login.css"
import {login} from "./hooks/useData";
function Login() {
    const [nom,setNom]=useState("james")
    const [password,setPassword]=useState("j")
    const [donne,setDonne]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        if ((nom==="")||(password==="")){
            setDonne("veuillez remplir tout les cases")
        }
        else {
            login(nom, password).then(async (res) => {
                if (await res.text() === "true") {
                    sessionStorage.setItem("nom",nom);
                    window.location.href="/liste";
                }
                else {
                    setDonne("Verifier que tout est correct")
                }
            });
        }
    }
  const handleChangeNom=(event)=>{
    setNom(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  return (

      <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
              <div className="authentication-inner">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="mb-2">Login</h4>
                            <form action="submit"  className="mb-3" onSubmit={handleSubmit}>
                                <div className="mb-3">

                                    <label htmlFor="email" className="form-label">Email or Username</label>
                                    <input className="form-control" value={nom} type="text"  onChange={handleChangeNom}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">password</label>

                                    <input className="form-control" value={password} type="password"  onChange={handleChangePassword}/>
                                </div>
                                <div className="mb-3">
                                    <button  className="btn btn-primary d-grid w-100">
                                        <i className="bi bi-door-open"></i>Login
                                    </button>
                                </div>
                            </form>
                          <p className="text">{donne}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
);
}
export default Login;