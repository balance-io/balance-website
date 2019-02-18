import got from "got";
import dotenv from "dotenv";
dotenv.config();

exports.handler = async (event, context) => {
  try {
    const response = await got(`/lists/3985713da6`, {
      baseUrl: `https://us11.api.mailchimp.com/3.0`,
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`
      }
    }).json();

    console.log(response);

    return {
      statusCode: 200,
      body: response.body
    };
  } catch (error) {
    console.log("Error: ", error.response.body);
  }
};
