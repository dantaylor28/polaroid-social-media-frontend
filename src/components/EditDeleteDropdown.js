import React from "react";
import { Dropdown } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";

const IconToggle = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`${btnStyles.EditDeleteIcon} fa-solid fa-pen`}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const EditDeleteDropdown = () => {
  return (
    <Dropdown drop="left">
      <Dropdown.Toggle as={IconToggle} />
      <Dropdown.Menu className="text-center">
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
