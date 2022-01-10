/** @format */

var intern = {
  firstname: "Akanksha",
  lastname: "Shahu",
  designation: "Intern Consulting",
  contact: 7796099752,
  address: {
    house_no: 115,
    house_details: "Datta Nagar , besa, Ghogali Road ",
    city_name: "Nagpur",
    pin_code: 440037,
    country: "India",
  },
};
document.getElementById("intern").innerHTML =
  "I am " +
  "  " +
  intern.firstname +
  "  " +
  intern.lastname +
  " " +
  "My designation is " +
  " " +
  intern.designation +
  "You can contact me on " +
  intern.contact +
  "My address is plot no. " +
  intern.address.house_no +
  " , " +
  intern.address.house_details +
  " , " +
  intern.address.city_name +
  " , " +
  intern.address.pin_code +
  " , " +
  intern.address.country +
  " .";
