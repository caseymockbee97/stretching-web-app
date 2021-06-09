import create from "zustand";
import { devtools } from "zustand/middleware";
import Self_portrait from "../TMP_Resources/Self_portrait.png";

export const useStore = create(
  devtools((set, get) => ({
    isOpen: false,
    selectedInput: 1,
    setSelectedInput: (num) => set((state) => ({ selectedInput: num })),
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 }),

    listOfStretches: [
      {
        title: "test1",
        username: "user1",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 1,
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
      },
      {
        title: "test2",
        username: "user2",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 2,
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
      },
      {
        title: "test3",
        username: "user3",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 3,
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
      },
      {
        title: "test4",
        username: "user4",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 4,
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
      },
      {
        title: "test5",
        username: "user5",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: Self_portrait,
        id: 5,
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
      },
      {
        title: "test6",
        username: "user6",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: false,
        id: 6,
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
      },
      {
        title: "test7",
        username: "user7",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: false,
        id: 7,
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
      },
      {
        title: "test8",
        username: "user8",
        description:
          "This is a stretch that you should use. It is good for the body and the soul.",
        profileImage: false,
        id: 8,
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
      },
      {
        title: "Great Stretch",
        username: "Casey Mockbee",
        description:
          "This one is great for running and other stuff. This is a collection of random stuff. If these words meant anything then itThis one is great for running and other stuff. This is a collection of random stuff. If these words meant anything then it",
        profileImage:
          "https://media-exp1.licdn.com/dms/image/C4E03AQEFneiYhtd9yA/profile-displayphoto-shrink_200_200/0/1593623798864?e=1627516800&v=beta&t=5QSssBtR1wZ8oTi2v-g-hijX-DHl_hKYY0_wrXq_NjI",
        id: 9,
        arr: [
          {
            name: "Kneeling Foot Stretch",
            type: "sitting",
            seconds: 20,
          },
          {
            name: "Take a break",
            seconds: 5,
          },
          {
            name: "3-Way Ankle Mobility",
            type: "standing",
            seconds: 20,
          },
          {
            name: "Take a break",
            seconds: 5,
          },
          {
            name: "3-Way Shin Stretch",
            type: "standing",
            seconds: 20,
          },
          {
            name: "Take a break",
            seconds: 5,
          },
          {
            name: "Bear Squat",
            type: "sitting",
            seconds: 20,
          },
          {
            name: "Take a break",
            seconds: 5,
          },
          {
            name: "Kneeling Peroneal Stretch",
            type: "sitting",
            seconds: 20,
          },
          {
            name: "Take a break",
            seconds: 5,
          },
          {
            name: "Standing Hamstring and Calf Stretch",
            type: "standing",
            seconds: 20,
          },
          {
            name: "Take a break",
            seconds: 5,
          },
          {
            name: "Crescent to Hamstring Stretch",
            type: "sitting",
            seconds: 20,
          },
          {
            name: "Take a break",
            seconds: 5,
          },
          {
            name: "Pigeon Pose",
            type: "sitting",
            seconds: 20,
          },
        ],
      },
    ],
  }))
);
