const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);  

// definição da função sendMarsTemperature...

const sendMarsTemperature = (...callback) => {
  return callback;
 }

sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature()), greet(getMarsTemperature()), handleError('Bug')); // imprime "It is currently 47ºF at Mars", por exemplo
