import { useState } from "react";
import { IUser } from "../types";
import { STORAGE_USERS } from "../utils/constants";
import { generateId } from "../utils/helpers";
import { getUsernameFromSessionStorage } from "../utils/storage";

const id = generateId();

export const useUser = () => {
  const [user, setUser] = useState<IUser>(getUsernameFromSessionStorage);
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState<boolean>(!user.username);

  const joinToChat = () => {
    const newUser = { username, id };
    setUser(newUser);
    window.sessionStorage.setItem(STORAGE_USERS, JSON.stringify(newUser));
    setShowModal(false);
  };

  return {
    user,
    username,
    showModal,
    setUsername,
    joinToChat
  };
};

