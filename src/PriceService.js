var PriceService = (function () {
    var roomPriceFor = {
        "nuptial suite": 63,
        "suite": 58
    };

    var servicesIncludeFor = {
        "nuptial suite": [Services.WIFI, Services.EARLY_CHECK_IN, Services.LATE_CHECKOUT, Services.LAUNDRY],
        "suite": [Services.WIFI, Services.LATE_CHECKOUT]
    };


    var servicesPriceFor = {
        "wifi": 89,
        "laundry": 56,
        "early check in": 49,
        "late checkout": 57
    };

    function remove(includedServices) {
        return {
            from: function (allBookingServices) {
                var res = [];
                allBookingServices.forEach(function(service){
                    if(!includedServices[service]) res.push(service);
                });
                return res;
            }
        }
    }

    function totalServicesPriceFor(booking) {
        var bookingServices = booking.getServices();
        if(bookingServices.length == 0) return 0;
        var servicesToPay = remove(servicesIncludeFor[booking.getRoomType()]).from(bookingServices);

        var total = servicesToPay.reduce(function(accumulatePrice, service, index, arrayValue){
            return accumulatePrice += servicesPriceFor[service];
        });

        return total;
    }

    function getPriceOf(booking) {
        return roomPriceFor[booking.getRoomType()] +
            totalServicesPriceFor(booking);
    }

    return {
        getPriceOf: getPriceOf
    };
});