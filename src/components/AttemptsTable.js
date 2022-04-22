import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";

const HeaderRow = () => (
  <Tr>
    <Th>Date</Th>
    <Th>Misspelled Phonic Words</Th>
    <Th>Misspelled Sight Words</Th>
    <Th>Completed Words</Th>
    <Th isNumeric>Phonic Score</Th>
    <Th isNumeric>Sight Score</Th>
  </Tr>
);

const renderAttempt = ({
  id,
  date,
  missedWords = [],
  missedSightWords = [],
  completedWords = [],
  completedSightWords = [],
  score = 0,
  sightScore = 0,
}) => {
  const formattedScore = isNaN(score) ? "N/A" : `${(score * 100).toFixed(2)}%`;
  const formattedSightScore = isNaN(sightScore)
    ? "N/A"
    : `${(sightScore * 100).toFixed(2)}%`;
  return (
    <Tr key={id}>
      <Td>{date}</Td>
      <Td>
        {missedWords?.length
          ? missedWords.join(", ")
          : "No missed phonic words."}
      </Td>
      <Td>
        {missedSightWords?.length
          ? missedWords.join(", ")
          : "No missed sight words."}
      </Td>
      <Td>{completedWords.concat(completedSightWords).join(", ")}</Td>
      <Td isNumeric>{formattedScore}</Td>
      <Td isNumeric>{formattedSightScore}</Td>
    </Tr>
  );
};

const AttemptsTable = ({ attempts = [] }) => {
  if (!attempts.length) {
    return <Text>No attempts found.</Text>;
  }
  return (
    <Table variant="simple">
      <TableCaption>Attempts</TableCaption>
      <Thead>
        <HeaderRow />
      </Thead>
      <Tbody>{attempts.map(renderAttempt)}</Tbody>
      <Tfoot>
        <HeaderRow />
      </Tfoot>
    </Table>
  );
};

export default AttemptsTable;
