
import React, { Component } from 'react';
const Util = () => {
    
    renderTableData(data){
        return data.map((eachState, index) => {
          const {search} = this.state;
          // console.log(search);
           const { CountryCode, Country, TotalConfirmed, TotalRecovered, TotalDeaths } = eachState //destructuring
           if (search !== "" && Country.toLowerCase().indexOf(search) === -1 ){
               return null
           }
           return (
              <tr key={CountryCode}>
                  <td>{Country}</td>
                 <td>{TotalConfirmed}</td>
                 <td>{TotalRecovered}</td>
                 <td>{TotalDeaths}</td>
              </tr>
           )
        })
     }

}
export default Util;




// const [country, setCountry] = useState([]);
// const [loading,setLoading] = useState(false);
// const [currentPage, setCurrentpage] = useState(1);
// const [postsperpage, setPostsPage] = useState(10);

// useEffect (() => {
//   const fetchCountry = async () => {
//     debugger;
//     setLoading(true);
//     const res = await axios.get('https://api.covid19api.com/summary');
//     debugger;
//     setCountry(res.Countries);
//     setLoading(false);
//   }
//   fetchCountry();
// },[]);
// console.log(country);