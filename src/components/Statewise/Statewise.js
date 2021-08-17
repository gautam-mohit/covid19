import React, { useEffect } from "react";

const Statewise = () => {

  const getCovidData = async () => {
    const res = await fetch ('https://api.covid19india.org/data.json');
    const actData = await res.json();
    console.log(actData);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="statewise">
        <h1>Statewise data</h1>
      </div>
    </>
  );
};

export default Statewise;
