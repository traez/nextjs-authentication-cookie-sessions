"use client";
import { login } from "@/utils/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
    const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
    <form action={formAction}>
    <input type="text" name="username" required placeholder="username" />
    <input type="password" name="password" required placeholder="password" />
    <p>Default Username on initial Website build from server is <b>traez</b>.</p>
    <p>Type any random password of your choice and click the Login button</p>
    <button>Login</button>
    {state?.error && <p>{state.error}</p>}
  </form>
  )
}

export default LoginForm