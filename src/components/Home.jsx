import MovieSection from "./MovieSection";
import MainMovieSection from "./MainMovieSection";
const Home = function () {
  return (
    <div>
      <MainMovieSection />
      <MovieSection saga="Harry Potter" />
      <MovieSection saga="Lord of the Rings" />
      <MovieSection saga="Star Wars" />
      <MovieSection saga="Jurassic World" />
      <MovieSection saga="Lupin" />
      <MovieSection saga="Christmas" />
    </div>
  );
};
export default Home;
