require("dotenv").config();

const axios = require("axios");

const auth = async () => {

  try {

    const response = await axios.post(

      "http://4.224.186.213/evaluation-service/auth",

      {
        email: "madhuridwarakacharla2005@gmail.com",
        name: "Dwarakacharla Madhuri",
        rollNo: "23481A1257",
        accessCode: "eJdCuC",
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log(error.response.data);
  }
};

auth();