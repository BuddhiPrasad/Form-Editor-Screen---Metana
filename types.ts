export type SettingsType = "welcome" | "email" | null;

export interface WelcomeSettings {
  title: string;
  description: string;
  buttonText: string;
  image: string | null;
  placement: "left" | "right";
}

export interface EmailSettings {
  title: string;
  description: string;
  required: boolean;
}
