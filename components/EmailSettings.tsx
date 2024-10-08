import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface EmailSettings {
  title: string;
  description: string;
  required: boolean;
}

interface EmailSettingsProps {
  settings: EmailSettings;
  setSettings: React.Dispatch<React.SetStateAction<EmailSettings>>;
}

export default function EmailSettings({
  settings,
  setSettings,
}: EmailSettingsProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold mb-2">Email Settings</h3>
      <div>
        <Label htmlFor="emailTitle">Title</Label>
        <Input id="emailTitle" value={settings.title} />
      </div>
      <div>
        <Label htmlFor="emailDescription">Description</Label>
        <Textarea
          id="emailDescription"
          value={settings.description}
          onChange={(e) =>
            setSettings((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="required"
          checked={settings.required}
          onCheckedChange={(checked) =>
            setSettings((prev) => ({ ...prev, required: checked }))
          }
        />
        <Label htmlFor="required">Required</Label>
      </div>
    </div>
  );
}
