class Conversions {
     static convertToNormalDate (inputDate) {
        var day = String(inputDate.getDate()).padStart(2, '0');
        var month = String(inputDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var year = inputDate.getFullYear();

        inputDate = `${day}.${month}.${year}`;
        return inputDate;
    }
}

module.exports = Conversions;