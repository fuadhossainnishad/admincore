/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Pencil } from "lucide-react";
import { toast } from "sonner";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { AxiosHeaders } from "axios";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    profile_picture_url: "/icons/profile.svg",
  });

  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  useEffect(() => {
    setIsClient(true);
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });
    const handleFetchProfile = async () => {
      try {
        const res = await apiCall(
          TMethods.get,
          apiList.getProfile,
          {},
          headers
        );
        if (res.success) {
          setProfile({
            first_name: res.data.first_name || "",
            last_name: res.data.last_name || "",
            email: res.data.email || "",
            phone_number: res.data.phone_number || "",
            profile_picture_url:
              res.data.profile_picture_url || "/icons/profile.svg",
          });
          toast.success("Profile data fetched successfully");
        } else {
          toast.error("Error fetching profile data");
        }
      } catch (err) {
        toast.error("Something went wrong.");
        console.error(err);
      }
    };
    handleFetchProfile();
  }, []);

  const handleProfileChange = (e: any) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: any) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleProfileImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setProfile({
        ...profile,
        profile_picture_url: URL.createObjectURL(file),
      });
    }
  };

  const handleSaveProfile = async () => {
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });
    try {
      const formData = new FormData();

      // Profile Data
      formData.append("first_name", profile.first_name);
      formData.append("last_name", profile.last_name);
      formData.append("email", profile.email);
      formData.append("phone_number", profile.phone_number);

      // Password Data
      if (passwords.new_password !== passwords.confirm_password) {
        toast.error("New password and confirm password do not match");
        return; // Prevent submitting if passwords don't match
      }

      if (passwords.new_password) {
        formData.append("current_password", passwords.current_password);
        formData.append("new_password", passwords.new_password);
      }

      // Profile image if selected
      if (selectedFile) {
        formData.append("profile_image", selectedFile);
      }
      console.log("Form Data:", formData);

      const res = await apiCall(
        TMethods.post,
        apiList.updateProfile,
        formData,
        headers,
        false,
        true
      );

      if (res.success) {
        toast.success("Profile updated successfully!");

        // Reset passwords
        setPasswords({
          current_password: "",
          new_password: "",
          confirm_password: "",
        });

        // Update profile and image
        setProfile({
          first_name: res.data.first_name || "",
          last_name: res.data.last_name || "",
          email: res.data.email || "",
          phone_number: res.data.phone_number || "",
          profile_picture_url:
            res.data.profile_picture_url || profile.profile_picture_url,
        });
      } else {
        toast.error("Failed to update profile");
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    }
  };

  if (!isClient) return null;
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="flex space-x-4">
          <div className="flex flex-col items-center text-center space-y-2 relative">
            {/* Profile Image */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={profile.profile_picture_url}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            <label
              htmlFor="profileImageUpload"
              className="absolute bottom-3 right-[calc(50%-48px)] z-20 bg-[#9333EA] p-1 rounded-full shadow-md cursor-pointer"
            >
              <Pencil className="text-white w-4 h-4" />
              <Input
                id="profileImageUpload"
                type="file"
                accept="image/*"
                placeholder=""
                className="hidden"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <h2 className="text-start text-[26px] font-semibold">
              {`${profile.first_name} ${profile.last_name}`}
            </h2>
            <p className="text-start text-xl">Admin</p>
          </div>
        </div>

        <div className="flex space-x-4 border-b border-gray-200 mt-4 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-2 font-medium cursor-pointer ${
              activeTab === "profile"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`pb-2 font-medium cursor-pointer ${
              activeTab === "password"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Change Password
          </button>
        </div>
      </div>

      {activeTab === "profile" && (
        <div className="mt-6 space-y-4 flex flex-col">
          <h3 className="text-center text-2xl font-medium">
            Edit Your Profile
          </h3>
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input
              value={profile.first_name}
              onChange={handleProfileChange}
              name="first_name"
              placeholder="Enter your first name"
              className="border-[1px] border-[#E5E7EB] appearance-none focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input
              value={profile.last_name}
              onChange={handleProfileChange}
              name="last_name"
              placeholder="Enter your last name"
              className="border-[1px] border-[#E5E7EB] appearance-none focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Enter your email"
              name="email"
              type="email"
              className="border-[1px] border-[#E5E7EB] appearance-none focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <Label>Contact No</Label>
            <Input
              value={profile.phone_number}
              onChange={handleProfileChange}
              name="phone_number"
              placeholder="+1234567890"
              className="border-[1px] border-[#E5E7EB] appearance-none focus:outline-none"
            />
          </div>

          <Button
            className="bg-[#9333EA] hover:bg-[#9333EA]/80 text-white w-fit self-center"
            onClick={handleSaveProfile}
          >
            Save Changes
          </Button>
        </div>
      )}

      {activeTab === "password" && (
        <div className="mt-6 space-y-4 flex flex-col">
          <h3 className="text-center text-2xl font-medium">Change Password</h3>
          <div className="space-y-2">
            <Label>Current Password</Label>
            <Input
              type="password"
              name="current_password"
              value={passwords.current_password}
              onChange={handlePasswordChange}
              className="border-[1px] border-[#E5E7EB] appearance-none focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <Label>New Password</Label>
            <Input
              type="password"
              name="new_password"
              value={passwords.new_password}
              onChange={handlePasswordChange}
              className="border-[1px] border-[#E5E7EB] appearance-none focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="confirm_password"
              value={passwords.confirm_password}
              onChange={handlePasswordChange}
              className="border-[1px] border-[#E5E7EB] appearance-none focus:outline-none"
            />
          </div>

          <Button
            className="bg-[#9333EA] hover:bg-[#9333EA]/80 text-white self-center"
            onClick={handleSaveProfile}
          >
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}
