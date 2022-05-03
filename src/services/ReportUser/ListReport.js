import axios from "axios";

const listReport = async () => {
  const url = `data.json`;
  try {
    const response = await axios.get(url);
    return response.data.response;
  } catch (err) {
    return err;
  }
};

export default listReport;
