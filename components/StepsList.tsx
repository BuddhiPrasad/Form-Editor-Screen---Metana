import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Step } from "@/types";

interface StepsListProps {
  steps: Step[];
  setSteps: React.Dispatch<React.SetStateAction<Step[]>>;
}

export default function StepsList({ steps, setSteps }: StepsListProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Steps</h3>
      <p className="text-sm text-gray-500 mb-2">
        The steps users will take to complete the form
      </p>
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-2 border-b"
        >
          <span>{step}</span>
        </div>
      ))}
      <Button
        variant="outline"
        className="mt-2 w-full"
        onClick={() => setSteps([...steps, "New Step"])}
      >
        <Plus className="h-4 w-4 mr-2" /> Add field
      </Button>
    </div>
  );
}
