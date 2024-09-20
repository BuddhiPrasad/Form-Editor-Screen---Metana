import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WelcomeSettings } from "@/types";

interface WelcomeSettingsProps {
  settings: WelcomeSettings;
  setSettings: React.Dispatch<React.SetStateAction<WelcomeSettings>>;
}

export default function WelcomeSettings({
  settings,
  setSettings,
}: WelcomeSettingsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSettings((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSettings((prev) => ({ ...prev, image: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={settings.title}
          onChange={(e) =>
            setSettings((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={settings.description}
          onChange={(e) =>
            setSettings((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
      <div>
        <Label htmlFor="buttonText">Button Text</Label>
        <Input
          id="buttonText"
          value={settings.buttonText}
          onChange={(e) =>
            setSettings((prev) => ({ ...prev, buttonText: e.target.value }))
          }
        />
      </div>
      <div>
        <Label htmlFor="image">Image</Label>
        <div className="mt-2">
          <input
            ref={fileInputRef}
            type="file"
            id="image-upload"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
          <Button
            onClick={() =>
              settings.image
                ? handleRemoveImage()
                : fileInputRef.current?.click()
            }
            variant={settings.image ? "destructive" : "secondary"}
            className="w-full"
          >
            {settings.image ? "Remove Image" : "Upload Image"}
          </Button>
        </div>
      </div>
      <div>
        <Label>Placement</Label>
        <div className="flex mt-2 space-x-2">
          <Button
            variant={settings.placement === "left" ? "default" : "outline"}
            onClick={() =>
              setSettings((prev) => ({ ...prev, placement: "left" }))
            }
          >
            Left
          </Button>
          <Button
            variant={settings.placement === "right" ? "default" : "outline"}
            onClick={() =>
              setSettings((prev) => ({ ...prev, placement: "right" }))
            }
          >
            Right
          </Button>
        </div>
      </div>
    </div>
  );
}
