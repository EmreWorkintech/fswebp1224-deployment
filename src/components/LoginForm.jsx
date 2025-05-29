import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultState: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });
  const { login } = useContext(AuthContext);
  const { push } = useHistory();

  const submitFn = (data) => {
    axios
      .post("https://nextgen-project.onrender.com/api/s11d2/login", data)
      .then((response) => {
        login(response.data);
        push("/friends");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN by WiT</h1>
        <form onSubmit={handleSubmit(submitFn)}>
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Ama adın ne?" })}
            />
            {errors?.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Şifre girmeyi unutmayın!",
              })}
            />
            {errors?.email && <p>{errors.email.message}</p>}
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
