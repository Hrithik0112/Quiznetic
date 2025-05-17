import { BrainCircuit } from "lucide-react";
import React from "react";

const AppIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <BrainCircuit />
      <span className="font-mono font-medium">Quiznetic</span>
    </div>
  );
};

export default AppIcon;
