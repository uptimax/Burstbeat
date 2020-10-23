export function log(e) {
  console.log(JSON.stringify(e));
}

export function test(e = '') {
  console.log("test", e);
}