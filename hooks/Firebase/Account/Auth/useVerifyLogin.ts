import { db } from "../../../../firebase";
import { collection, where, query, getDocs } from "firebase/firestore";

export const useVerifyLogin = async ({ email }: { email: string }) => {
  const userRef = collection(db, "users");
  const verifyQuery = query(
    userRef,
    where("email", "==", email),
    where("userType", "!=", "Patient")
  );
  const fetchAllowedUser = await getDocs(verifyQuery);

  if (fetchAllowedUser.empty) {
    return false;
  }

  return true;
};
