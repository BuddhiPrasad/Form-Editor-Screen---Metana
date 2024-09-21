import { Button } from "@/components/ui/button";
import { X, Settings, Mail, Trash } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WelcomeSettings from "./WelcomeSettings";
import EmailSettings from "./EmailSettings";
import {
  WelcomeSettings as WelcomeSettingsType,
  EmailSettings as EmailSettingsType,
  SettingsType,
  Step,
} from "@/types";

interface SettingsPanelProps {
  welcomeSettings: WelcomeSettingsType;
  setWelcomeSettings: React.Dispatch<React.SetStateAction<WelcomeSettingsType>>;
  emailSettings: EmailSettingsType;
  setEmailSettings: React.Dispatch<React.SetStateAction<EmailSettingsType>>;
  activeSettings: SettingsType;
  setActiveSettings: React.Dispatch<React.SetStateAction<SettingsType>>;
  steps: Step[];
  setSteps: React.Dispatch<React.SetStateAction<Step[]>>;
}

export default function SettingsPanel({
  welcomeSettings,
  setWelcomeSettings,
  emailSettings,
  setEmailSettings,
  activeSettings,
  setActiveSettings,
}: SettingsPanelProps) {
  const renderSettingsPanel = () => {
    switch (activeSettings) {
      case "welcome":
        return (
          <WelcomeSettings
            settings={welcomeSettings}
            setSettings={setWelcomeSettings}
          />
        );
      case "email":
        return (
          <EmailSettings
            settings={emailSettings}
            setSettings={setEmailSettings}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-1/5 bg-white shadow-md overflow-y-auto flex flex-col">
      <div className="p-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Form Builder</h2>
          {activeSettings && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveSettings(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="p-2 border-t flex justify-between" />

        <div className="space-y-4">
          {activeSettings === null ? (
            <>
              <Tabs defaultValue="1" className="mb-4">
                <TabsList>
                  <TabsTrigger value="1">Content</TabsTrigger>
                  <TabsTrigger value="2">Design</TabsTrigger>
                  <TabsTrigger value="3">Share</TabsTrigger>
                  <TabsTrigger value="4">Replies</TabsTrigger>
                </TabsList>
              </Tabs>
              <div>
                <h3 className="font-semibold mb-2">Steps</h3>
                <p className="text-sm text-gray-500 mb-2">
                  The steps users will take to complete the form
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveSettings("welcome")}
                className="w-full flex items-center justify-start space-x-2"
              >
                <Settings className="h-4 w-4" />
                <span>Welcome</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveSettings("email")}
                className="w-full flex items-center justify-start space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </Button>
            </>
          ) : (
            renderSettingsPanel()
          )}
        </div>
      </div>
      <div className="p-4 border-t flex justify-between">
        <Button variant="default" className="bg-black text-white">
          Save & Publish
        </Button>
        <Button variant="ghost" className="text-red-500">
          <Trash className="h-4 w-4 mr-2" /> Delete
        </Button>
      </div>
    </div>
  );
}
