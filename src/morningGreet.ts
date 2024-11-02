const monarchCats = ["Garfield", "Felix", "Grumpy"];

export const greetInTheMorning = (name: string) => {
  let greet = "Good morning, ";

  if (monarchCats.includes(name)) {
    greet = "Good morning, your Majesty, ";
  }

  return greet + name + "!";
};
