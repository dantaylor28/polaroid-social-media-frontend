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

export const EditDeleteDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown drop="left">
      <Dropdown.Toggle as={IconToggle} />
      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item onClick={handleEdit} aria-label="edit-post">
          <i className="fa-solid fa-file-pen"></i>
          Edit
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDelete} aria-label="delete-post">
          <i className="fa-solid fa-trash"></i>
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
