
import React from 'react';
import { Button, Carousel, Card, Image } from 'react-bootstrap';

const Tab = ({ add_class, content, id_elem, is_super, tabName }) => { 
  let classN =  `col col-sm-12 ${is_super == 'true' && id_elem == 'second_col' ? 'col-lg-4'
      : is_super == 'true' && id_elem != 'second_col' ? 'col-lg-3'
      : is_super != 'true' && id_elem == 'first_col' ? 'col-lg-4'
      : 'col-lg-6'}  
    m-4 p-2 frame ${add_class}`; 

  return( <div id={id_elem} className={classN} >
            <h5 className='tabName'>{tabName.toUpperCase()}</h5>
              {content}
          </div>
    ) 
}

export const Profile = ({ is_super, userid, username }) => {

  const openTab = (e) => {
    let blocks = document.querySelectorAll('.frame');
    for(let item of blocks){
      item.id == e.target.dataset.tab  ? item.classList.add('active') : item.classList.remove('active');
    }
    let buttons = document.querySelectorAll('.main_button');
    for(let item of buttons){
      item == e.target  ? item.classList.add('active') : item.classList.remove('active');
    }
  }

  let personal = 'Personal block content';
  let common = 'Common block content';
  let admin = 'Admin block content';

  return (

    <div>
      <div className="row buttons_block ">
          <Button 
              data-tab='first_col' 
              onClick={(e)=>openTab(e)} 
              variant="secondary" 
              className="mt-1 main_button col-sm-7 active"
          >
            First Col
          </Button> 
          <Button  
            data-tab='second_col' 
            onClick={(e)=>openTab(e)} 
            variant="secondary" 
            className="mt-1 main_button col-sm-7"
            >
            Second Col
          </Button> 

    { is_super == 'true' && 
          <Button 
            data-tab='admin_panel' 
            onClick={(e)=>openTab(e)} 
            variant="secondary" 
            className="mt-1 main_button col-sm-7"
          >
            Admin panel
          </Button> 
    }
    </div>

      <div className="row justify-content-md-center">

        <Tab add_class='active' content={personal} id_elem='first_col' is_super={is_super} tabName="First Col" />
        <Tab add_class='' id_elem='second_col' content={common} is_super={is_super} tabName="Second col" />

    { is_super == 'true' && 

        <Tab add_class={ true ? '' : 'hidden_block' } content={admin} id_elem='admin_panel' is_super={is_super} tabName="Admin panel"/> 

    }
        
      </div>

    </div>
  )
};