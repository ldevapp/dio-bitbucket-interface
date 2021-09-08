import { useContext } from "react";
import { BitbucketContext } from "../Providers/Bitbucket-provider";

const useBitbucket = () => {
  const { state, clearData, getRepositories, setUsername, setUser } = useContext(
    BitbucketContext
  );

  return { state, clearData, getRepositories, setUsername, setUser };
};

export default useBitbucket;