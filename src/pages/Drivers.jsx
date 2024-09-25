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
        <div className="mt-24">
            <h1 className="text-6xl font-bold text-center mb-24">F1 2024 Drivers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-12">
            {drivers.map((driver, index) => (
            <a href="#" className=" pr-4 py-4 border w-full  sm:w-90 rounded-xl   
                                    shadow grid grid-cols-1 sm:grid-cols-2 relative 
                                    bg-white card hover:bg-gray-50"  
                                    key={index}>
                <div className="col-span-1 sm:col-span-2 pl-2 font-bold text-2xl text-gray-700">
                    {index+1}
                </div>
                <div className="col-span-1 sm:col-span-2 ">
                    <p>{driver.Driver.permanent_number}</p>
                </div>
                <div className="flex  mb-2 col-span-2 relative">
                    <div className="pl-2 sm:text-center align-middle self-end text-7xl sm:text-5xl italic font-black text-gray-500 absolute fixed left-0 bottom-0">
                        <p>{driver.Driver.permanentNumber}</p>
                    </div>
                    <div className="w-full h-full grid justify-items-stretch">
                        <img className="driver-image justify-self-end  w-72 h-72 sm:w-60 sm:h-60  md:w-48 md:h-48 lg:w-64 lg:h-64   rounded-full"src={driver.Driver.image}/>
                    </div>
                        
                </div>
                <div className="col-span-2  mb-2">
                    <p className="py-2 px-2 bg-gray-800 text-white rounded-r tracking-wider flex items-center justify-between">
                        <span>
                            <span className="text-2xl font-bold uppercase text-lg">{driver.Driver.givenName} </span>
                            <span className="uppercase ">{driver.Driver.familyName}</span>
                        </span>
                        <img className="h-7 place-self-end"src={driver.Driver.flagImage}/>
                    </p>
                </div>
                <div className="col-span-1 sm:col-span-2 pl-2">
                    <p className="">{driver.points}</p>
                    <p>{driver.Constructors[0].name}</p>
                </div>
                <div className="col-span-1 sm:col-span-2">
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