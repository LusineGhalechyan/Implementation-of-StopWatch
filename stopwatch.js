
function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running) 
      return 'Stopwatch has already started!';
    
    running = true; 

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) 
      return 'Stopwatch is not started';

    running = false; 
      
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds; 
  };

  this.reset = function() { 
    startTime = null;
    endTime = null;
    running = false; 
    duration = 0 
  };

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}

const sw = new Stopwatch()
sw.start();
sw.start();
sw.stop();
sw.duration;
sw.reset()
