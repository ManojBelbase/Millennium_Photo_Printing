import React from "react";
import { ClientsData } from "./ClientsData";
const Clients = () => {
  return (
    <section className="bg-black rounded-md">
      <div className="mx-auto py-6 lg:py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-sm md:text-2xl font-semibold uppercase">
            Our Partners
          </h1>
          <span className="w-10 md:w-14 lg:w-16 h-[2px] md:h-1 mt-1 bg-primary"></span>
        </div>
        <div className="mt-4 grid grid-cols-4 md:grid-cols-8">
          {ClientsData.map((client, i) => {
            return (
              <div
                key={i}
                className="h-16 w-16 md:h-24 md:w-24 rounded-sm bg-white p-1"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-full object-cover rounded"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
