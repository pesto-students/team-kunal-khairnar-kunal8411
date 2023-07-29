// Generators version
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function* generatorTasks() {
    try {
      console.log("Starting Generator Tasks...");
      yield doTask1();
      yield delay(1000); // Adding a delay between tasks for demonstration purposes
      yield doTask2();
      yield delay(1000);
      yield doTask3();
      console.log("All Generator Tasks completed successfully.");
    } catch (error) {
      console.error("Error occurred during Generator Tasks:", error);
    }
  }
  
  // Helper function to iterate through generator tasks
  async function runGeneratorTasks(generator) {
    const iterator = generator();
    let result = iterator.next();
    while (!result.done) {
      await result.value;
      result = iterator.next();
    }
  }
  
  // Sample implementation of doTask1(), doTask2(), and doTask3() functions
  function doTask1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 1 completed.");
        resolve();
      }, 2000);
    });
  }
  
  function doTask2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 2 completed.");
        resolve();
      }, 1500);
    });
  }
  
  function doTask3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 3 completed.");
        resolve();
      }, 1000);
    });
  }
  
  runGeneratorTasks(generatorTasks);
  