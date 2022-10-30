import * as React from "react";
import { SVGProps } from "react";
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.347 2C40.6 2 45.475 7.092 45.475 14.67v17.66C45.475 39.908 40.6 45 33.347 45H14.603C7.349 45 2.475 39.908 2.475 32.33V14.67C2.475 7.092 7.349 2 14.603 2h18.744Zm0 3H14.603c-5.544 0-9.128 3.794-9.128 9.67v17.66c0 5.876 3.584 9.67 9.128 9.67h18.744c5.546 0 9.128-3.794 9.128-9.67V14.67c0-5.876-3.582-9.67-9.128-9.67Zm-18.63 13.405a1.5 1.5 0 0 1 1.5 1.5v13.72a1.5 1.5 0 0 1-3 0v-13.72a1.5 1.5 0 0 1 1.5-1.5Zm9.334-6.568a1.5 1.5 0 0 1 1.5 1.5v20.286a1.5 1.5 0 0 1-3 0V13.337a1.5 1.5 0 0 1 1.5-1.5Zm9.18 13.818a1.5 1.5 0 0 1 1.5 1.5v6.468a1.5 1.5 0 0 1-3 0v-6.468a1.5 1.5 0 0 1 1.5-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChart;
