import React from "react";

const Contact = () => {
  const formSubmitHandler = (formData) => {
    // console.log(formData.entries())
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h2 className="text-4xl text-center mb-5">Contact Us</h2>

      <form action={formSubmitHandler} className="flex flex-col w-120 gap-5">
        {/* Name */}
        <input
          className="bg-gray-900 active:outline-1 active:outline-emerald-200 hover:border hover:border-emerald-100 px-1 py-2 rounded-lg"
          type="text"
          required
          autoComplete="false"
          placeholder="Enter Your Name"
          name="username"
        />
        {/* Email */}
        <input
          className="bg-gray-900 active:outline-1 active:outline-emerald-200 hover:border hover:border-emerald-100 px-1 py-2 rounded-lg"
          type="email"
          placeholder="Enter your Email"
          name="email"
          required
          autoComplete="false"
        />
        {/* Textarea */}
        <textarea
          className="bg-gray-900 active:outline-1 active:outline-emerald-200 hover:border hover:border-emerald-100 px-1 py-2 rounded-lg"
          name="message"
          id=""
          rows={10}
          placeholder="Enter Your Message"
          required
          autoComplete="false"
        ></textarea>

        <button
          type="submit"
          className="bg-emerald-500 py-2 rounded-full text-xl font-semibold hover:text-emerald-500 hover:bg-emerald-100"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
