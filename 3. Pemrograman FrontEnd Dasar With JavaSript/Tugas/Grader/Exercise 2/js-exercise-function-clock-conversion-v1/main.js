function clockConversion(hour, params) {
  if (hour < 1) {
    return "Hour cannot be under 1"
  } else if (params === "minutes") {
    return hour * 60
  } else if (params === "seconds") {
    return hour * 3600
  }
}
  
  module.exports = clockConversion;