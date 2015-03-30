describe("given a date when the hotel is empty", function () {
    describe("when the customer make a book on a nuptial suite", function () {
        it("should be the same price with all services or without any", function () {
            var bookingDate = new BookingDate("30-03-2015", "10-04-2015");
            var nuptialWithAllServicesRequest = new BookingRequest(bookingDate, roomType, customrtId, ["wifi", "laundry", "early checkIn", "late checkout"]);
            var nuptialWithNoServicesRequest = new BookingRequest(bookingDate, roomType, customrtId, []);
            var noServicesPrice = BookingService.checkPrice(nuptialWithNoServicesRequest);
            var allServicesPrice = BookingService.checkPrice(nuptialWithAllServicesRequest);
            expect(allServicesPrice).toEqual(noServicesPrice);
        });
    });
});