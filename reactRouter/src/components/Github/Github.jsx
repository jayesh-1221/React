import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/jayesh-1221")
      .then((res) => res.json())
      .then((data)=>setData(data));
  }, []);
  return <div className="text-center">Github Followers: {data.followers}
       <img src="{data.avatar_url}" alt="gitImage" />
  </div>;
}

export default Github;
