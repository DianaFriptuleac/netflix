import { Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieSection from "./MovieSection";

const Search = function () {
  const [params] = useSearchParams(); // hook x leggere i parametri della URL
  const q = (params.get("q") || "").trim(); // legge ?q=... e pulisce spazi

  if (!q) {
    <Alert variant="danger">No movie found!</Alert>;
  }
  return <MovieSection saga={q} noCarousel />;
};
export default Search;
