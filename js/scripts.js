
//constructor

function TicketBook() {
    this.tickets = {};
    this.currentId = 0;
  }

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
    if (this.evening === "2") {
        this.ticketPrice += 3;  
    };
    if (this.newRelease === 1) {
        this.ticketPrice += 3;
    };
    if (this.newRelease === 2) {
        this.ticketPrice += 1;
    };
    
};

TicketBook.prototype.addTicket = function(ticket) {
    ticket.id = this.assignId();
    this.tickets[ticket.id] = ticket;
  }
  
  TicketBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }
  
  TicketBook.prototype.findTicket = function(id) {
    if (this.tickets[id] != undefined) {
      return this.tickets[id];
    }
    return false;
  }

  TicketBook.prototype.deleteTicket = function(id) {
    if (this.tickets[id] === undefined) {
      return false;
    }
    delete this.tickets[id];
    return true;
  }

function ticketLister(toDisplay) {
    let ticketList = $("ul#tickets");
    let htmlForTicketInfo = "";
    Object.keys(toDisplay.tickets).forEach(function(key) {
        const ticket = toDisplay.findTicket(key);
        htmlForTicketInfo += "<li id=" + ticket.id + ">" + ticket.movieName + " " + ticket.ticketTime + "</li>"; 
    });
    ticketList.html(htmlForTicketInfo)
};

let ticketBook = new TicketBook();


function showTicket(mainTicketId) {
    const mainTicket = ticketBook.findTicket(mainTicketId);
    $("#show-ticket").show();
    $(".movieNameInputArea").html(mainTicket.movieName);
    $(".showTime").html(mainTicket.ticketTime);
    $(".price").html(mainTicket.ticketPrice);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + mainTicketId.id + ">Delete</button>")
};

function attachTicketListeners() {
    $("ul#tickets").on("click", "li", function() {
      showTicket(this.id);
    });
    $("#buttons").on("click", ".deleteButton", function() {
      ticketBook.deleteTicket(this.id);
      $("#show-ticket").hide();
      displayContactDetails(ticketBook);
    });
  };
  

$(document).ready(function() {
    attachTicketListeners();
    $('form#userInfoForm').submit(function(event) {
        event.preventDefault();
        const inputMovie = $('select#movieName').val();
        const testName = $('#movieName').find(":selected").data('title')
        const testTime = $('#timeOfDay').find(":selected").data('time')
        const inputAge = parseInt($('input#userAge').val());
        const inputTime = $('select#timeOfDay').val();
        let userTicket = new Ticket( inputMovie, inputAge, inputTime, testName, testTime)
        userTicket.calculatePrice();
        ticketBook.addTicket(userTicket);
        console.log(userTicket);
        console.log(ticketBook);
        console.log("this to stop");  
    });
  });
