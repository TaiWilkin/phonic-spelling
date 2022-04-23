import React from "react";
import {
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

import { lessons, levels } from "../data";
import LessonLink from "./LessonLink";

const LessonsAccordion = ({ onClose = () => {} }) => {
  const renderLevel = (lv) => {
    const levelLessons = levels[lv].filter((l) => !!lessons[l]);
    return (
      <AccordionItem key={lv}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Level {lv}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <VStack>
            {levelLessons.length ? (
              levelLessons.map((l) => (
                <LessonLink l={l} onClose={onClose} key={l} />
              ))
            ) : (
              <Text>Level {lv} is coming soon.</Text>
            )}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    );
  };
  return (
    <Accordion w="100%" allowToggle>
      {Object.keys(levels).map(renderLevel)}
    </Accordion>
  );
};

export default LessonsAccordion;
