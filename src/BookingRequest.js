var BookingRequest = (function (bookingDate, roomType, customer, services) {
    var self = this;
    self.bookingDate = bookingDate;
    self.roomType = roomType;
    self.customer = customer;
    self.services = services;

    return {
        getRoomType: function(){
            return self.roomType;
        },
        getServices: function(){
            return self.services;
        }
    }
});