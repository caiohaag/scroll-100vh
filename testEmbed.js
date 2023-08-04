setTimeout(() => {
    console.log('Redirecting in 3...');
  }, 1000)

setTimeout(() => {
    console.log('Redirecting in 2...');
  }, 2000)

setTimeout(() => {
    console.log('Redirecting in 1...');
  }, 3000)

setTimeout(() => {
    window.location.href = "http://www.google.com.br";
  }, 4000)
