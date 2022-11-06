// import {useState} from 'react';
// import useFetch from './useFetch';


// function Reminder() {
//     const [page, setPage] = useState(1);

//     //const {loading;error,data} = useFeatch(
//         //`https://randomuser.me/api/?page=${page}&results=10&seed=abc
//     //);

//     const{loading,error,data} = useFetch(
//         `https://randomuser.me/api/?results=50&seed=abc`
//     );

//     console.log({loading,error,data});

//     const PER_PAGE=10;
//      const total = data?.results?.length;
//      const pages= Math.cell(total/ PER_PAGE);
//      //let page = 1
//      //magic of pagination
//      const skip = page * PER_PAGE - PER_PAGE;
//      //console.log(skip.total);

//      //use the useEffect to make api call based on the page.

//      if (loading) {
//         return <>loading....</>;
//      }

//      if (! loading && error) {
//         return <>Error</>;
//      }

//      return(
//         <div className=''>
//           <h1>List of Users</h1>
//           {/*1000: another magic with Array.slice() */}
//           {data?.results.slice(skip,skip + PER_PAGE).map((each,index) =>{
//             const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
//             return(
//                 <li key={name.toLowerCase().replaceAll('','')}>{`${index + 1}.${name}`}</li>
//             );
//           })}
//           {
//             <button
//             disable={page <= 1}
//             onClick={()=> setPage((prev) => prev - 1)}
//             >
//                 prev
//                 </button>
//          }
//                 <p>
//                     pages: {page} of {pages}
//                 </p>
//                 {
//             <button
//             disable={page >= pages}
//             onClick={() => setPage((prev) => prev +1 )}
//             >
//                 next
//             </button>
//           }
//           {/*another magic here */}
//           {Array.from({length: pages},(value, index) => index + 1).map((each) =>(
//             <button onClick={() =>setPage(each)}>{each}</button>
//           ) )}
//         </div>
//      );
// }

