import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Customermanu() {
  return (


   <div  className='dropdown'>


      <div >
          <a className='dropdown-btn' href='/Customer/Dash'>HOME</a>

      </div>
      
    


   
    <DropdownButton className='dropdown-list' id="dropdown-basic-button" title="Customer details">
      <Dropdown.Item href="/Customer/Editprofile">Edit profile</Dropdown.Item>
      <Dropdown.Item href="/Logout">Log Out</Dropdown.Item>
    </DropdownButton>

    </div>
  );
}

export default Customermanu;