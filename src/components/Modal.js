"use client";

export default function Modal({ open, onClose, title = "Model", children }) {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`
    flex
   backdrop-blur-sm  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
     open ? "" : "hidden"
   }`}
    >
      <div className="relative   mt-16 p-4 w-full max-w-2xl max-h-full">
        <div className="relative border-[#6B7280] border bg-[#141414]  rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold  text-white">{title}</h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
