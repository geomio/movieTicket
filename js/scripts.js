// let movieList = {}
// let baseMoviePrice = 10;


// function day() {

// }

// function age() {

// }

// function total() {

// }

// function displayMovies() {

// }
//object
let movieTicket = {
    movieName: 'Lego Movie',
    userAge: 65,
    before5pm: true,
    ticketPrice: 0,
}
//constrctor
function Ticket(movieName, userAge, before5pm) {
    this.movieName = movieName;
    this.userAge = userAge;
    this.before5pm = before5pm;
    this.ticketPrice = 0;
}
//prototype function for ticket
Ticket.prototype.calculatePrice = function () {
    if (this.userAge >= 50) {
        this.ticketPrice += 5
    } else if (this.userAge <= 50) {
        this.ticketPrice += 7
    }
    if  // add day price to statement
}

let jimTicket = new Ticket('star wars', 19, false)

console.dir(movieTicket);
console.dir(jimTicket);
