import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/search?q=${query}`)
      .then((res) => {
        setBeers(res.data);
      })
      .catch((e) => console.log(e));
  }, [query]);

  return (
    <div>
      <h1>All Beers</h1>
      <input
        type="text"
        name="search"
        placeholder="Filter beers"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {beers.map((beers) => (
          <li key={beers._id}>
            <Link
              style={{ display: "flex", flexDirection: "row" }}
              to={`/beers/${beers._id}`}
            >
              <div>
                <img
                  src={beers.image_url}
                  style={{ width: "50px" }}
                  alt={beers.name}
                />
              </div>
              <div>
                <h2>{beers.name}</h2>
                <p>{beers.tagline}</p>
                <p> Contributed by: {beers.contributed_by}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
