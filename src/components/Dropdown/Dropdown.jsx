import React from "react";
import { Dropdown } from "flowbite-react";

const DropdownSection = (props) => {
  const { Button, Item, useHeader } = props;

  return (
    <Dropdown label="" renderTrigger={Button}>
      {useHeader && (
        <Dropdown.Header>
          <span className="block text-sm">Nguyen Tran The Vu</span>
          <span className="block truncate text-sm font-medium">thevu@gmail.com</span>
        </Dropdown.Header>
      )}
      <Item />
    </Dropdown>
  );
};

export default DropdownSection;
