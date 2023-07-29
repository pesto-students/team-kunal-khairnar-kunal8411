// Async/Await version
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncTasks() {
    try {
      console.log("Starting Async Tasks...");
      await doTask1();
      await delay(1000); // Adding a delay between tasks for demonstration purposes
      await doTask2();
      await delay(1000);
      await doTask3();
      console.log("All Async Tasks completed successfully.");
    } catch (error) {
      console.error("Error occurred during Async Tasks:", error);
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
  
  asyncTasks();
  