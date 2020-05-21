import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
class Search extends Component {
  constructor(props) {
    super(props);
    this.inputElement =React.createRef();

  }
  componentDidMount(){
    this.inputElement.current.focus()
  }
  render() {
    return (
      <div>
         <div>
         <img src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/1-logo-google.png" alt="" width='200px'/>
         </div>
         <div className='search-box'>
           <input type="text" ref={this.inputElement} placeholder="Search.." name="search"/>
           <Button className='btn' type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
         </div>
      </div>
    );
  }
}

export default Search;