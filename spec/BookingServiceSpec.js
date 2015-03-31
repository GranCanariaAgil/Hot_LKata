describe("given a date when the hotel is empty", function () {
    describe("when the customer make a book on a nuptial suite", function () {
        it("should be the same price with all services or without any", function () {
            var roomType = RoomTypes.NUPTIAL_SUITE;
            var customerId = "1234";
            var bookingDate = new BookingDate("30-03-2015", "10-04-2015");
            var nuptialWithAllServicesRequest = new BookingRequest(bookingDate, roomType, customerId, [Services.WIFI,
                Services.EARLY_CHECK_IN, Services.LATE_CHECKOUT, Services.LAUNDRY]);
            var nuptialWithNoServicesRequest = new BookingRequest(bookingDate, roomType, customerId, []);
            var noServicesPrice = BookingService.checkPrice(nuptialWithNoServicesRequest);
            var allServicesPrice = BookingService.checkPrice(nuptialWithAllServicesRequest);
            expect(allServicesPrice).toEqual(noServicesPrice);
        });
    });

    describe("when the customer make a book on a suite", function () {
        it("should be cheaper when it includes only wifi and latecheck than when it includes all services", function () {
            var roomType = RoomTypes.SUITE;
            var customerId = "1234";
            var bookingDate = new BookingDate("30-03-2015", "10-04-2015");
            var suiteWithAllServicesRequest = new BookingRequest(bookingDate, roomType, customerId, [Services.WIFI,
                Services.EARLY_CHECK_IN, Services.LATE_CHECKOUT, Services.LAUNDRY]);
            var suiteWithWifiAndLateCheckoutServicesRequest = new BookingRequest(bookingDate, roomType, customerId, [Services.WIFI, Services.LATE_CHECKOUT]);
            var twoServicesPrice = BookingService.checkPrice(suiteWithWifiAndLateCheckoutServicesRequest);
            var allServicesPrice = BookingService.checkPrice(suiteWithAllServicesRequest);
            expect(twoServicesPrice).toBeLessThan(allServicesPrice);
        });
    });
});
