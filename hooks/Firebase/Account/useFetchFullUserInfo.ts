import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/index";
export const useFetchFullUserInfo = async ({ userId }: { userId: string }) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (e) {
    return e;
  }
};
