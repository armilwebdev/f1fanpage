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
        <div className="mt-24 p-4">
            <h1 className="text-6xl font-bold text-center mb-24">F1 2024 Drivers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-12">
            {drivers.map((driver, index) => (
            <a href="#" className=" pr-4 pt-4 border w-full  sm:w-90 rounded-xl   
                                    shadow grid grid-cols-1 sm:grid-cols-2 relative 
                                    bg-white card hover:bg-gray-50"  
                                    key={index}
                                    onClick={(event) => event.preventDefault()}
                        >
                <div className=" w-full font-bold text-gray-700 w-full">
                    <div className="text-4xl">
                        {index+1}
                    </div>
                    <div className="text-lg tracking-wider font-bold text-left 
                                    text-gray-500 opacity-90 mt-1">
                        <span className="bg-gray-800 px-2 text-white border border-gray-800">POINTS</span>
                        <span className="border border-gray-800 px-2 rounded-r">{driver.points}</span>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <p className="">{driver.Driver.permanent_number}</p>
                </div>
                <div className="flex  mb-2 col-span-2 relative">
                <img className="h-7 place-self-end absolute shadow shadow-xl 
                                rounded-full driver-flag absolute inset-0 m-auto mb-2 object-cover"
                                src={driver.Driver.flagImage}/>
                    <div className="z-50 pl-2 sm:text-center align-middle self-end text-8xl sm:text-7xl italic font-black  absolute fixed left-0 bottom-0  text-gray-500">
                        <p>{driver.Driver.permanentNumber}</p>
                    </div>
                    <div className="w-full h-full grid justify-items-center">
                        <img className="driver-image justify-self-middle  w-72 h-72 sm:w-60 sm:h-60  
                                        md:w-72 md:h-72 lg:w-64 lg:h-64  
                                        rounded-full"src={driver.Driver.image}/>
                    </div>
                        
                </div>
                <div className="col-span-2 mb-0 ">
                    <p className="py-2 px-2 bg-gray-800 text-white rounded-r tracking-wider flex items-center justify-between">
                        <span className="grid grid-cols-1">
                            <span className="text-3xl uppercase font-bold">{driver.Driver.givenName} </span>
                            <span className="uppercase text-xl">{driver.Driver.familyName}</span>
                        </span>
                        {/* <img className="h-7 place-self-end"src={driver.Driver.flagImage}/> */}
                    </p>
                </div>
                <div className="col-span-1 sm:col-span-2 pl-2 ">
                    <p className="text-3xl font-bold text-gray-800 uppercase text-center">{driver.Constructors[0].name}</p>
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