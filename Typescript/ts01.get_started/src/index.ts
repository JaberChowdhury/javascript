const fetchData = async (url: string, id: number): Promise<object> => {
  const req = await fetch("www.darkweb.com");
  const res = await req.json();
  return {
    res,
  };
};
