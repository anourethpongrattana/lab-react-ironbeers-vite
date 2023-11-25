import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const API_URL = "https://ih-beers-api2.herokuapp.com";
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/beers/${beerId}`)
      .then((res) => {
        setBeer(res.data);
      })
      .catch((e) => console.log(e));
  }, [beerId]);

  if (!beer) {
    return <div>loading</div>
  }

  return (
    <div key={beer._id}>
      <img src={beer.image_url} style={{ width: "50px" }} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p> Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
