const scope = { message: "Not finished yet", finished: "Finished..." };
const maxRounds = 10;
let rounds = 1;

function processRecords() {
  const message = "Not finished yet";
  const finished = "Finished...";

  if (rounds === maxRounds) {
    console.log(finished, "All Execution Contexts Closed");
    return;
  }
  rounds++;

  console.log(`Execution Context ${rounds} Created: `, scope);

  return processRecords();
}

processRecords();
