import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setVoice } from "../reducers/voice";

const languages = ["en-US", "en-GB", "en", "en-AU", "en-IE", "en-IN", "en-ZA"];

const VoiceSelector = () => {
  const getVoices = () => {
    const vs = window.speechSynthesis?.getVoices() || [];
    return vs.filter((v) => languages.includes(v.lang));
  };
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const [voices, setVoices] = useState(getVoices());

  return (
    <Select
      placeholder="Select Voice"
      w="200px"
      variant="filled"
      value={voice}
      onChange={(e) => dispatch(setVoice(e.target.value))}
      onClick={() => {
        if (!voices.length) {
          setVoices(getVoices());
        }
      }}
    >
      {voices.map((v) => (
        <option key={v.voiceURI} value={v.voiceURI}>
          {v.name}
        </option>
      ))}
    </Select>
  );
};

export default VoiceSelector;
