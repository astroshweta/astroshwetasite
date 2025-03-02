"use client";
import React, { useState } from "react";
import slotsDataJson from "../../utils/slots.json";

// Define types
interface Slot {
  time: string;
  available: boolean;
}

interface SlotDate {
  date: string;
  slots: Slot[];
}

const SlotSelection: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; time: string } | null>(null);

  const handleSlotClick = (date: string, time: string) => {
    setSelectedSlot({ date, time });
  };
  const handleProceedToPayment = () => {
    if (!selectedSlot) {
      alert("Please select a slot");
      return;
    }
  
    const razorpayFormURL = `https://rzp.io/rzp/k0bSlLD?slot_date=${selectedSlot.date}&slot_time=${selectedSlot.time}`;
  
    sessionStorage.setItem("selectedSlot", JSON.stringify(selectedSlot));
    window.location.href = razorpayFormURL;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select a Slot</h2>

      {slotsDataJson.slotsData.map((slotDate: SlotDate) => (
        <div key={slotDate.date} className="mb-4">
          <h3 className="text-lg font-semibold">{slotDate.date}</h3>

          <div className="flex gap-2 flex-wrap">
            {slotDate.slots.map((slot, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-lg transition-all ${
                  slot.available
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } ${
                  selectedSlot &&
                  selectedSlot.date === slotDate.date &&
                  selectedSlot.time === slot.time
                    ? "border-black"
                    : ""
                }`}
                onClick={() => slot.available && handleSlotClick(slotDate.date, slot.time)}
                disabled={!slot.available}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg"
        onClick={handleProceedToPayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default SlotSelection;
