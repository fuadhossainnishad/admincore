"use client";
import React, { useEffect, useState } from "react";
import AdminSettingsCard from "./_components/AdminSettingsCard";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { AxiosHeaders } from "axios";
import { toast } from "sonner";
import Image from "next/image";

export interface ISettings {
  application_name: string;
  application_logo_url: string;
  default_language: string;
  timezone: string;
}

export default function SettingsPage() {
  const [value, setValue] = useState<ISettings>({
    application_name: "",
    application_logo_url: "",
    default_language: "",
    timezone: "",
  });

  const [languages, setLanguages] = useState<{ code: string; name: string }[]>(
    []
  );
  const [timezones, setTimezones] = useState<string[]>([]);

  const token = sessionStorage.getItem("token");
  const headers = AxiosHeaders.from({
    Authorization: `Bearer ${token}`,
  });

  const handleFetch = async () => {
    try {
      const res = await apiCall(TMethods.get, apiList.settings, {}, headers);
      if (res.success) {
        setValue(res.data);
        toast.success("Settings data fetched successfully");
      } else {
        toast.error("Error fetching settings data");
      }

      const languagesRes = await apiCall(
        TMethods.get,
        apiList.languages,
        {},
        headers
      );
      if (languagesRes.success) {
        setLanguages(languagesRes.data);
      } else {
        toast.error("Error fetching languages");
      }

      const timezonesRes = await apiCall(
        TMethods.get,
        apiList.timezone,
        {},
        headers
      );
      if (timezonesRes.success) {
        setTimezones(timezonesRes.data);
      } else {
        toast.error("Error fetching timezones");
      }
    } catch (err) {
      toast.error("Error fetching data");
      console.error(err);
    }
  };

  const handleUpdate = async (updatedData: ISettings) => {
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });

    const formData = new FormData();
    formData.append("application_name", updatedData.application_name);
    formData.append("application_logo_url", updatedData.application_logo_url);
    formData.append("default_language", updatedData.default_language);
    formData.append("timezone", updatedData.timezone);
    console.log("FormData", formData);

    try {
      const res = await apiCall(
        TMethods.put,
        apiList.settings,
        formData,
        headers,
        false,
        true
      );
      if (res.success) {
        setValue(res.data);
        toast.success("Settings data updated successfully");
      } else {
        toast.error("Error updating settings data");
      }
    } catch (err) {
      toast.error("Error updating settings");
      console.error(err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="flex flex-col justify-between h-full">
      <section className="space-y-10">
        <section className="text-[#111827] space-y-2">
          <h1 className="font-bold text-3xl leading-9">Admin Settings</h1>
          <p className="font-normal text-base leading-6">
            Configure application settings and preferences
          </p>
        </section>
        <AdminSettingsCard
          settingsData={value}
          languages={languages}
          timezones={timezones}
          onSave={handleUpdate}
        />
      </section>

      <section className="flex w-full justify-center items-center gap-4">
        <button
          type="reset"
          className="cursor-pointer px-5 py-3 rounded-lg text-black border border-[#D1D5DB]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer bg-[#9333EA] px-5 py-3 rounded-lg text-white flex items-center gap-1"
          // onClick={handleUpdate}
        >
          <Image src="/icons/save.svg" alt="settings" height={14} width={14} />{" "}
          Save Settings
        </button>
      </section>
    </main>
  );
}
