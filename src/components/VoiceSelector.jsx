import { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setVoice, saveSettings } from "../reducers/voice";

const languages = ["en-US", "en-GB", "en", "en-AU", "en-IE", "en-IN", "en-ZA"];

const VoiceSelector = ({ isHidden }) => {
  const getVoices = () => {
    const vs = window.speechSynthesis?.getVoices() || [];
    return vs.filter((v) => languages.includes(v.lang));
  };
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const [voices, setVoices] = useState(getVoices());

  const handleVoiceChange = (voice) => {
    dispatch(setVoice(voice));
    dispatch(saveSettings({ voice }));
  };

  useEffect(() => {
    setTimeout(() => {
      setVoices(getVoices());
    }, 500);
  }, []);

  if (isHidden) return null;

  return (
    <Select
      placeholder="Select Voice"
      w="300px"
      variant="filled"
      value={voice}
      onChange={(e) => handleVoiceChange(e.target.value)}
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
