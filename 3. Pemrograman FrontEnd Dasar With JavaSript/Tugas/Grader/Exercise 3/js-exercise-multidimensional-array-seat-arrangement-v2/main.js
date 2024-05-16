function travelSeat(passengers, seatColumn) {
    if (seatColumn < 1) {
        return "Invalid number";
    } else if (passengers.length === 0) {
        return "Oops! tickets not sold!";
    }

    let result = [];
    let seat = [];

    passengers.sort();
    passengers.forEach((penumpang) => {
        seat.push(penumpang);
        if (seat.length == seatColumn) {
            result.push(seat);
            seat = [];
        }
    });

    // console.log(seat)
    // console.log(result);
    let seatAvailable = seatColumn - seat.length;

    if (seat.length < seatColumn && seat.length > 0) {
        for(let i = 0; i < seatAvailable; i++) {
            seat.push("Seat available")
        }
        result.push(seat)
        seat = []
    }

    return result
}

// console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
// console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
// console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
// console.log(travelSeat([], 4));

module.exports = travelSeat