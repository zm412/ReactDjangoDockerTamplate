
import React from 'react';
import { Button, Carousel, Card, Image } from 'react-bootstrap';
import { Admin_col } from './Profile_frame/Admin_col';
import { First_col } from './Profile_frame/First_col';
import { Second_col } from './Profile_frame/Second_col';



function getTabClass(id_elem, is_super){
  let classN = 'col col-sm-12  m-4 p-2 frame ';
  if(is_super == 'true'){
    if(id_elem == 'first_col') classN += 'col-lg-3';
    if(id_elem == 'second_col') classN += 'col-lg-4';
    if(id_elem == 'admin_col') classN += 'col-lg-3';
  }else{
    classN = 'col-lg-6';
  }
  return classN;
}

const Tab = ({ add_class, content, id_elem, classTab, classTitle, title }) => { 
    let resultTabClass = classTab + ' ' + add_class;

    return( <div id={id_elem} className={resultTabClass} >
              <h5 className={classTitle}>{title}</h5>
              {content}
          </div>
    ) 
}

export const Profile = ({ is_super, userid, username }) => {

  const openTab = (elem, tab_name, blocks_class_name, buttons_class_name) => {
    let blocks = document.querySelectorAll(blocks_class_name);
    for(let item of blocks){
      item.id == tab_name  ? item.classList.add('active') : item.classList.remove('active');
    }
    let buttons = document.querySelectorAll(buttons_class_name);
    for(let item of buttons){
      item == elem  ? item.classList.add('active') : item.classList.remove('active');
    }
  }

  let first_col_content = <First_col />
  let second_col_content = <Second_col />
  let admin_col_content = <Admin_col />

  return (

    <div>
      <div className="row buttons_block ">
          <Button 
              data-tab='first_col' 
              onClick={(e)=>openTab(e.target, e.target.dataset.tab, '.frame', '.main_button')} 
              variant="secondary" 
              className="mt-1 main_button col-sm-7 active"
          >
            First Col
          </Button> 
          <Button  
            data-tab='second_col' 
            onClick={(e)=>openTab(e.target, e.target.dataset.tab, '.frame', '.main_button')} 
            variant="secondary" 
            className="mt-1 main_button col-sm-7"
            >
            Second Col
          </Button> 

    { is_super == 'true' && 
          <Button 
            data-tab='admin_panel' 
            onClick={(e)=>openTab(e.target, e.target.dataset.tab, '.frame', '.main_button')} 
            variant="secondary" 
            className="mt-1 main_button col-sm-7"
          >
            Admin panel
          </Button> 
    }
    </div>

      <div className="row justify-content-md-center">

        <Tab 
            add_class='active' 
            content={first_col_content} 
            id_elem='first_col' 
            classTab={ getTabClass('first_col', is_super) }
            classTitle='tabName'
            title="First Col" 
        />

        <Tab 
            add_class='' 
            content={second_col_content} 
            id_elem='second_col' 
            classTab={ getTabClass('second_col', is_super) }
            classTitle='tabName'
            title="Second col" 
        />

    { is_super == 'true' && 

        <Tab 
            add_class='' 
            content={admin_col_content} 
            id_elem='admin_panel' 
            classTab={ getTabClass('admin_col', is_super) }
            classTitle='tabName'
            title="Admin panel"
        /> 

    }
        
      </div>

    </div>
  )
};
