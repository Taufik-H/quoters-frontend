import * as React from "react";
import { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32.062 2a1.5 1.5 0 0 1 1.5 1.5v1.696c2.92.2 5.346 1.2 7.063 2.92 1.874 1.882 2.86 4.588 2.85 7.834v18.246C43.475 40.86 39.243 45 32.433 45H15.517c-6.81 0-11.042-4.198-11.042-10.956V15.946c0-6.285 3.774-10.32 9.929-10.75l.001-1.696a1.5 1.5 0 0 1 3 0v1.658H30.56V3.5a1.5 1.5 0 0 1 1.5-1.5Zm8.413 17.808h-33v14.236c0 5.132 2.856 7.956 8.042 7.956h16.916c5.186 0 8.042-2.772 8.042-7.804V19.808Zm-7.598 12.585a1.5 1.5 0 0 1 0 3 1.507 1.507 0 0 1-1.508-1.5c0-.828.662-1.5 1.49-1.5h.018Zm-8.875 0a1.5 1.5 0 0 1 0 3 1.507 1.507 0 0 1-1.508-1.5c0-.828.662-1.5 1.49-1.5h.018Zm-8.894 0a1.5 1.5 0 0 1 0 3 1.51 1.51 0 0 1-1.51-1.5c0-.828.664-1.5 1.492-1.5h.018Zm17.769-7.774a1.5 1.5 0 0 1 0 3 1.507 1.507 0 0 1-1.508-1.5c0-.828.662-1.5 1.49-1.5h.018Zm-8.875 0a1.5 1.5 0 0 1 0 3 1.507 1.507 0 0 1-1.508-1.5c0-.828.662-1.5 1.49-1.5h.018Zm-8.894 0a1.5 1.5 0 0 1 0 3 1.51 1.51 0 0 1-1.51-1.5c0-.828.664-1.5 1.492-1.5h.018ZM30.561 8.158H17.405v1.924a1.5 1.5 0 0 1-3 0V8.203c-4.481.377-6.93 3.093-6.93 7.743v.862h33v-.862c.008-2.47-.656-4.39-1.974-5.71-1.157-1.16-2.849-1.853-4.938-2.032l-.001 1.878a1.5 1.5 0 0 1-3 0l-.001-1.924Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCalendar;
