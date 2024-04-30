import getTopRatedMovieApi from "../apis/getApi.js";

const moiveData = await getTopRatedMovieApi();
let movieStore = [];

moiveData.forEach((data, idx) => {
  movieStore[idx] = {
    id: data.id,
    title: data.title,
    img: data.poster_path,
    overview: data.overview,
    rating: data.vote_average,
  };
});

export default movieStore;
