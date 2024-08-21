document.getElementById('convertButton').addEventListener('click', function() {
  const temperatureInput = document.getElementById('temperature').value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  let result = '';

  if (!temperatureInput || isNaN(temperatureInput)) {
      result = 'Please enter a valid number.';
  } else {
      const temp = parseFloat(temperatureInput);
      result = convertTemperature(temp, unit);
  }

  document.getElementById('resultDisplay').textContent = result;
});

function convertTemperature(temp, unit) {
  let convertedTemp = '';
  
  switch (unit) {
      case 'celsius':
          convertedTemp = `${((temp * 9/5) + 32).toFixed(2)} °F`;
          break;
      case 'fahrenheit':
          convertedTemp = `${((temp - 32) * 5/9).toFixed(2)} °C`;
          break;
      case 'kelvin':
          convertedTemp = `${(temp + 273.15).toFixed(2)} K`;
          break;
  }

  return `Converted Temperature: ${convertedTemp}`;
}
