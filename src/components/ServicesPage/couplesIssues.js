import {FaUsers, FaUserFriends, FaHeartbeat} from "react-icons/fa";

export const getCouplesIssues = () => [
  {id: 1, title: "Communication", locked: true},
  {id: 2, title: "Conflict resolution", icon: FaHeartbeat},
  {id: 3, title: "Difference in personality & lifestyle", icon: FaUsers},
  {id: 4, title: "Mismatched sex drive", locked: true},
  {id: 5, title: "Anxiety and stress management", locked: true},
  {id: 6, title: "Loss of intimacy & connection", icon: FaHeartbeat},
  {id: 7, title: "Life transitions", icon: FaUserFriends},
  {id: 8, title: "Infidelity & Broken Trust", icon: FaHeartbeat},
];
