import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../types/AccountValidations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import Loading from "./Loader/Loading";
import { Eye, EyeClosed, Terminal } from "lucide-react";
import { useState } from "react";
import { auth } from "../../firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useVerifyLogin } from "../../hooks/Firebase/Account/Auth/useVerifyLogin";
import AlertBanner from "./AlertBanner";

export function LoginForm() {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  type formSchema = z.infer<typeof LoginSchema>;

  const LoginForm = useForm<formSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitLogin = async (values: any) => {
    try {
      if (await useVerifyLogin({ email: values.email })) {
        const user = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(user);
      } else {
        setError("Invalid email or password");
      }
    } catch (e: any) {
      if (e.code == "auth/invalid-credential") {
        setError("Invalid email or password");
      }
      console.log(e);
    } finally {
      LoginForm.reset();
    }
  };

  if (LoginForm.formState.isSubmitting) {
    return <Loading LoadingName="Logging in..." />;
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <img
          width={320}
          draggable="false"
          src="/pillpal_nobg.png"
          alt="TBPillPal Logo"
        />
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      {error ? (
        <div className="m-2">
          <AlertBanner
            alertType="destructive"
            alertTitle="Sign in Error"
            AlertIcon={Terminal}
            alertDescription="Invalid email or password"
          />
        </div>
      ) : (
        ""
      )}

      <CardContent>
        <Form {...LoginForm}>
          <form onSubmit={LoginForm.handleSubmit(submitLogin)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  name="email"
                  control={LoginForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <Input {...field} />
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  name="password"
                  control={LoginForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between">
                        <FormLabel>Password</FormLabel>
                        <a
                          onClick={() => navigate("/forgot-password")}
                          className="underline text-xs "
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <div className="relative">
                        <Input
                          type={togglePassword ? "text" : "password"}
                          {...field}
                        />
                        {togglePassword ? (
                          <Eye
                            onClick={() => setTogglePassword(!togglePassword)}
                            className="absolute right-2 top-2 h-5 text-pillpalColorMain"
                          />
                        ) : (
                          <EyeClosed
                            className="absolute right-2 top-2 h-5 text-pillpalColorMain"
                            onClick={() => setTogglePassword(!togglePassword)}
                          />
                        )}
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="bg-pillpalColorMain hover:bg-pillpalColorMain/90 text-pillPalColorAccent w-full"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
