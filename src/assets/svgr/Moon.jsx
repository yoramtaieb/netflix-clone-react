import * as React from "react";

function Togglemoon(props) {
  return (
    <svg
      height={25}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={22.5} cy={22.5} r={22.5} fill="#000" />
      <path
        d="M18.826 23.662c-1.885-6.026 1.823-12.548 8.282-14.569.462-.144.925-.26 1.388-.352a15.216 15.216 0 00-10.92-.691C9.527 10.568 5.042 19.135 7.56 27.186c2.519 8.05 11.086 12.535 19.137 10.017a15.217 15.217 0 008.579-6.79c-.433.189-.88.357-1.342.501-6.459 2.02-13.222-1.227-15.107-7.252z"
        fill="#FFF"
      />
    </svg>
  );
}

export default Togglemoon;
