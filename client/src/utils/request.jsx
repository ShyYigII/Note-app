import { GRAPQL_SERVER } from "./constants";
export const graphqlRequest = async (payload, option = []) => {
  if (localStorage.getItem("accessToken")) {
    const res = await fetch(`${GRAPQL_SERVER}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        ...option,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      if (res.status === 403) {
        return null;
      }
    }

    const { data } = await res.json();
    return data;
  }

  return null;
};
