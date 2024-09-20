import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { WelcomeSettings, EmailSettings, SettingsType } from "@/types";

interface PreviewProps {
  welcomeSettings: WelcomeSettings;
  emailSettings: EmailSettings;
  activeSettings: SettingsType;
}

export default function Preview({
  welcomeSettings,
  emailSettings,
  activeSettings,
}: PreviewProps) {
  const renderPreview = () => {
    switch (activeSettings) {
      case "welcome":
        return (
          <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              <div
                className={`md:w-1/2 p-8 flex flex-col justify-center ${
                  welcomeSettings.placement === "right"
                    ? "order-first"
                    : "order-last"
                }`}
              >
                <h2 className="text-3xl font-bold mb-4">
                  {welcomeSettings.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {welcomeSettings.description}
                </p>
                <div>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    {welcomeSettings.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">press Enter ↵</p>
                </div>
              </div>
              {welcomeSettings.image && (
                <div
                  className={`md:w-1/2 ${
                    welcomeSettings.placement === "right"
                      ? "order-last"
                      : "order-first"
                  }`}
                >
                  <img
                    src={welcomeSettings.image}
                    alt="Form background"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        );
      case "email":
        return (
          <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden p-8">
            <h2 className="text-3xl font-bold mb-4">{emailSettings.title}</h2>
            <p className="text-gray-600 mb-6">{emailSettings.description}</p>
            <div className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Type here..."
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center text-gray-500">
            Select a settings type to preview
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-white p-8 flex flex-col justify-center items-center overflow-hidden">
      {renderPreview()}
      <div className="mt-4 text-center text-sm text-gray-500">
        Powered by <span className="font-bold">Buildform</span>
      </div>
    </div>
  );
}
