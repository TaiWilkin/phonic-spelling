import { useParams } from "react-router-dom";
import CustomLink from "./CustomLink";

const LessonContinueLink = ({ phonemeList, review }) => {
  let { name, id } = useParams();

  if (review) {
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
  }

  return <CustomLink text="Continue" link={link} color="teal" />;
};

export default LessonContinueLink;
