import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AuthUser } from "../../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginResponse } from "../../models";
import { CustomImage } from "../../../shared";

const LoginSchema = z.object({
  username: z.string().nonempty({ message: "username is required" }),
  password: z
    .string()
    .nonempty({ message: "password is required" })
    .min(6, { message: "password should have at least 6 characters" }),
});
type LoginInput = z.infer<typeof LoginSchema>;
export function LoginForm() {
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const loginMutation = useMutation({
    mutationFn: (data: LoginInput) =>
      AuthUser(data.username, data.password, 30),
    onSuccess: (response) => {
      console.log(response.data);
      queryClient.setQueryData(["currentUser"], response.data);
    },
    onError: (error: AxiosError<LoginResponse>) => {
      const serverMessage = error.response?.data?.message;
      console.log(serverMessage);

      setError("root", { type: "server", message: serverMessage });
    },
  });
  const authUser = (data: LoginInput) => {
    loginMutation.mutate(data);
  };
  return (
    <form className="form-style " onSubmit={handleSubmit((d) => authUser(d))}>
      <h1 className=" text-4xl font-semibold">Log in to StyleX</h1>
      <h4 className="text-base font-semibold">Enter your details below</h4>
      <div className="input-label-group">
        <input
          id="username"
          {...register("username")}
          className={errors.username ? "input-error" : "input-primary"}
          placeholder="Email"
        />
        {errors?.username?.message && (
          <p className="error">{errors.username.message}</p>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className={errors.password ? "input-error" : "input-primary"}
          id="password"
          {...register("password")}
        />
        {errors?.password?.message && (
          <p className="error">{errors.password.message}</p>
        )}
      </div>
      {errors.root && <p className="error">{errors.root.message}</p>}
      <button className="btn-submit" type="submit">
        Login
      </button>
    </form>
  );
}
import authImage from "../../../../assets/auth-image.png";
export default function Login() {
  return (
    <div className="flex gap-6 w-full xl:w-4/5 my-10 mx-auto ">
      <CustomImage
        imageURL={authImage}
        extraClasses="w-4/5 hidden md:inline"
        size="w-full mx-2"
      />
      <span className="w-full">
        <LoginForm />
      </span>
    </div>
  );
}
