let intervals = [];
    let startTime;
    let endTime;
    let intervalId;
    let totalDuration = 0;
    let clockState = 'clock-out';

    function toggleClock() {
      if (clockState === 'clock-out') {
        clockIn();
      } else {
        clockOut();
      }
    }

    function clockIn() {
      startTime = new Date();
      clockState = 'clock-in';
      updateToggleButton();
      intervalId = startTimer();
    }

    function clockOut() {
      endTime = new Date();
      clockState = 'clock-out';
      updateToggleButton();
      clearInterval(intervalId);
      saveInterval();
      displayIntervals();
      calculateTotalDuration();
    }

    function updateToggleButton() {
      let circleElement = document.querySelector('.circle');
      let toggleButtonTextElement = document.querySelector('.toggle-button-text');
      
      if (clockState === 'clock-in') {
        circleElement.style.transform = 'translateX(150px)';
        toggleButtonTextElement.innerText = 'Clock In';
      } else {
        circleElement.style.transform = 'translateX(0)';
        toggleButtonTextElement.innerText = 'Clock Out';
      }
    }

    function startTimer() {
      let timerElement = document.getElementById('timer');
      return setInterval(function() {
        let currentTime = new Date().getTime() - startTime.getTime();
        let hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((currentTime % (1000 * 60)) / 1000);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        timerElement.innerText = hours + ':' + minutes + ':' + seconds;
      }, 1000);
    }

    function saveInterval() {
      let interval = {
        startTime: startTime,
        endTime: endTime
      };
      intervals.push(interval);
    }

    function displayIntervals() {
      let intervalsElement = document.getElementById('intervals');
      intervalsElement.innerHTML = '';

      for (let i = 0; i < intervals.length; i++) {
        let intervalElement = document.createElement('p');
        let startTimeString = formatTime(intervals[i].startTime);
        let endTimeString = formatTime(intervals[i].endTime);
        let duration = calculateDuration(intervals[i].startTime, intervals[i].endTime);
        intervalElement.innerText = 'Interval ' + (i + 1) + ': ' + startTimeString + ' - ' + endTimeString + ' (' + duration + ')';
        intervalsElement.appendChild(intervalElement);
      }
    }

    function calculateDuration(startTime, endTime) {
      let duration = endTime.getTime() - startTime.getTime();
      let hours = Math.floor(duration / (1000 * 60 * 60));
      let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((duration % (1000 * 60)) / 1000);

      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');

      return hours + ':' + minutes + ':' + seconds;
    }

    function calculateTotalDuration() {
      totalDuration = intervals.reduce(function(acc, interval) {
        return acc + (interval.endTime.getTime() - interval.startTime.getTime());
      }, 0);

      let hours = Math.floor(totalDuration / (1000 * 60 * 60));
      let minutes = Math.floor((totalDuration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((totalDuration % (1000 * 60)) / 1000);

      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');

      document.getElementById('totalDuration').innerText = 'Total Duration: ' + hours + ':' + minutes + ':' + seconds;
    }

    function formatTime(time) {
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      let period = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12;
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');

      return hours + ':' + minutes + ':' + seconds + ' ' + period;
    }