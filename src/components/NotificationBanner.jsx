import React from "react";

const NotificationBanner = ({ onClose }) => (
  <div className="bg-yellow-100 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100 px-4 py-2 flex items-center justify-between">
    <span>
      🎉 Special Broadcast: Tune in for our live DJ set tonight at 8PM!
    </span>
    <button
      onClick={onClose}
      aria-label="Dismiss notification"
      className="ml-4 text-xl font-bold"
    >
      ×
    </button>
  </div>
);

export default NotificationBanner;
