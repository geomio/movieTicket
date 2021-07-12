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
    isNewRelease: true,
    ticketPrice: 0,
}

//constructor
function Ticket(movieName, userAge, before5pm) {
    this.movieName = movieName;
    this.userAge = userAge;
    this.before5pm = before5pm;
    this.newRelease = newRelease;
    this.ticketPrice = 0;
};

// do these need to be prototypes if they are replacing original input into the object and can I build
Ticket.prototype.timeToBoolean = function () {
    if (userTime >= 6) {
        userTime === false
    } else if (userTime >=5) {
        userTime === true
    };
};


//prototype function for ticket
Ticket.prototype.calculatePrice = function () {
    if (this.userAge >= 50) {
        this.ticketPrice += 5
    } else if (this.userAge <= 49) {
        this.ticketPrice += 7
    }
    if (this.newRelease === true) {
        this.ticketPrice += 3;
    };
    if (this.before5pm === false) {
        this.ticketPrice += 3;  
    };
};

    // true and false will be determined for time of day
let jimTicket = new Ticket('star wars', 19, false)
let timTicket = new Ticket('bill nye', 55, true) 
let userTime = 6
let timTime = 2
// times will show 1-12 allowing only from 1-12 selections in html area

console.dir(movieTicket);
console.dir(jimTicket);
console.dir(timTicket);
