import React from "react";

const Info = (props) => {
  const { cart } = props;


  let time = 0;
  for (const info of cart) {
    time = time + info.time;
    // console.log(time);
  }

  const breakTime = (time) => {
    const restDuration = document.getElementById("breakTime");
    restDuration.innerText = time;
  };

  return (
    <div>
      <div className="information mx-auto bg-white text-black p-7 mt-20">
        {/* <h1 className="">{cart.length}</h1> */}
        <div className="">
          {/* My Name ANd Location */}
          <h1 className="text-lg font-bold">Bayejid Hawlader</h1>
          <p>Dhaka, Bangladesh</p>

          {/* My Some Detsils */}
          <div className="flex justify-between bg-blue-100 px-6 py-3 mt-5 rounded-md">
            <div>
              <h3>
                <span className="text-2xl font-bold text-black">72</span>
                <span className="text-gray-500 text-1xl"> kg</span>
              </h3>
              <p className="text-center text-gray-800">Weight</p>
            </div>

            <div>
              <h3>
                <span className="text-2xl font-bold text-black">5.9</span>
                <span className="text-gray-500 text-1xl">fit</span>
              </h3>
              <p className="text-center text-gray-800">Height</p>
            </div>

            <div>
              <h3>
                <span className="text-2xl font-bold text-black">23</span>
                <span className="text-gray-500 text-1xl">years</span>
              </h3>
              <p className="text-center text-gray-800">Old</p>
            </div>
          </div>
        </div>
        {/* <p>Card Lengts {cart.length}</p> */}

        {/* Add A Break
         */}
        <div className="mt-5">
          <h1 className="text-lg font-bold">Add A Break</h1>
          <div
            id="secondsBtn"
            className="flex justify-between bg-blue-100 px-6 py-3 mt-5 rounded-md">
            <button
              onClick={() => breakTime(1)}
              className="h-10 w-10 rounded-full secBtn bg-white">1m
            </button>

            <button
              onClick={() => breakTime(2)}
              className="h-10 w-10 rounded-full secBtn bg-white">2m
            </button>

            <button
              onClick={() => breakTime(3)}
              className="h-10 w-10 rounded-full secBtn bg-white">3m
            </button>

            <button
              onClick={() => breakTime(4)}
              className="h-10 w-10 rounded-full secBtn bg-white">4m
            </button>
          </div>
        </div>

        {/* Exercise Details
         */}
        <div className="mt-6">
          <h3 className="text-xl font-medium">Exercise Details</h3>
          <div className="flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-3">
            <p>
              <span className="font-bold">Study time</span>
            </p>
            <p>
              <span className="text-gray-500">
                {/* <span>{cart.length} </span>seconds */}
                <span>{time} </span>Minitue
              </span>
            </p>
          </div>
          <div className="flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-3">
            <p>
              <span className="font-bold">
                Break time : <span></span>
              </span>
            </p>
            <p>
              <span className="text-gray-500">
                {" "}
                <span id="breakTime"></span> Minitue
              </span>
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-5 inline-flex w-full justify-center rounded-lg bg-success px-5 py-4 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Activity Complete
        </button>
      </div>
    </div>
  );
};

export default Info;
