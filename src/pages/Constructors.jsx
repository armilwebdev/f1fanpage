import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'; // Import Cell to control individual bar colors
import constructorData from '../APIs/ConstructorsStandings.json'; // Assuming the file is in the APIs folder

function Constructors() {
    const [teams, setTeams] = useState([]);
    const [topTeamPoints, setTopTeamPoints] = useState("");

    useEffect(() => {
        if (constructorData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings) {
            const teams = constructorData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
            setTeams(teams);
            const highestPoints = teams[0].points;
            setTopTeamPoints(highestPoints);
        }
    }, []);

    // Prepare data for the Recharts bar chart
    const formattedData = teams.map((team) => ({
        name: team.Constructor.name,
        points: Number(team.points),
        color: team.color // Use the team color
    }));

    return (
        <div className="bg-gray-700 text-white">
            <div className="p-1 sm:p-2 md:p-4">
                <h1 className="text-2xl md:text-6xl font-bold text-center mt-24 text-white">F1 2024 Constructors</h1>
                <div className="mt-24 bg-gray-800 py-4">
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            layout="vertical"
                            data={formattedData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            barSize={50} // Increase this value for thicker bars
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" dataKey="points" tick={{ fill: 'white' }}/>
                            <YAxis type="category" dataKey="name" width={150} tick={{ fill: 'white' }}/>
                            <Bar dataKey="points" label={{ fill: 'white', fontSize: 16 }}>
                                {formattedData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color || "#8884d8"} /> // Use team color dynamically
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default Constructors;
