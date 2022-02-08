import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL_API } from "../utils/constants";

export const client = new ApolloClient({
  uri: BASE_URL_API,
  cache: new InMemoryCache(),
});
