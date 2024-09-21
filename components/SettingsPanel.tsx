import { Button } from "@/components/ui/button";
import { X, Settings, Mail, Trash } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WelcomeSettings from "./WelcomeSettings";
import EmailSettings from "./EmailSettings";
import StepsList from "./StepsList";
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
  steps,
  setSteps,
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
    <div className="w-1/3 bg-white shadow-md overflow-y-auto flex flex-col">
      <div className="p-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Settings</h2>
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
        <Tabs defaultValue="1" className="mb-4">
          <TabsList>
            <TabsTrigger value="1">1</TabsTrigger>
            <TabsTrigger value="2">2</TabsTrigger>
            <TabsTrigger value="3">3</TabsTrigger>
            <TabsTrigger value="4">4</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="space-y-4">
          {activeSettings === null ? (
            <>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveSettings("welcome")}
                className="w-full flex items-center justify-start space-x-2"
              >
                <Settings className="h-4 w-4" />
                <span>Welcome Settings</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveSettings("email")}
                className="w-full flex items-center justify-start space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email Settings</span>
              </Button>
            </>
          ) : (
            renderSettingsPanel()
          )}
          <StepsList steps={steps} setSteps={setSteps} />
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
