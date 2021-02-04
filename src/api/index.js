import React from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

export const FetchUsers = async () => {
  try {
    return await fetch(URL).then((res) => {
      return res.json();
    });
  } catch (error) {}
};
