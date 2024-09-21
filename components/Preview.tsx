import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { WelcomeSettings, EmailSettings, SettingsType } from "@/types";

interface PreviewProps {
  welcomeSettings: WelcomeSettings;
  emailSettings: EmailSettings;
  activeSettings: SettingsType;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailError: string;
  setEmailError: React.Dispatch<React.SetStateAction<string>>;
}

export default function Preview({
  welcomeSettings,
  emailSettings,
  activeSettings,
  email,
  setEmail,
  emailError,
  setEmailError,
}: PreviewProps) {
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSettings.required && !email) {
      setEmailError("Email is required");
    } else if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
      console.log("Email submitted:", email);
    }
  };

  const renderPreview = () => {
    switch (activeSettings) {
      case "welcome":
        return (
          <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
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
          <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden p-8">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="w-full pr-[400px] pl-[400px]">
                <h2 className="text-3xl font-bold mb-4">
                  {emailSettings.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {emailSettings.description}
                </p>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="email"
                      placeholder="Type here..."
                      className="flex-grow"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={emailSettings.required}
                    />
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </form>
              </div>
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
    <div className="flex-1 bg-gray-100 overflow-hidden">
      <div className="h-full w-full flex items-center justify-center p-8">
        <div className="w-full h-full flex items-center justify-center">
          {renderPreview()}
        </div>
      </div>
    </div>
  );
}
