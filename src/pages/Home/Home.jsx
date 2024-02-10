import React, { useEffect, useState } from "react";
import { UserCard } from "../../components";

const Home = ({ data }) => {
  return (
    <div className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
      {data.map((item) => (
        <UserCard
          image={item?.picture?.large}
          firstName={item?.name?.first}
          lastName={item?.name?.last}
          gender={item?.gender}
          phone={item?.phone}
        />
      ))}
    </div>
  );
};

export default Home;
