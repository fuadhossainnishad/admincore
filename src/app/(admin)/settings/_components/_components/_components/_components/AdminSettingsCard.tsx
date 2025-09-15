"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function AdminSettingsCard() {
  const [show, setShow] = useState(true);
  const [image, setImage] = useState<string | null>("/images/logo.png");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="border-[1px] border-[#E5E7EB] rounded-xl grow w-2/3 p-5 space-y-5">
      <section
        className={`flex items-center justify-between ${
          show && "border-b-[1px] border-b-[#E5E7EB] pb-5"
        }`}
      >
        <div className="flex items-center gap-4">
          <Image
            src="/icons/settings.svg"
            alt="settings"
            height={40}
            width={40}
          />
          <div>
            <h2 className="text-lg font-semibold leading-5">
              General App Settings
            </h2>
            <h2 className="text-xs font-normal leading-5">
              Configure basic application settings
            </h2>
          </div>
        </div>
        <Image
          src="/icons/downArrow2.svg"
          alt="settings"
          height={16}
          width={16}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
      </section>
      {show && (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <section className="flex gap-8 space-y-5">
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#374151]"
              >
                Application Name
              </label>
              <input
                type="text"
                id="name"
                className="appearance-none focus:outline-none border-[1px] border-[#E5E7EB] text-base font-normal rounded-lg w-full px-3 py-2"
                {...register("name", { required: "This field is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message as string}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="logo"
                className="text-sm font-medium text-[#374151]"
              >
                Application Logo
              </label>
              <div className="flex gap-2 items-center">
                <Image
                  src={image!}
                  alt="logo"
                  height={40}
                  width={40}
                  className="rounded-lg h-full"
                />
                <label
                  htmlFor="upload"
                  className="flex items-center gap-1 border border-[#E5E7EB] bg-[#F3E8FF] text-[#7E22CE] rounded-lg px-3 py-1 cursor-pointer hover:bg-[#E9D5FF] transition"
                >
                  <Image
                    src="/icons/upload.svg"
                    alt="upload icon"
                    height={12}
                    width={12}
                    className=""
                  />
                  <span className="text-sm font-medium">Upload New Logo</span>
                </label>

                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register("logo")}
                  onChange={handleImageChange}
                />
              </div>
              {errors.logo && (
                <span className="text-red-500 text-sm">
                  {errors.logo.message as string}
                </span>
              )}
            </div>
          </section>
          <section className="flex gap-8">
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="language"
                className="text-sm font-medium text-[#374151]"
              >
                Default Language
              </label>
              <div className="flex justify-between border-[1px] border-[#E5E7EB] rounded-lg px-3 py-2">
                <input
                  type="text"
                  id="language"
                  className="appearance-none focus:outline-none text-base font-normal rounded-lg"
                  {...register("language", {
                    required: "This field is required",
                  })}
                />
                <Image
                  src="/icons/downArrow3.svg"
                  alt="downArrow"
                  height={12}
                  width={12}
                  className="rounded-lg"
                />
              </div>
              {errors.logo && (
                <span className="text-red-500 text-sm">
                  {errors.logo.message as string}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="timeZone"
                className="text-sm font-medium text-[#374151]"
              >
                Time Zone
              </label>
              <div className="flex justify-between border-[1px] border-[#E5E7EB] rounded-lg px-3 py-2">
                <input
                  type="text"
                  id="timeZone"
                  className="appearance-none focus:outline-none text-base font-normal rounded-lg"
                  {...register("timeZone", {
                    required: "This field is required",
                  })}
                />
                <Image
                  src="/icons/downArrow3.svg"
                  alt="downArrow"
                  height={12}
                  width={12}
                  className="rounded-lg"
                />
              </div>
              {errors.logo && (
                <span className="text-red-500 text-sm">
                  {errors.logo.message as string}
                </span>
              )}
            </div>
          </section>
        </form>
      )}
    </main>
  );
}
