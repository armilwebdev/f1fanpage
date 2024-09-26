// src/api.js
const results = "https://ergast.com/api/f1/current/last/results.json";
const constructorsResults = "https://ergast.com/api/f1/2024/constructorStandings.json";

export const fetchF1Results = async () => {
  try {
    const response = await fetch(results);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for handling later
  }
};

export const fetchConstructorsStandings = async () => {
    try {
      const response = await fetch(constructorsResults);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error for handling later
    }
  };
  