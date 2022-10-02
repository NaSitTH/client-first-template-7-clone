import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SuccessPopup } from "../common/popup";

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
    <section className="app-section-mt mx-auto max-w-3xl lg:max-w-2xl md:max-w-xl sm:max-w-sm xs:w-17/20">
      <form
        className="flex flex-col space-y-8 text-paragraph text-app-primary-text"
        onSubmit={onSubmit}
      >
        <div className="flex space-x-8 sm:flex-col sm:space-x-0 sm:space-y-8">
          <div className="flex w-full flex-col">
            <label className="form-label">First Name</label>
            <input
              className="form-input"
              {...register("firstName", { required: true })}
            />
            {errors.firstName?.type === "required" && (
              <span className="mt-1 text-xs leading-[1.2rem] text-red-500">
                First name is required
              </span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="form-label">Last Name</label>
            <input
              className="form-input"
              {...register("lastName", { required: true })}
            />
            {errors.lastName?.type === "required" && (
              <span className="mt-1 text-xs leading-[1.2rem] text-red-500">
                Last name is required
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-8 sm:flex-col sm:space-x-0 sm:space-y-8">
          <div className="flex w-full flex-col">
            <label className="form-label">Email Id</label>
            <input
              className="form-input"
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
            <label className="form-label">Supject</label>
            <input
              className="form-input"
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
          <label className="form-label">Message</label>
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
      <SuccessPopup isDisplay={isSuccess} handleClose={closeSuccessHandler} />
    </section>
  );
};
export default ContactFormSection;
