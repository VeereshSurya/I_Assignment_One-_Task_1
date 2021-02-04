import React from "react";

// API URL
const URL = "https://jsonplaceholder.typicode.com/users";

// Makes fetch request to the api

export const FetchUsers = async () => {
  try {
    return await fetch(URL).then((res) => {
      return res.json();
    });
  } catch (error) {}
};
