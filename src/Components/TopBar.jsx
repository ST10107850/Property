// import React from 'react'

export const TopBar = () => {
  return (
    <div className="bg-gray-100 py-2 hidden lg:block">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 lg:w-2/3">
            <ul className="flex space-x-4 text-sm text-gray-600">
              <li className="flex items-center">
                <i className="fa fa-envelope mr-2 text-[#f35525]"></i>{" "}
                samuelnhlakanipho@gmail.com
              </li>
              <li className="flex items-center">
                <i className="fa fa-map mr-2 text-[#f35525]"></i> 24 Barnato
                Street, Johannesburrg, FL 215
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 flex justify-end">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/minthu"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
