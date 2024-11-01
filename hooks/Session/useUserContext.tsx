import { createContext } from "react";
import { UserSessionInfoProp } from "../../types/Account";

export const UserContext = createContext<UserSessionInfoProp | null>(null);
