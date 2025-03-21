import {FaLock, FaHeart, FaUser, FaHeartbeat} from "react-icons/fa";

export const getSexTherapyIssues = () => [
  {id: 1, title: "Mismatched Sex Drive", locked: true},
  {id: 2, title: "Low Sexual Desire", icon: FaHeartbeat},
  {id: 3, title: "Pain During Sex", icon: FaUser},
  {id: 4, title: "Fear of Intimacy", locked: true},
  {
    id: 5,
    title: "Ethical non-monogamy / Opening Up Relationship",
    locked: true,
  },
  {id: 6, title: "Performance Anxiety", icon: FaHeartbeat},
  {id: 7, title: "Pre-mature or Delayed ejaculation", icon: FaUser},
  {id: 8, title: "Trauma or Abuse", icon: FaHeartbeat},
];
