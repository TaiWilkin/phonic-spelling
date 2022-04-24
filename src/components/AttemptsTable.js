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
    <Th>Incorrect Answers</Th>
    <Th>Correct Answers</Th>
    <Th isNumeric>Score</Th>
  </Tr>
);

const renderAttempt = ({
  id,
  date,
  incorrectAnswers = [],
  correctAnswers = [],
  score = 0,
}) => {
  const formattedScore = isNaN(score) ? "N/A" : `${(score * 100).toFixed(2)}%`;
  return (
    <Tr key={id}>
      <Td>{date}</Td>
      <Td>
        {incorrectAnswers?.length
          ? incorrectAnswers.map((w) => `'${w}'`).join(", ")
          : "No incorrect answers."}
      </Td>
      <Td>
        {correctAnswers?.length
          ? correctAnswers.map((w) => `'${w}'`).join(", ")
          : "No correct answers"}
      </Td>
      <Td isNumeric>{formattedScore}</Td>
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
