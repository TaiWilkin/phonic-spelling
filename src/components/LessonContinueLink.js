import { useParams, useRouteMatch } from "react-router-dom";
import CustomLink from "./CustomLink";
import { content } from "../data";
import getNextStepLink from "../getNextStepLink";

const LessonContinueLink = () => {
  const { path } = useRouteMatch();
  let { name, id } = useParams();

  const link = getNextStepLink({ name, id, path });

  if (!link) return null;

  return (
    <CustomLink text="Continue" link={link} color={`${content.color}.500`} />
  );
};

export default LessonContinueLink;
