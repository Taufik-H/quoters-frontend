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
      d="M30.615 4c5.42 0 9.8 2.14 9.86 7.58v30.36c0 .34-.08.68-.24.98-.26.48-.7.84-1.24 1-.52.16-1.1.08-1.58-.2l-12.96-6.48-12.98 6.48c-.298.158-.64.26-.98.26-1.12 0-2.02-.92-2.02-2.04V11.58c0-5.44 4.4-7.58 9.8-7.58h12.34Zm1.36 12.08h-15.06c-.86 0-1.56.7-1.56 1.58 0 .878.7 1.58 1.56 1.58h15.06c.86 0 1.56-.702 1.56-1.58 0-.88-.7-1.58-1.56-1.58Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBookmark;
