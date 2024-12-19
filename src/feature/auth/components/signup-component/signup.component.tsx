import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const SignupSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(3, "name should be at least 3 character"),
  email: z
    .string()
    .nonempty({ message: "email required" })
    .email({ message: "invalid email" }),
  password: z
    .string()
    .nonempty({ message: "password required" })
    .min(6, { message: "password should have at least 6 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
      message:
        "password should contain at least one uppercase letter(A-Z), one lowercase letter(a-z) and a digit(0-9)",
    }),
});
type SignupInput = z.infer<typeof SignupSchema>;

export function SignupForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });
  const handleSignup = (formData: SignupInput) => {
    console.log(formData);
  };
  return (
    <form
      className="form-style"
      onSubmit={handleSubmit((d) => handleSignup(d))}
    >
      <h1 className=" text-4xl font-semibold">Create an account</h1>
      <h4 className="text-base font-semibold">Enter your details below</h4>
      <div className="input-label-group">
        <input
          type="text"
          id="name"
          {...register("name")}
          className={errors.name ? "input-error" : "input-primary"}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div className="input-label-group">
        <input
          id="email"
          placeholder="Email"
          {...register("email")}
          className={errors.email ? "input-error" : "input-primary"}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="input-label-group">
        <input
          placeholder="Password"
          type="password"
          id="password"
          {...register("password")}
          className={errors.password ? "input-error" : "input-primary"}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <button type="submit" className="btn-submit">
        Create Account
      </button>
      <p>
        Already have an account?{" "}
        <span className="px-2 ">
          <a
            className="border-b-2 border-gray-500 cursor-pointer py-1"
            onClick={() => navigate("/login")}
          >
            Log in
          </a>
        </span>
      </p>
    </form>
  );
}
import authImage from "../../../../assets/auth-image.png";
import { CustomImage } from "../../../shared";
export default function Signup() {
  return (
    <div className="flex gap-6 w-full xl:w-4/5 my-10 mx-auto ">
      <CustomImage
        imageURL={authImage}
        extraClasses="w-4/5 hidden md:inline"
        size="w-full mx-2"
      />
      <span className="w-full">
        <SignupForm />
      </span>
    </div>
  );
}
