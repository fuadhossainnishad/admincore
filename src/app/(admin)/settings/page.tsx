"use client";
import React, { useState, useEffect } from "react";
import AdminSettingsCard from "./_components/AdminSettingsCard";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { AxiosHeaders } from "axios";
import { toast } from "sonner";
import Image from "next/image";

export interface ISettings {
  application_name: string;
  application_logo_url: string; // URL of the logo
  default_language: string;
  timezone: string;
  logoFile?: File | null; // Optional logo file (if a new file is uploaded)
}

export default function SettingsPage() {
  const [value, setValue] = useState<ISettings>({
    application_name: "",
    application_logo_url: "",
    default_language: "",
    timezone: "",
    logoFile: null, // Initially no file selected
  });

  const [languages, setLanguages] = useState<{ code: string; name: string }[]>([]);
  const [timezones, setTimezones] = useState<string[]>([]);

  // Handle Update function to update the settings
  const handleUpdate = async (
    updatedData: ISettings,
    logoFile: File | null
  ) => {
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });

    const formData = new FormData();

    // Append basic application data
    formData.append("application_name", updatedData.application_name);
    formData.append("default_language", updatedData.default_language);
    formData.append("timezone", updatedData.timezone);

    // If a new logo file is selected, append it to FormData
    if (logoFile) {
      formData.append("application_logo_url", logoFile);
    } else {
      // Use the existing logo URL if no new file is selected
      formData.append("application_logo_url", updatedData.application_logo_url);
    }

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

  // Fetch data when the component mounts
  useEffect(() => {
    const handleFetch = async () => {
      const token = sessionStorage.getItem("token");
      const headers = AxiosHeaders.from({
        Authorization: `Bearer ${token}`,
      });

      try {
        const res = await apiCall(TMethods.get, apiList.settings, {}, headers);
        if (res.success) {
          setValue(res.data); // Set the received data (including application_logo_url as a string)
          toast.success("Settings data fetched successfully");
        } else {
          toast.error("Error fetching settings data");
        }

        // Fetch languages and timezones as before
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
          onClick={() => handleUpdate(value, value.logoFile!)} // Pass updated data and logoFile
        >
          <Image src="/icons/save.svg" alt="settings" height={14} width={14} />
          Save Settings
        </button>
      </section>
    </main>
  );
}
