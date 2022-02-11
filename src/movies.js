// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((eachMovie) => {
    return eachMovie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const stevenMovies = array.filter((eachMovie) => {
    return (
      eachMovie.genre.includes('Drama') &&
      eachMovie.director.includes('Steven Spielberg')
    );
  });
  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const roundToDecimals = (value, n) => {
  return Math.round((value * 10 ** n) / 10 ** n);
};
function scoresAverage(array) {
  if (!array.length) return 0;
  const average = array.reduce((sum, movieScore) => {
    if (movieScore.score === '') {
      return (sum += 0) / array.length;
    }
    return (sum += movieScore.score);
  }, 0);
  return parseFloat((average / array.length).toFixed(2)); //parseFloat((sumOfScores / array.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  if (!array.length) return 0;
  const sumOfDrama = array.reduce((sum, dramaScore) => {
    if (dramaScore.genre.includes('Drama')) {
      return (sum += dramaScore.score);
    } else if (!dramaScore.genre.includes('Drama')) {
      return 0;
    }
  }, 0);
  return parseFloat((sumOfDrama / array.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  array.sort(function (a, b) {
    if (a.year === b.year) {
    }
    return a.year - b.year;
  });
  return Array.from(array);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let newArray = Array.from(array);
  newArray.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  return newArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
