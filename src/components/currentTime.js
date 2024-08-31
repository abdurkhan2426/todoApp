import React, { useState } from 'react';

function getTime() {
    let currentTime = new Date();
    let options = { timeStyle: 'short', hour12: true };
    let timeString = currentTime.toLocaleTimeString('en-US', options);
    return timeString
}

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(getTime());

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
}

export default CurrentTime;