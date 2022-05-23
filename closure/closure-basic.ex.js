function outer() {
  let x = 1;

  return {
    log: log,
  };

  function log() {
    x += 1;
    console.log(x);
  }
}

const fn = outer();

fn.log();
fn.log();
fn.log();
fn.log();










