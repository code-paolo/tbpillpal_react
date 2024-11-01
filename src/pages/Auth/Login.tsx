import { LoginForm } from "../../components/login-form";
import { UseHelmet } from "../../utils/Helmet/UseHelmet";
export default function Login() {
  return (
    <>
      <UseHelmet
        helmetTitle="Login | TBPillPal"
        helmetContent="Access the dashboard by logging in"
      />
      <div className="flex h-screen w-full items-center justify-center px-4">
        <img className="-z-10 h-screen w-screen absolute" src="/blob_bg.png" />
        <LoginForm />
      </div>
    </>
  );
}
