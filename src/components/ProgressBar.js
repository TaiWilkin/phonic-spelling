import { Text, Box } from "@chakra-ui/react";

const ProgressBar = ({ completedWords, wordList }) => {
  const percent = `${Math.round(
    (completedWords.length / wordList.length) * 100
  )}%`;

  return completedWords.length > 0 ? (
    <Box className="progress-outer">
      <Box className="progress" style={{ width: percent }} overflow="hidden">
        <Text>{percent}</Text>
      </Box>
    </Box>
  ) : null;
};

export default ProgressBar;
