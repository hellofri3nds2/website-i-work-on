// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MastodonsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MastodonsvgIcon(props: MastodonsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.004 7.879c0 6.197-.347 13.894 5.559 15.486 2.132.574 3.964.696 5.438.61 2.674-.15 4.175-.969 4.175-.969l-.09-1.977s-1.911.61-4.059.54c-2.127-.075-4.37-.235-4.717-2.892a5.514 5.514 0 01-.047-.745c4.507 1.12 8.349.488 9.408.359 2.954-.359 5.528-2.212 5.855-3.905.515-2.667.474-6.508.474-6.508 0-5.206-3.353-6.733-3.353-6.733-3.291-1.537-12.029-1.521-15.288 0-.002.002-3.355 1.528-3.355 6.734zm4.923-2.667c1.363-1.548 4.201-1.65 5.465.327l.611 1.044.611-1.044c1.269-1.987 4.112-1.864 5.465-.327 1.248 1.463.969 2.838.969 9.373h-2.455V8.469c0-2.662-3.369-2.764-3.369.369v3.348h-2.437V8.838c0-3.133-3.369-3.031-3.369-.369v6.117H4.959c0-6.54-.274-7.922.968-9.374z"
        }
      ></path>
    </svg>
  );
}

export default MastodonsvgIcon;
/* prettier-ignore-end */
