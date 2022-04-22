import {
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { lessons } from "../data";
import AttemptsTable from "./AttemptsTable";

const getAttemptsText = (attemptsCount) => {
  if (!attemptsCount) return "0 attempts";
  if (attemptsCount === 1) return "1 attempt";
  return `${attemptsCount} attempts`;
};

const Attempts = () => {
  const { attempts } = useSelector((state) => state.lessonAttempts);
  return (
    <VStack m="5">
      <Heading as="h2" mb="5">
        Previous Attempts
      </Heading>
      <Container maxW="container.xl">
        <Accordion width="100" allowToggle>
          {Object.keys(lessons).map((l) => (
            <AccordionItem key={l}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Lesson {l}: {getAttemptsText(attempts[l]?.length)}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <AttemptsTable attempts={attempts[l]} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </VStack>
  );
};

export default Attempts;
