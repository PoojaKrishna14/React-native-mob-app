import axios from "axios";

const apiEndpoint =
  "https://languageveda--uat/.sandbox/.my/.salesforce/.com/services/oauth2/token";

export async function fetchData(accessToken) {
  try {
    const response = await axios.get(apiEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
