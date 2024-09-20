import { Button } from "@/components/ui/button";
import { X, Settings, Mail } from "lucide-react";
import WelcomeSettings from "./WelcomeSettings";
import EmailSettings from "./EmailSettings";
import {
  WelcomeSettings as WelcomeSettingsType,
  EmailSettings as EmailSettingsType,
  SettingsType,
} from "@/types";

interface SettingsPanelProps {
  welcomeSettings: WelcomeSettingsType;
  setWelcomeSettings: React.Dispatch<React.SetStateAction<WelcomeSettingsType>>;
  emailSettings: EmailSettingsType;
  setEmailSettings: React.Dispatch<React.SetStateAction<EmailSettingsType>>;
  activeSettings: SettingsType;
  setActiveSettings: React.Dispatch<React.SetStateAction<SettingsType>>;
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
    <div className="w-1/3 bg-white shadow-md overflow-y-auto flex flex-col">
      <div className="p-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveSettings(null)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {activeSettings === null ? (
          <div className="space-y-2">
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
          </div>
        ) : (
          renderSettingsPanel()
        )}
      </div>
      {activeSettings && (
        <div className="p-4 border-t">
          <div className="flex justify-between">
            <Button variant="default">Save</Button>
            <Button variant="ghost" className="text-red-500">
              Discard
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
