import React from "react";
import ProfileComponent from "../Components/ProfileComponent";
import StretchListComponent from "../Components/StretchListComponent";
import { useStore } from "../Store/Store";

export default function ProfileView() {
  const listOfStretches = useStore((state) => state.listOfStretches);

  return (
    <div>
      <ProfileComponent />
      {listOfStretches && (
        <StretchListComponent stretchList={listOfStretches} />
      )}
    </div>
  );
}
