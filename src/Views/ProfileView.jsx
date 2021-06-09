import React, { useEffect } from "react";
import ProfileComponent from "../Components/ProfileComponent";
import StretchListComponent from "../Components/StretchListComponent";
import { useStore } from "../Store/Store";

export default function ProfileView() {
  const listOfStretches = useStore((state) => state.listOfStretches);
  const setSelectedInput = useStore((state) => state.setSelectedInput);

  useEffect(() => {
    setSelectedInput(2);
  }, [setSelectedInput]);

  return (
    <div>
      <ProfileComponent />
      {listOfStretches && (
        <StretchListComponent stretchList={listOfStretches} />
      )}
    </div>
  );
}
