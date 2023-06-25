import useDummy from "./useDummy.js";

const getDummy = (count = 10) => {
  if (count <= 1000) {
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push(useDummy());
    }
    const final = {
      title: "This is an array of dummy user data",
      description: `This data is generated in server for user response`,
      date_time: new Date().toLocaleString(),
      totalLength: count,
      color: data,
    };
    return final;
  } else {
    const final = {
      title: "This is an array of dummy user data",
      description: `You are requesting ${count} dummy user but we can't provide more than 1000 data for our cpu shortage `,
      date_time: new Date().toLocaleString(),
      totalLength: null,
      color: null,
    };
    return final;
  }
};

export default getDummy;
