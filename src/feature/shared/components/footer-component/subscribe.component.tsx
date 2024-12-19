import Title from "../title-component/title.component";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import Button from "../button-component/button.component";
import emailjs from "emailjs-com";
const EmailSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email should't be empty" })
    .email({ message: "invalid email" }),
});
type EmailType = z.infer<typeof EmailSchema>;
export default function Subscribe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailType>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  });
  const handleSubscribe = async (data: EmailType) => {
    try {
      const emailParams = {
        to_email: data.email,
        subject: "Thank you for subscribing!",
        message: "You have successfully subscribed to our newsletter.",
      };

      const result = await emailjs.send(
        "service_3z9biwb", // EmailJS template ID
        "template_yyw557g", // EmailJS service ID
        emailParams,
        "f52r2wTPNBr89kF5w" // EmailJS public key
      );

      console.log("Email sent successfully!", result);
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-around bg-black py-8 w-[90%] md:w-4/8 mx-auto px-6 rounded-lg">
      <Title
        font="font-extrabold"
        fontSize="text-3xl md:text-4xl lg:text-5xl"
        color="text-white"
        extraClasses="w-full md:w-3/5 lg:w-2/5"
      >
        {" "}
        STAY UPTO DATE ABOUT OUR LATEST OFFERS{" "}
      </Title>
      <form
        onSubmit={handleSubmit((d) => handleSubscribe(d))}
        className="flex flex-col gap-2"
      >
        <div>
          <label htmlFor="email">
            <input
              className={` focus:outline-none border-2 w-[17rem] md:w-80 bg-white px-10 py-3 ${
                errors.email ? "border-red-500" : " border-none"
              } rounded-full`}
              placeholder="Enter your email address"
              id="email"
              {...register("email")}
            />
          </label>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <Button
          backgroundColor="bg-white"
          color="text-black"
          extraClasses="rounded-full"
          width="w-[17rem] md:w-80"
          type="submit"
          label="Subscribe to Newsletter"
          onClick={() => {}}
        />
      </form>
    </div>
  );
}
