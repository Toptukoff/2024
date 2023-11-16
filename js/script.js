let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat:false
};


function rememberMytFilms(){
    for (let i= 0; i < 2; i++)
    {
        const a = prompt('Один из последних просмотренных фильмов?', ''), 
        b = prompt('На сколько оцените его?', '');
    
    if (a != null && b !=null && a != '' && a != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    }
    else { 
        console.log('EROOR');
        i--;
    }
        
    }
}
rememberMytFilms();



function detectPersnalLevel() {
    if (personalMovieDB.count < 10) {
        console.log(malo);
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log(GOOOD);
    } else if (personalMovieDB.count >= 30) {
        console.log(NICE);
    } else {
        console.log(ERROR);
    }
}
etectPersnalLevel();


function showMyDB(hidden) {
if (!hidden) {
    console.log(personalMovieDB);
}
}

showMyDB(personalMovieDB.privat);


function writeYourGeneres() {
    for (let i = 1; i<=3; i++){
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
}
}
writeYourGeneres();
