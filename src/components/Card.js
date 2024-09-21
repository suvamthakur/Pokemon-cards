import { useEffect, useState } from "react";

const Card = ({ pokemonData }) => {
  const { name, url } = pokemonData;
  const [imageURL, setImageURL] = useState();

  // Get pokemon image url
  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setImageURL(data.sprites?.other?.dream_world?.front_default);
  };

  return (
    <div className="card">
      <img className="pokemon-img" src={imageURL} alt="" />
      <p className="pokemon-name">{name}</p>
    </div>
  );
};
export default Card;
