import React, { useState, useEffect } from 'react';
import driversData from '../APIs/DriverStandings.json'; // Assuming the file is in the APIs folder

function Drivers() {
    const [drivers, setDrivers] = useState([]);
  // useEffect to parse and set the driver names once when the component mounts
  useEffect(() => {
    // Ensure driversData exists and has the expected structure
    if (driversData.MRData.StandingsTable.StandingsLists[0].DriverStandings
    ) {
      const drivers = driversData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      setDrivers(drivers);
    }
  }, []); // Empty array ensures this only runs once, on component mount
    


    return(
        <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-12">
            {drivers.map((driver, index) => (
            <a href="#" className=" pr-4 py-4 border h-96 w-90 rounded-xl 
                                    shadow grid grid-cols-2 relative 
                                    hover:bg-slate-200 bg-neutral-100" 
                                    key={index}>
                <div className="col-span-2 pl-2 font-bold text-2xl text-gray-700">
                    {index+1}
                </div>
                <div className="col-span-2">
                    <p>{driver.Driver.permanent_number}</p>
                </div>
                <div className="col-span-2 flex">
                    <div className="pl-2 w-full text-center align-middle self-end text-5xl italic font-black text-gray-500">
                        <p>{driver.Driver.permanentNumber}</p>
                    </div>
                    <img className="border-r-2 h-36 w-36 sm:w-48 sm:h-48  border-neutral-500 border-r-4 rounded-full"src={driver.Driver.image}/>
                </div>
                <div className="col-span-2">
                    <p className="py-2 px-2 bg-gray-800 text-white rounded-r tracking-wider flex items-center justify-between">
                        <span>
                            <span className="text-2xl font-bold uppercase text-lg">{driver.Driver.givenName} </span>
                            <span className="uppercase ">{driver.Driver.familyName}</span>
                        </span>
                        <img className="h-7 place-self-end"src={driver.Driver.flagImage}/>
                    </p>
                </div>
                <div className="col-span-2 pl-2">
                    <p className="">{driver.points}</p>
                    <p>{driver.Constructors[0].name}</p>
                </div>
                <div className="col-span-2">
            </div>
                <div>
                </div>
            </a>
        ))}
        </div>
      <ul>

      </ul>
        </div>
    );
}

export default Drivers