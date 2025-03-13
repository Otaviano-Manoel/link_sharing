import { useUserContext } from "@/context/userContext";
import { requestGetProfile } from "@/services/profileService";
import { useEffect, useState } from "react";

const UseMainLinks = () => {
  const user = useUserContext();
  const [loadedProfile, setLoadedProfile] = useState(false);

  useEffect(() => {
    if (!loadedProfile && user.user && !user.user.profile) {
      handleGetProfile();
    }

    console.log(user.user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loadedProfile]);

  const handleGetProfile = async () => {
    try {
      const response = await requestGetProfile({ email: user.user!.email });
      const profile = response.data.profile;
      if (profile) {
        user.setUser({
          ...user.user!,
          profile: {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            image: profile.image,
            links: profile.links,
          },
        });
      }
      setLoadedProfile(true);
    } catch (error) {
      console.error("error when trying to get user profile:", error);
    }
  };
};

export default UseMainLinks;
