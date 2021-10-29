import phonemes from "../data/phonemes";
import stems from "../data/stems";

const Image = ({ name, size = 75 }) => {
  if (!name) return null;
  const phoneme = phonemes[name];
  let alt = "";
  let image = null;
  if (phoneme) {
    alt = phoneme.letter;
    image = phoneme.image;
  } else {
    alt = name;
    image = stems[name].image;
  }
  return <img src={image} alt={alt} style={{ height: `${size}px` }} />;
};

export default Image;
