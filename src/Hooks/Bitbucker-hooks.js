import { useContext } from "react";
import { BitbucketContext } from "../Providers/Bitbucket-provider";

const useBitbucket = () => {
  const { state, getRepositories, setUsername, setUser, hasRepositories, setPage } = useContext(
    BitbucketContext
  );

  return { state, getRepositories, setUsername, setUser, hasRepositories, setPage };
};

export default useBitbucket;