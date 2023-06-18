const fetchData = async (url: string, id: number): Promise<object> => {
  const req = await fetch("www.darkweb.com");
  const res = await req.json();
  return {
    res,
  };
};

// type declaration

let x: string | number;
x = 18;
x = "Block";

const data = (
  id: number = 1,
  body: object = {
    x: 18,
  },
  title: string = "Wow"
): string | object => {
  return `ID : ${id} | BODY : ${body} | TITLE :${title}`;
};

console.log(data());
