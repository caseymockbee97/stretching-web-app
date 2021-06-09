import React, { useEffect } from "react";
import { useStore } from "../Store/Store";

export default function SettingsView() {
  const setSelectedInput = useStore((state) => state.setSelectedInput);

  useEffect(() => {
    setSelectedInput(5);
  }, [setSelectedInput]);
  return <div>This is the settings view. It is not currently finished.</div>;
}
