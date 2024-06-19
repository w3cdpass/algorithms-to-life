import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/BubbleSortAnimation.css';

const array = [5, 3, 8, 4, 2]; // Example array

const BubbleSortAnimation = () => {
  const [items, setItems] = useState(array);
  const [springs, setSprings] = useSpring(() => array.map(() => ({ value: 0 })));

  useEffect(() => {
    const bubbleSort = async () => {
      let arr = [...items];
      let n = arr.length;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setSprings(arr.map(value => ({ value })));
            await new Promise(resolve => setTimeout(resolve, 500));
          }
        }
      }
    };

    bubbleSort();
  }, []);

  return (
    <div className="bubble-sort-animation">
      {springs.map((spring, index) => (
        <animated.div
          key={index}
          className="bubble"
          style={{ height: spring.value.to(v => `${v * 20}px`) }}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default BubbleSortAnimation;
