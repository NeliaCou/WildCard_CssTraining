import "./style/style.scss";
import { useState } from "react";

function App() {
  const [likes, setlikes] = useState(false);

  const handleClick = () => {
    setlikes(!likes);
  };

  const imageUrl = likes
    ? "https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg";

  return (
    <main>
      <firstPart>
        <span>
          <img
            src="src/assets/logoWildCodeSchool.webp"
            alt="logoWildCodeSchool"
          />
        </span>
        <text>
          <h1>Wild Code School</h1>
          <h2>Learn code faster</h2>
        </text>
      </firstPart>

      <secondPart>
        <h2>Do you like it?</h2>

        <button onClick={handleClick}>
          <img src={imageUrl} alt="Like or Dislike" />
        </button>
      </secondPart>
    </main>
  );
}

export default App;
