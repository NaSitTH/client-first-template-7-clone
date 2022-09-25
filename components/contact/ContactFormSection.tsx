import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegCheckCircle, FaTimes } from "react-icons/fa";

type FormData = {
  firstName: string;
  lastName: string;
  mail: string;
  subject: string;
  message: string;
};

const ContactFormSection = () => {
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => closeSuccessHandler(), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess]);

  const toggleShowHandler = () => {
    setSuccess(!isSuccess);
  };

  const closeSuccessHandler = () => {
    setSuccess(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    return toggleShowHandler();
  });

  return (
    <section className="app-section-mt mx-auto max-w-3xl">
      <div
        className={`fixed bottom-0 right-10 z-30 flex justify-center ${
          isSuccess ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } duration-500 ease-in-out`}
      >
        <div className="mx-auto mb-12 flex h-12 items-center space-x-5 rounded-lg border-[1px] border-app-green-primary bg-app-green-secondary bg-opacity-40 px-4 text-green-600">
          <FaRegCheckCircle className="h-8 w-8 text-app-green-primary" />
          <p className="font-semibold tracking-widest">SEND SUCCESS!</p>
          <button onClick={closeSuccessHandler}>
            <FaTimes className="h-5 w-5 text-app-green-primary" />
          </button>
        </div>
      </div>
      <form
        className="flex flex-col space-y-8 text-paragraph text-app-primary-text"
        onSubmit={onSubmit}
      >
        <div className="flex space-x-8">
          <div className="flex w-full flex-col">
            <label className="text-xs font-bold leading-[1.2rem] opacity-60">
              First Name
            </label>
            <input
              className="mt-2 border-b-[1px] border-app-border outline-none"
              {...register("firstName", { required: true })}
            />
            {errors.firstName?.type === "required" && (
              <span className="mt-1 text-xs leading-[1.2rem] text-red-500">
                First name is required
              </span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="text-xs font-bold leading-[1.2rem] opacity-60">
              Last Name
            </label>
            <input
              className="mt-2 border-b-[1px] border-app-border outline-none"
              {...register("lastName", { required: true })}
            />
            {errors.lastName?.type === "required" && (
              <span className="mt-1 text-xs leading-[1.2rem] text-red-500">
                Last name is required
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="flex w-full flex-col">
            <label className="text-xs font-bold leading-[1.2rem] opacity-60">
              Email Id
            </label>
            <input
              className="mt-2 border-b-[1px] border-app-border outline-none"
              type="email"
              {...register("mail", { required: true })}
            />
            {errors.mail?.type === "required" && (
              <span className="mt-1 text-xs leading-[1.2rem] text-red-500">
                E-Mail is required
              </span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="text-xs font-bold leading-[1.2rem] opacity-60">
              Supject
            </label>
            <input
              className="mt-2 border-b-[1px] border-app-border outline-none"
              {...register("subject", { required: true })}
            />
            {errors.subject?.type === "required" && (
              <span className="mt-1 text-xs leading-[1.2rem] text-red-500">
                Subject is required
              </span>
            )}
          </div>
        </div>
        <div>
          <label className="text-xs font-bold leading-[1.2rem] opacity-60">
            Message
          </label>
          <textarea
            className="mt-2 h-40 w-full resize-none rounded border-[1px] border-app-border p-5 outline-none placeholder:text-paragraph placeholder:opacity-30"
            placeholder="Type your Messege"
            {...register("message", { minLength: 0, maxLength: 100 })}
          />
        </div>
        <div className="flex w-full justify-center">
          <button
            className="inline-block h-[51px] rounded bg-app-green-primary px-8 py-4 text-button font-medium text-white
          "
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};
export default ContactFormSection;
