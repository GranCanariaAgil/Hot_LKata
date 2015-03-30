var BookingService = (function () {
    var priceCalculator = new PriceService();
    function checkPrice(booking) {
        return priceCalculator.getPriceOf(booking);
    }

    return {
        checkPrice: checkPrice
    }
}());