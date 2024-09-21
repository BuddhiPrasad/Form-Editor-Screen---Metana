"use client";

import { useState } from "react";
import SettingsPanel from "./SettingsPanel";
import Preview from "./Preview";
import { WelcomeSettings, EmailSettings, SettingsType, Step } from "../types";

export default function FormEditor() {
  const [welcomeSettings, setWelcomeSettings] = useState<WelcomeSettings>({
    title: "Welcome to our form",
    description: "This is a description of the form",
    buttonText: "Let's Get Started",
    image: null,
    placement: "right",
  });

  const [emailSettings, setEmailSettings] = useState<EmailSettings>({
    title: "Enter Your Email",
    description: "Add your Email",
    required: false,
  });

  const [activeSettings, setActiveSettings] = useState<SettingsType>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [steps, setSteps] = useState<Step[]>([
    "Welcome screen",
    "Contact No",
    "Enter Your Email",
    "End screen",
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      <SettingsPanel
        welcomeSettings={welcomeSettings}
        setWelcomeSettings={setWelcomeSettings}
        emailSettings={emailSettings}
        setEmailSettings={setEmailSettings}
        activeSettings={activeSettings}
        setActiveSettings={setActiveSettings}
        steps={steps}
        setSteps={setSteps}
      />
      <Preview
        welcomeSettings={welcomeSettings}
        emailSettings={emailSettings}
        activeSettings={activeSettings}
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        setEmailError={setEmailError}
      />
    </div>
  );
}
