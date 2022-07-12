import { phonemes } from "../data";

const Phoneme = ({ name, size = 75 }) => {
  if (!name) return null;
  const phoneme = phonemes[name];
  let alt = "";
  let isSilent = false;
  let unicode = null;

  if (phoneme) {
    alt = phoneme.letter;
    isSilent = phoneme.silent;
    unicode = phoneme.unicode;
  } else {
    alt = name;
  }

  return (
    <p
      style={{
        fontSize: `${size}px`,
        opacity: isSilent ? ".5" : "1",
      }}
      alt={alt}
    >
      {unicode ? unicode : name}
    </p>
  );
};

export default Phoneme;
