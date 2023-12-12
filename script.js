// https://www.weatherapi.com/my/
// Insert your API key here
const API_KEY = "";

const requestDatas = async () => {
  var q = document.getElementById("location-input");
  if (q.value.length === 0) return alert("ajaj")

  const locName = document.getElementById("locName");
  const tzDetails = document.getElementById("tzDetails");
  const rgCountry = document.getElementById("rgCountry");
  const lastUpdated = document.getElementById("lastUpdated");
  const tempCF = document.getElementById("tempCF");
  const weatherP = document.getElementById("weatherP");
  const weatherImage = document.getElementById("weatherImage");

  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${q.value}&aqi=no`;
  const res = await fetch(URL);
  const parsed = await res.json();

  var { name, region, country, tz_id, localtime } = parsed.location;
  var { last_updated, temp_c, temp_f } = parsed.current;
  var { text, icon } = parsed.current.condition;

  last_updated = last_updated.replace("-", "/").replace("-", "/");
  localtime = localtime.replace("-", "/").replace("-", "/");
  temp_c = `${temp_c} °C`;
  temp_f = `${temp_f} °F`;

  locName.innerText = name;
  rgCountry.innerText = `${region}, ${country}`;
  tzDetails.innerText = `${tz_id}, ${localtime}`;
  lastUpdated.innerText = `${last_updated}`;
  tempCF.innerText = `${temp_c} / ${temp_f}`;
  weatherP.innerText = text;
  weatherImage.setAttribute("src", icon);

  // console.log("success");
};

// const formatDate = (date) => {
//   date = new Date(date);

//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var ampm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   var strTime = hours + ":" + minutes + " " + ampm;
//   return strTime;
// };
