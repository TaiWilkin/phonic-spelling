import { phonemes, stems } from "../data";

const Image = ({ name, size = 75 }) => {
  if (!name) return null;
  const phoneme = phonemes[name];
  let alt = "";
  let image = null;
  let isSilent = false;
  if (phoneme) {
    alt = phoneme.letter;
    image = phoneme.image;
    isSilent = phoneme.silent;
  } else {
    alt = name;
    image = stems[name].image;
  }
  return (
    <img
      src={image}
      alt={alt}
      style={{ height: `${size}px`, opacity: isSilent ? ".5" : "1" }}
    />
  );
};

export default Image;
