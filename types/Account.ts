export type LoginProps = {
  email: string;
  password: string;
};

export type UserProp = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  sex: string;
  mobile_no: string;
  house_no: string;
  street: string;
  city: string;
  barangay: string;
  province: string;
  userType: "Patient" | "Admin" | "Healthcare Worker";
};

export type UserSessionInfoProp = {
  email: string;
  first_name: string;
  last_name: string;
  userType: "Patient" | "Admin" | "Healthcare Worker";
};
