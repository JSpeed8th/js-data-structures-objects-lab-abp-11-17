const driver = name['sam'];

function updateDriverWithKeyAndValue (object, key, value) {
  const newDriver = {...driver, key, value};
  return newDriver;
}
