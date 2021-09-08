import { useContext } from "react";
import { BitbucketContext } from "../Providers/Bitbucket-provider";

const useBitbucket = () => {
  const { state, clearData, getRepositories, setUsername, setUser,setActivePage } = useContext(
    BitbucketContext
  );

  return { state, clearData, getRepositories, setUsername, setUser, setActivePage };
};

export default useBitbucket;