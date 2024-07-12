import process from './my-custom-module.js';

function getProcessEnv1() {
  return process.env;
}

function getProcessEnv2() {
  const env = process.env;
  return env;
}

it.failing("should reference imported module", function() {
  expect(getProcessEnv1()).toBe(12345);
  expect(getProcessEnv2()).toBe(12345);
});
