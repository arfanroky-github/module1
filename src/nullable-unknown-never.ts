const searchName = (value: string | null) => {
  if (value === null) console.log("There is nothing to search");
  else console.log("searching");
};

searchName(null);

const carSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`Card speed is ${convertedSpeed}`);
    return;
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`Card speed is ${convertedSpeed} ${unit}`);
  } else {
    console.log(`There is wrong type!`);
  }
};

carSpeed(10);
carSpeed(`10 kmh^-1`);
carSpeed(true);

function throwError(msg: string): never {
  throw new Error(msg);
}

throwError('Error')