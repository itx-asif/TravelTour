import React, { useState } from "react";
import Button from "../ui/Button";
import TextField from "../ui/textfield";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  const [keyword, setKeyword] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState(0);

  const handleSearch = () => {
    console.log("Search with:", { keyword, destination, duration });
    // Add your filter logic or navigate here
  };

  return (
      <>
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <img
          src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/2020-12/Greece.jpg"
          alt="bgtravel"
          className="absolute top-0 left-0 w-full h-screen object-cover -z-50"
        />
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 -z-49" />

        <div className="relative z-20 px-4 w-full">
          <div className="text-center py-10">
            <h1 className="font-bold text-4xl text-white mb-4">
              Find Next Place To Visit
            </h1>
            <p className="text-lg font-semibold">
              Discover amazing places at exclusive deals
            </p>
          </div>

          <div className="flex md:flex-row flex-col gap-1 md:max-w-[60%] max-w-[90%]  justify-center m-auto">
            <TextField
              icon={<BiSearch />}
              placeholder="Search keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <TextField
              isSelect
              placeholder="Destination"
              options={[
                "Africa",
                "North America",
                "South America",
                "Asia",
                "Europe",
              ]}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <TextField
              placeholder={"Days"}
              isSelect={true}
              options={["1+", "3+", "5+", "7+"]}
              value={duration}
              onChange={(e) => {
                const rawValue = e.target.value; // e.g. "3 Days"
                const number = parseInt(rawValue); // gets 3
                setDuration(number); // stores 3 as a number
              }}
            />
            <Button size="lg" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>

      </section>

</>
  );
};

export default Hero;
