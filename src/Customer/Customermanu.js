import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Customermanu() {
  return (


   <div  className='dropdown'>


      <div >
          <a className='dropdown-btn' href='/Customer/Dash'>HOME</a>

      </div>
      
    


   
    <DropdownButton className='dropdown-list' id="dropdown-basic-button" title="Customer details">
      <Dropdown.Item href="#/action-1">Edit profile</Dropdown.Item>
      <Dropdown.Item href="/Logout">Log Out</Dropdown.Item>
    </DropdownButton>

    </div>
  );
}

export default Customermanu;