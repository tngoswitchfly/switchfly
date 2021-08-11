// example commonjs module that simply console logs a message

// function named hi that console logs a friendly test message
const hi = () => {
  console.log('hi...i am a commonjs module package.');
}

// export the hi function using standard module.exports object
module.exports = {hi};
