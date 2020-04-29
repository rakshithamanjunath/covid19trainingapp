export const fetchData = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      return data.Global;
    } catch (e) {
      console.log(e);
    }
  };