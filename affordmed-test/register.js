const axios = require("axios");

const register = async () => {

  try {

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",

      {
        email: "madhuridwarakacharla2005@gmail.com",
        name: "Dwarakacharla Madhuri",
        mobileNo: "9014859090",
        githubUsername: "Madhuri1257",
        rollNo: "23481A1257",
        accessCode: "eJdCuC"
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log(error.response.data);
  }
};

register();