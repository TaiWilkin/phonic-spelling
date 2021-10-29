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
    <Th>Misspelled Words</Th>
    <Th>All Words</Th>
    <Th isNumeric>Score</Th>
  </Tr>
);

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
      <Tbody>
        {attempts.map((s) => (
          <Tr key={s.id}>
            <Td>{s.date}</Td>
            <Td>
              {s.missedWords.length
                ? s.missedWords.join(", ")
                : "No missed words."}
            </Td>
            <Td>{s.completedWords.join(", ")}</Td>
            <Td isNumeric>{s.score.toFixed(2)}%</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <HeaderRow />
      </Tfoot>
    </Table>
  );
};

export default AttemptsTable;
