import * as React from "react";
import { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M29.877 4c6.784 0 10.676 3.358 10.676 9.208V42.28c0 1.22-.628 2.318-1.684 2.932a3.367 3.367 0 0 1-3.385.028l-11.92-6.734-12.03 6.748c-.52.292-1.09.44-1.662.44-.59 0-1.18-.158-1.716-.474a3.36 3.36 0 0 1-1.682-2.93V12.842C6.474 7.222 10.368 4 17.158 4h12.718Zm0 3H17.159c-5.098 0-7.685 1.964-7.685 5.842V42.29c0 .188.108.29.198.342.09.056.232.096.396.004l12.764-7.16a1.507 1.507 0 0 1 1.473.002l12.654 7.148a.373.373 0 0 0 .397-.002.383.383 0 0 0 .197-.344l-.001-29.3C37.537 11.26 37.204 7 29.877 7Zm.877 10.457a1.5 1.5 0 0 1 0 3H16.118a1.5 1.5 0 0 1 0-3h14.636Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBookmark;
