import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
  /* //* React router provided normal method to fetch api
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://api.github.com/users/RishabhTrivedi-22`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
  }, [])*/

  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center bg-gray-500 p-4 mt-4 mb-4 text-4xl">
      <img
        className="mr-3 p-2"
        src={data.avatar_url}
        alt="Git Avatar"
        width={250}
      />
      <h1>
        Profile Name : {data.login} <br />
        Profile Link :{" "}
        <NavLink className="underline" to={data.html_url} target="/blank">
          {data.html_url}
        </NavLink>{" "}
        <br /> <br />
        GITHUB Repos : {data.public_repos}
      </h1>
    </div>
  );
}

export default Github;

// * Optimised method to fetch api that uses LOADER from router to fetch and save content even before the content is loaded.
export const githubLoader = async () => {
  const response = await fetch(
    `https://api.github.com/users/RishabhTrivedi-22`
  );
  return response.json();
};
