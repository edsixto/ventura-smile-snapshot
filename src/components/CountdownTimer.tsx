
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [currentPrice, setCurrentPrice] = useState<number>(599);
  const [nextPrice, setNextPrice] = useState<number>(699);

  // Set the target date for first price increase (Friday at 10am EST)
  // For demo purposes, setting this to a date in the near future
  const getTargetDate = () => {
    const now = new Date();
    // Find the next Friday
    const daysUntilFriday = (5 + 7 - now.getDay()) % 7;
    const fridayDate = new Date(now);
    fridayDate.setDate(now.getDate() + daysUntilFriday);
    fridayDate.setHours(10, 0, 0, 0); // 10am
    
    // If it's already past 10am on a Friday, move to next Friday
    if (now > fridayDate) {
      fridayDate.setDate(fridayDate.getDate() + 7);
    }
    
    return fridayDate;
  };

  // Calculate the second target date (3 days after first increase)
  const getSecondTargetDate = () => {
    const firstTarget = getTargetDate();
    const secondTarget = new Date(firstTarget);
    secondTarget.setDate(firstTarget.getDate() + 3);
    return secondTarget;
  };

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const firstTarget = getTargetDate();
      const secondTarget = getSecondTargetDate();
      
      // Determine current price and next price based on current time
      if (now > secondTarget) {
        // After second deadline
        setCurrentPrice(799);
        setNextPrice(799);
      } else if (now > firstTarget) {
        // Between first and second deadline
        setCurrentPrice(699);
        setNextPrice(799);
      } else {
        // Before first deadline
        setCurrentPrice(599);
        setNextPrice(699);
      }
      
      // Calculate time remaining to the appropriate deadline
      const targetDate = now > firstTarget ? secondTarget : firstTarget;
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format the next date with year included
  const formatNextDate = () => {
    const targetDate = new Date();
    const now = new Date();
    const firstTarget = getTargetDate();
    
    if (now > firstTarget) {
      // Show second target date
      return getSecondTargetDate().toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    } else {
      // Show first target date
      return firstTarget.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    }
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-green-500" />
        <h3 className="font-bold text-green-800">Limited Time Offer</h3>
      </div>
      
      <div className="mb-2">
        <span className="text-2xl font-bold text-green-900">${currentPrice}</span>
        <span className="text-gray-500 ml-2 line-through">${nextPrice}</span>
      </div>
      
      <div className="text-sm text-green-800 mb-3">
        Price increases on {formatNextDate()}
      </div>
      
      <div className="grid grid-cols-4 gap-1 text-center">
        <div className="bg-green-100 rounded p-1">
          <div className="text-lg font-bold">{timeRemaining.days}</div>
          <div className="text-xs text-green-700">days</div>
        </div>
        <div className="bg-green-100 rounded p-1">
          <div className="text-lg font-bold">{timeRemaining.hours}</div>
          <div className="text-xs text-green-700">hours</div>
        </div>
        <div className="bg-green-100 rounded p-1">
          <div className="text-lg font-bold">{timeRemaining.minutes}</div>
          <div className="text-xs text-green-700">mins</div>
        </div>
        <div className="bg-green-100 rounded p-1">
          <div className="text-lg font-bold">{timeRemaining.seconds}</div>
          <div className="text-xs text-green-700">secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
