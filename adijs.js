function convertTemperature() {
    let temperature = parseFloat(document.getElementById("input").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let resultElement = document.getElementById("result");
    let result;
  
    if (inputUnit === "celsius") {
      result = {
        fahrenheit: (temperature * 9/5) + 32,
        kelvin: temperature + 273.15
      };
    } else if (inputUnit === "fahrenheit") {
      result = {
        celsius: (temperature - 32) * 5/9,
        kelvin: (temperature - 32) * 5/9 + 273.15
      };
    } else if (inputUnit === "kelvin") {
      result = {
        celsius: temperature - 273.15,
        fahrenheit: (temperature - 273.15) * 9/5 + 32
      };
    }
  
    resultElement.innerHTML = `Celsius: ${result.celsius ? result.celsius.toFixed(2) : ''} 
                              Fahrenheit: ${result.fahrenheit ? result.fahrenheit.toFixed(2) : ''} 
                              Kelvin: ${result.kelvin ? result.kelvin.toFixed(2) : ''}`;
  }
  