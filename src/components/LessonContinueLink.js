import { useParams } from "react-router-dom";
import CustomLink from "./CustomLink";

const LessonContinueLink = ({
  phonemeList = [],
  sightwords = [],
  review = false,
}) => {
  let { name, id } = useParams();

  if (review) {
    if (sightwords.length) {
      return (
        <CustomLink
          text="Continue"
          link={`/lessons/${id}/sightwords`}
          color="teal"
        />
      );
    }
    return (
      <CustomLink
        text="Continue"
        link={`/lessons/${id}/spelling`}
        color="teal"
      />
    );
  }

  if (!name && phonemeList.length) {
    return (
      <CustomLink
        text="Continue"
        link={`/lessons/${id}/phoneme/${phonemeList[0]}`}
        color="teal"
      />
    );
  }

  const newIndex = phonemeList.findIndex((p) => p === name) + 1;
  let link = `/lessons/${id}/analysis`;
  if (newIndex < phonemeList.length) {
    link = `/lessons/${id}/phoneme/${phonemeList[newIndex]}`;
  } else if (sightwords.length) {
    link = `/lessons/${id}/sightwords`;
  }

  return <CustomLink text="Continue" link={link} color="teal" />;
};

export default LessonContinueLink;
