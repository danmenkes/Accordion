import "./githubProfileFinder.css";
import { useCallback, useEffect, useState } from "react";
import User from "./User";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="profile-continer">
      <div className="input-wrapper">
        <input
          type="text"
          name="search"
          placeholder="search by user name"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button onClick={() => handleSubmit()}>Search</button>
      </div>

      {userData ? <User userItem={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
