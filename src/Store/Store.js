import create from "zustand";
import { devtools } from "zustand/middleware";
import Self_portrait from "../TMP_Resources/Self_portrait.png";

export const useStore = create(
  devtools((set, get) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 }),
    arr: [
      {
        name: "other",
        type: "2sec",
        seconds: 2,
      },
      {
        name: "other1",
        type: "3sec",
        seconds: 3,
      },
      {
        name: "other2",
        type: "2sec",
        seconds: 2,
      },
      {
        name: "other3",
        type: "2sec",
        seconds: 2,
      },
      {
        name: "other4",
        type: "2sec",
        seconds: 2,
      },
      {
        name: "other5",
        type: "2sec",
        seconds: 2,
      },
      {
        name: "other6",
        type: "2sec",
        seconds: 2,
      },
      {
        name: "other7",
        type: "5sec",
        seconds: 5,
      },
    ],
    listOfStretches: [
      {
        title: "test1",
        username: "user1",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 1,
      },
      {
        title: "test2",
        username: "user2",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 2,
      },
      {
        title: "test3",
        username: "user3",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 3,
      },
      {
        title: "test4",
        username: "user4",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 4,
      },
      {
        title: "test5",
        username: "user5",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 5,
      },
      {
        title: "test6",
        username: "user6",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: false,
        id: 6,
      },
      {
        title: "test7",
        username: "user7",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: false,
        id: 7,
      },
      {
        title: "test8",
        username: "user8",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: false,
        id: 8,
      },
      {
        title: "test9",
        username: "user9",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: false,
        id: 9,
      },
    ],
  }))
);
