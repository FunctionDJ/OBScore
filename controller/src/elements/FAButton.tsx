import React, { FC } from "react";

import { Button, ButtonProps } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as fa from "@fortawesome/free-solid-svg-icons";

interface Props extends ButtonProps {
  children: [
    fa.IconDefinition,
    unknown?,
    fa.IconDefinition?
  ],
  className?: string,
  onClick?: () => void,
  onMouseDown?: () => void,
  center?: boolean,
  style?: React.CSSProperties
}

const FAButton: FC<Props> = ({ children, center: centerProp, ...buttonProps }) => {
  const center = centerProp || (!!children[2]);

  const hasCenterChild = !!children[1];

  let rightSide = <div></div>;

  if (center) {
    if (children[2]) {
      rightSide = <FontAwesomeIcon
        icon={children[2]}
        style={hasCenterChild ? { marginLeft: "0.5rem" } : {}}
      />;
    } else {
      rightSide = <div style={{
        display: "inline-block",
        width: "1em",
        height: "1em",
        marginLeft: "0.5rem"
      }}>
      </div>;
    }
  }

  return (
    <Button {...buttonProps}>
      <FontAwesomeIcon
        icon={children[0]}
        style={hasCenterChild ? { marginRight: "0.5rem" } : {}}
      />

      {children[1] || ""}

      {rightSide}
    </Button>
  );
};

export default FAButton;