import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  mail: string;
  subject: string;
  message: string;
};

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className="app-section-mt mx-auto max-w-3xl" id="form">
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
            {...register("message", { minLength: 5, maxLength: 100 })}
          />
        </div>
        <div className="flex w-full justify-center">
          <button
            className="inline-block h-[51px] rounded bg-app-green-primary px-8 py-4 text-button font-medium text-white
          "
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};
export default ContactFormSection;
