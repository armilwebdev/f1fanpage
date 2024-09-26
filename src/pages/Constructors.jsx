import React, { useState, useEffect } from 'react';
import constructorData from '../APIs/ConstructorsStandings.json'; // Assuming the file is in the APIs folder
import f1svg  from '/assets/images/cars/f1car.svg';

function Constructors() {
    const [teams, setTeams] = useState([]);
    const [topTeamPoints, setTopTeamPoints] = useState("");
    
  // useEffect to parse and set the driver names once when the component mounts
  useEffect(() => {
    // Ensure driversData exists and has the expected structure
    if (constructorData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
    ) {
      const teams = constructorData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      setTeams(teams);
      const highestPoints =  teams[0].points;
      setTopTeamPoints(highestPoints);
      console.log(topTeamPoints);
    }
    
  }, []); // Empty array ensures this only runs once, on component mount
        // Log the teams array only when it has been populated

    return(
        <div className=" bg-gray-500  text-white">
            <div className="p-1 sm:p-2 md:p-4">
                <h1 className="text-2xl md:text-6xl font-bold text-center mt-24 text-white">F1 2024 Constructors</h1>
                <div className="mt-24">
                <div className="w-full bg-gray-700 py-8 px-2 rounded">
                        {teams.map((team, index) => (
                        
                        <div key={index} className=" flex 0">
                        <div className="tracking-wider min-w-36 max-w-28 py-4 text-right pr-4 
                                        uppercase text-xs sm:text-xl border-gray-600 border-y"
                        style={{
                            width: `${Math.round((team.points / topTeamPoints) * 100)}%`,
                            }}>
                            <div>{team.Constructor.name}</div>
                            <div className="text-xs">Points: {team.points}</div>
                            <div className="text-xs">Wins: {team.wins}</div>
                        </div>
                        <div
                            className="font-bold py-4 ml-0"
                            style={{
                                width: `${Math.round((team.points / topTeamPoints) * 100)}%`,
                                backgroundColor: team.color, 
                                color: team.color
                            }}
                        >
                            .
                        </div>
                            
                        </div>
                        ))}
                   </div>
                   <div className="grid grid-cols-1 w-full bg-white text-gray-800 py-8 px-2 rounded">
                        {teams.map((team, index) => (
                        <div key={index} className="mb-4">
                        <div
                            className="font-bold"
                            style={{
                                width: `${Math.round((team.points / topTeamPoints) * 100)}%`,
                                backgroundColor: team.color, 
                                color: team.color
                            }}
                        >
                            .
                        </div>
                            <div className="font-bold">{team.Constructor.name}</div>
                            <div>Position: {team.position}</div>
                            <div>Wins: {team.wins}</div>
                            <div>Points: {team.points}</div>

                        </div>
                        ))}
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Constructors