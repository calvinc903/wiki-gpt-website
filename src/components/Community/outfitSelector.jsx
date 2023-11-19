// import React from 'react';
// import axios from 'axios';

// function OutfitSelector () {
//     const [outfits, setOutfits] = React.useState([]);
    
//     React.useEffect(() => {
//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         var raw = JSON.stringify({
//         "userID": "651397a75a313f06321da9ec"
//         });

//         var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//         };

//         axios.request(requestOptions)
//         .then((response) => {
//             setOutfits(response.data.result);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       }, []);

//     return (
//         {
//             outfits.map((outfit) => {
//               return (<p key={outfit._id}>{JSON.stringify(outfit)}</p>);
//             })
//           }
//         <select id="outfitForm" placeholder="select outfit" data-style="btn-info" name="selectpicker">
//             <option name="opt1" value="1">Business Outfit</option>
//             <option name="opt2" value="2">Dress Outfit</option>
//             <option name="opt3" value="3">Casual Outfit</option>
//         </select>
//     )
// }

// export default OutfitSelector;