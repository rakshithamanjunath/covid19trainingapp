
import React, { Component } from 'react';
const Util = () => {
  const [country, setCountry] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postsperpage, setPostsPage] = useState(10);

  useEffect (() => {
    const fetchCountry = async () => {
      debugger;
      setLoading(true);
      const res = await axios.get('https://api.covid19api.com/summary');
      debugger;
      setCountry(res.Countries);
      setLoading(false);
    }
    fetchCountry();
  },[]);
  console.log(country);
}
export default Util;