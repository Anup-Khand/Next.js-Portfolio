"use client";
import Input from "@/components/Input";
import React from "react";

const Contact = () => {
  const fontsize = "text-2xl";

  const Formdetails = [
    {
      text: "Name",
      type: "text",
      color: "red",
    },
    {
      text: "Email",
      type: "email",
      color: "blue",
    },
    {
      text: "Message",
      type: "text",
      color: "purple",
    },
  ];

  return (
    <div className="pt-12 -pb-10 px-8">
      <div className="heading mb-4">
        <h1 className=" font-black text-3xl relative about">Contact</h1>
        <div className="line max-w-[100px] "></div>
      </div>
      <div className="bg-[rgb(239,243,248)] p-6 rounded-2xl">
        <div className="flex flex-col gap-2 mb-6">
          <span className={`${fontsize}`}>
            I'm always open to discussing produuct
          </span>
          <span className={`font-extrabold ${fontsize}`}>
            design work or partnerships.
          </span>
        </div>
        <form className="flex  flex-col gap-10">
          {Formdetails.map((form, index) => (
            <div key={index} className="flex flex-col gap-1 ">
              <span style={{ color: form.color }}>{form.text} *</span>
              <Input
                style={{ borderColor: form.color }}
                type={form.type}
                name={form.text}
                {...{ [form.text]: true }}
              />
            </div>
          ))}
          <button type="submit" className="self-start border px-4 py-2 border-black rounded-lg -mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
