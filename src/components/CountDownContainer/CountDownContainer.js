import React from 'react';
import './CountDownContainer.scss';
import { useEffect } from 'react';
import workTimeSvg from '../../assets/work-time-pana.svg'

const CountDownContainer = () => {
  useEffect(() => {
    function getTimeRemaining(endTime) {
      const total = Date.parse(endTime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(clockId, sectionId, endTime) {
      const clock = document.getElementById(clockId);
      const section = document.getElementById(sectionId);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');
      const sectionDaysSpan = section.querySelector('.section-days');
      const sectionHoursSpan = section.querySelector('.section-hours');
      const sectionMinutesSpan = section.querySelector('.section-minutes');

      function updateClock() {
        const t = getTimeRemaining(endTime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        sectionDaysSpan.innerHTML = t.days;
        sectionHoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        sectionMinutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }

      updateClock();
      const timeInterval = setInterval(updateClock, 1000);
    }

    const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clock-container', 'section-container', deadline);
  }, [])

  return (
    <div className="text-center bg-white py-5 rounded">
      <div id="section-container" className="my-4">
        <img className="img-fluid" src={workTimeSvg} alt="work-time" />
        <h6 className="mt-4 font-weight-bold">Section Will be Available in <span className="section-days"></span> days. <span className="section-hours"></span> hours. <span className="section-minutes"></span> minutes</h6>
      </div>
      <div id="clock-container" className="my-4">
        <div>
          <span className="days"></span>
          <div className="clock-text">Days</div>
        </div>
        <div>
          <span className="hours"></span>
          <div className="clock-text">Hours</div>
        </div>
        <div>
          <span className="minutes"></span>
          <div className="clock-text">Minutes</div>
        </div>
        <div>
          <span className="seconds"></span>
          <div className="clock-text">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountDownContainer;