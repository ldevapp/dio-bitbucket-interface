import { useContext } from "react";
import { BitbucketContext } from "../Providers/Bitbucket-provider";

const useBitbucket = () => {
  const { state, getRepositories } = useContext(
    BitbucketContext
  );

  return { state, getRepositories };
};

export default useBitbucket;