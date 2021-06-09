import React, { useEffect } from "react";
import { useStore } from "../Store/Store";
export default function CreateView() {
  const setSelectedInput = useStore((state) => state.setSelectedInput);

  useEffect(() => {
    setSelectedInput(4);
  }, [setSelectedInput]);
  return <div>This is the create view. It is not currently finished.</div>;
}
