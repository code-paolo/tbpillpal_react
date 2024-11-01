import { DashboardLayout } from "../Layouts/DashboardLayout";
import { useContext } from "react";
import { UserContext } from "../../../hooks/Session/useUserContext";
import { UseHelmet } from "../../utils/Helmet/UseHelmet";
const Dashboard = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <UseHelmet
        helmetTitle="Dashbboard | TBPillPal"
        helmetContent="Access TBPillpals dashboard"
      />
      <DashboardLayout>
        Dashboard: {user?.email} {user?.userType}
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
