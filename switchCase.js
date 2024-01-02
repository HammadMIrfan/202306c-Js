var City = prompt("Find Your City Weather");

switch (City) {
  case "Hyderabad":
    document.write("The Hyderabad Weather Is 19 Celcius");
    break;

  case "Karachi":
    document.write("The Karachi Weather Is 21 Celcius");
    break;

  case "Islamabad":
    document.write("The Islamabad Weather Is 12 Celcius");
    break;

  case "Lahore":
    document.write("The Lahore Weather Is 28 Celcius");
    break;

  case "Murry":
    document.write("The Murry Weather Is 10 Celcius");
    break;

  default:
    document.write("City Not Found");
    break;
}
