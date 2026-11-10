import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") === "login" ? "login" : "signup";
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }

  function switchMode(newMode) {
    setError(null);
    setSearchParams({ mode: newMode });
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Registrarse" : "Ingresar"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email", { required: "Email requerido" })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Contraseña
              </label>
              <input
                {...register("password", {
                  required: "Contraseña requerida",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                  maxLength: {
                    value: 12,
                    message: "La contraseña no debe tener más de 12 caracteres",
                  },
                })}
                className="form-input"
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Registrarse" : "Ingresar"}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                ¿Ya tienes una cuenta?{" "}
                <span className="auth-link" onClick={() => switchMode("login")}>
                  Ingresar
                </span>
              </p>
            ) : (
              <p>
                ¿No tienes una cuenta?{" "}
                <span
                  className="auth-link"
                  onClick={() => switchMode("signup")}
                >
                  Registrarse
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
