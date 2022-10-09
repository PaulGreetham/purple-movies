// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5934505c9e4e3f28715e57ccc3ecc2d6&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=5934505c9e4e3f28715e57ccc3ecc2d6&query=";

