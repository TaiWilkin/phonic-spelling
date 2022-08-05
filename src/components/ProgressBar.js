import { Text, Box } from "@chakra-ui/react";

const ProgressBar = ({ completedWords, skippedWords, wordList }) => {
  const finishedWords = completedWords.length + skippedWords.length;
  const percent = `${Math.round((finishedWords / wordList.length) * 100)}%`;

  return finishedWords > 0 ? (
    <Box className="progress-outer" style={{ flex: 2 }}>
      <Box className="progress" style={{ width: percent }} overflow="hidden">
        <Text>{percent}</Text>
      </Box>
    </Box>
  ) : null;
};

export default ProgressBar;
