import axios from "axios";
import md5 from "md5";
// import { useEffect } from "react";
// import { useParams } from "react-router";
// import Link from "react-router-dom";

const baseURL = "https://gateway.marvel.com:443/v1/public/";
const publicKey = "f0aa510cd9567408e1af161b3ddba245";
const privateKey = "1c83789058b19daf6ea49f5effd3ce022428ee29";
let time = Number(new Date());
let hash = md5(time + privateKey + publicKey);
let page = 0;
let limit = 20;

const api = axios.create({
  baseURL: baseURL,
  params: {
    ts: time,
    apikey: publicKey,
    hash: hash,
    offset: page,
    limit: limit,
  },
});

export default api;

// type NumberType = {
//   pageNumber: string | undefined;
// };

// // export function Pagination() {
// //   const params = useParams<NumberType>();
// //   const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
// //   const hasPrevious: boolean = pageNumber > 1;
// //   const hasNext: any = !!state.next;

// //   useEffect(() => {
// //     axios.get(
// //       `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${
// //         1 + limit * (pageNumber - 1)
// //       }&limit=${limit}&offset=${page}`
// //     );
// //   }, []);

// //   return (
// //     <div>
// //       {hasPrevious && <Link to={`/page/${pageNumber - 1}`}>Previous</Link>}
// //       {hasNext && <Link to={`/page/${pageNumber + 1}`}>Next</Link>}
// //     </div>
// //   );
// // }
