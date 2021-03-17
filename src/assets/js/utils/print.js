export default function printMe() {
  let seconds = 5

  console.log('I get called from print.js!')

  setInterval(() => {
    if (seconds === 0) location.reload()
    console.log(`Page will be realoaded after ${seconds} seconds`)
    seconds--
  }, 1000)
}