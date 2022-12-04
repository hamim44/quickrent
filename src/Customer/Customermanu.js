import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Customermanu() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Customer details">
      <Dropdown.Item href="#/action-1">Edit profile</Dropdown.Item>
      <Dropdown.Item href="/Logout">Log Out</Dropdown.Item>
    </DropdownButton>
  );
}

export default Customermanu;