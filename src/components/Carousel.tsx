import React, { useState } from 'react';


export default function Carousel({ items }) {
    const [currentItem, setCurrentItem] = useState(0);

    function handlePreviousClick() {
        if (currentItem === 0) {
            setCurrentItem(items.length - 1);
        } else {
            setCurrentItem(currentItem - 1);
        }
    }

    function handleNextClick() {
        if (currentItem === items.length - 1) {
            setCurrentItem(0);
        } else {
            setCurrentItem(currentItem + 1);
        }
    }

    return (
        <div className="relative overflow-hidden">
          <button
            className="absolute top-0 left-0 mt-4 ml-4 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            onClick={handlePreviousClick}
          >
            Previous
          </button>
          <div className="flex items-center">
            {items[currentItem]}
          </div>
          <button
            className="absolute top-0 right-0 mt-4 mr-4 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      );
}