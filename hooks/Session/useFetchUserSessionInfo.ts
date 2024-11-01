import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/index";
import { UserSessionInfoProp } from "../../types/Account";
export const useFetchUserSessionInfo = async ({
  userId,
}: {
  userId: string;
}) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const { email, userType, first_name, last_name } =
        userDoc.data() as UserSessionInfoProp;
      const userSessionInfo = { email, userType, first_name, last_name };
      return userSessionInfo;
    }
    return null;
  } catch (e) {
    return e;
  }
};
