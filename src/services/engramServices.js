import axiosInstance from "../configs/axios";
import { splitStringWithinRange } from "../utils/helpers";

class engramService {
  static sendData = async (string) => {
    const arrayOfstrings = splitStringWithinRange(string);

    for (const string of arrayOfstrings) {
      const response = await this.sendSplittedStringToApi(string);
      console.log(response?.AudioFilePath);
    }
  };

  static sendSplittedStringToApi = async (string) => {
    const response = await axiosInstance.post("/TTS/SynthesizeTextAudioPath", {
      Language: "ka",
      Text: string,
      Voice: 0,
      IterationCount: 2,
    });

    if (response?.status === 200) {
      const data = await response?.data;
      return data;
    } else {
      throw new Error(`API call failed with status code ${response?.status}`);
    }
  };
}

export default engramService;
