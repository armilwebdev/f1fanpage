// src/components/F1Results.jsx
import React, { useEffect, useState } from "react";
import { fetchF1Results } from "../services/api"; // Adjust the path if necessary

const F1Results = () => {
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchF1Results();
        setResults(data.MRData.RaceTable.Races); // Adjust based on the actual structure of the API response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  const raceName = results.length > 0 ? results[0].raceName : null;
  console.log(raceName);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
 <h1>Ergast Developer API</h1>
      <h2>Query Results</h2>
      <h3>Query Details</h3>
      <p>Series: f1</p>
      <p>Race Name: {raceName}</p> {/* Display the race name */}
      <p>Round: {results.length > 0 ? results[0].round : null}</p>
      {results.map((race) => (
        <div key={race.round}>
          <h4>{race.raceName}</h4>
          <p>Date: {race.date}</p>
          <p>Time: {race.time}</p>
          <h5>Race Results:</h5>
          <table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>No</th>
                <th>Driver</th>
                <th>Constructor</th>
                <th>Laps</th>
                <th>Grid</th>
                <th>Status</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {race.Results.map((result) => (
                <tr key={result.number}>
                  <td>{result.position}</td>
                  <td>{result.number}</td>
                  <td>{`${result.Driver.givenName} ${result.Driver.familyName}`}</td>
                  <td>{result.Constructor.name}</td>
                  <td>{result.laps}</td>
                  <td>{result.grid}</td>
                  <td>{result.status}</td>
                  <td>{result.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
</div>
  );
};

export default F1Results;
