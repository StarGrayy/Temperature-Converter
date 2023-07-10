function convertTemperature(unit) {
  const celsiusInput = document.getElementById("celsiusInput");
  const fahrenheitInput = document.getElementById("fahrenheitInput");
  const kelvinInput = document.getElementById("kelvinInput");
  const rankineInput = document.getElementById("rankineInput");
  
  let celsiusValue, fahrenheitValue, kelvinValue, rankineValue;
  
  if (unit === "celsius") {
    celsiusValue = parseFloat(celsiusInput.value);
    fahrenheitValue = (celsiusValue * 9/5) + 32;
    kelvinValue = celsiusValue + 273.15;
    rankineValue = (celsiusValue + 273.15) * 9/5;
  } else if (unit === "fahrenheit") {
    fahrenheitValue = parseFloat(fahrenheitInput.value);
    celsiusValue = (fahrenheitValue - 32) * 5/9;
    kelvinValue = (fahrenheitValue + 459.67) * 5/9;
    rankineValue = fahrenheitValue + 459.67;
  } else if (unit === "kelvin") {
    kelvinValue = parseFloat(kelvinInput.value);
    celsiusValue = kelvinValue - 273.15;
    fahrenheitValue = (kelvinValue * 9/5) - 459.67;
    rankineValue = kelvinValue * 9/5;
  } else if (unit === "rankine") {
    rankineValue = parseFloat(rankineInput.value);
    celsiusValue = (rankineValue - 491.67) * 5/9;
    fahrenheitValue = rankineValue - 459.67;
    kelvinValue = (rankineValue - 491.67) * 5/9 + 273.15;
  }
  
  celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
  fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);
  kelvinInput.value = isNaN(kelvinValue) ? "" : kelvinValue.toFixed(2);
  rankineInput.value = isNaN(rankineValue) ? "" : rankineValue.toFixed(2);
}
