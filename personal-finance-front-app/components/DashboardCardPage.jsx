import React from "react";
import NavLogo from "./NavLogo";

export default function DashboardCardPage() {
  return (
    <div className="flex flex-row">
      <div className="card w-96 bg-primary text-neutral-content">
        <div className="card-body flex-col">
          <h2 className="card-title">
            <NavLogo />
            <span>Geld</span>
          </h2>
          <div className="flex-row justify-center items-center">
            <div className="flex-col items-center">
              <p>Cash</p>
              <p>100,000,00</p>
            </div>
            <div className="card-actions justify-end">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2692 10.0015C21.6815 9.6826 22.2743 9.7583 22.5932 10.1706C27.1419 16.0511 27.1289 23.744 22.5945 29.632C22.2764 30.045 21.6838 30.122 21.2708 29.8039C20.8578 29.4859 20.7808 28.8932 21.0989 28.4802C25.1125 23.2686 25.1207 16.5234 21.1001 11.3256C20.7812 10.9132 20.8569 10.3205 21.2692 10.0015Z"
                  fill="white"
                />
                <path
                  d="M17.5023 12.4362C17.9143 12.1169 18.5071 12.1921 18.8264 12.6042C22.2385 17.0076 22.2246 22.7872 18.8281 27.1969C18.51 27.6098 17.9174 27.6867 17.5044 27.3687C17.0915 27.0506 17.0145 26.458 17.3326 26.045C20.2089 22.3107 20.2163 17.4797 17.3343 13.7604C17.015 13.3483 17.0902 12.7555 17.5023 12.4362Z"
                  fill="white"
                />
                <path
                  d="M15.6918 15.9561C15.3739 15.543 14.7813 15.4658 14.3682 15.7838C13.9551 16.1017 13.878 16.6943 14.1959 17.1074C15.4989 18.8004 15.5068 20.9748 14.1964 22.6748C13.8781 23.0877 13.9548 23.6803 14.3677 23.9986C14.7805 24.3168 15.3732 24.2401 15.6914 23.8273C17.528 21.4447 17.5146 18.3244 15.6918 15.9561Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
