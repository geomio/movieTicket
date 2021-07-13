
//constructor
function Ticket(movieId, userAge, evening, movieName, ticketTime) {
    this.movieId = movieId;
    this.userAge = userAge;
    this.evening = evening;
    this.newRelease = false;
    this.movieName = movieName
    this.ticketTime = ticketTime
    this.ticketPrice = 0;
};


//prototype function for ticket
Ticket.prototype.calculatePrice = function () {
    if (this.userAge >= 50) {
        this.ticketPrice += 5
    } else if (this.userAge <= 49) {
        this.ticketPrice += 7
    };
    if (this.evening === 2) {
        this.ticketPrice += 3;  
    };
    if (this.newRelease === 1) {
        this.ticketPrice += 3;
    };
    if (this.newRelease === 2) {
        this.ticketPrice += 1;
    };
    
};


$(document).ready(function() {
    $('form#userInfoForm').submit(function(event) {
        const inputMovie = $('select#movieName').val();
        const testName = $('#movieName').find(":selected").data('title')
        const testTime = $('#timeOfDay').find(":selected").data('time')
        const inputAge = parseInt($('input#userAge').val());
        const inputTime = $('select#timeOfDay').val();
        let userTicket = new Ticket( inputMovie, inputAge, inputTime, testName, testTime)
        userTicket.calculatePrice();
        console.log("test time:", inputTime)
        console.log("age test:",inputAge)
        console.log("test movie:", inputMovie)
        console.log("multi data test:", testName)
        console.log("multi data test2:", testTime)
        console.dir(userTicket);
        event.preventDefault();
    });
  });