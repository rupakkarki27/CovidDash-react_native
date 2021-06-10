export const fetchData = async () => {
  const response = await fetch(
    'https://corona.lmao.ninja/v2/countries?yesterday&sort',
  );

  return response.json();
};
