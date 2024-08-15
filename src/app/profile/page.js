import UserProfile from "@/components/userProfile/UserProfile";

export const metadata = {
  title: "Urnitur | Profile",
  description: "This is profile page",
};

const Profile = () => {
  return (
    <div>
      {/* content section start */}
      <UserProfile></UserProfile>
      {/* content section end */}
    </div>
  );
};

export default Profile;