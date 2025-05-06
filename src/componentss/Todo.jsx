import React, { useEffect, useState } from 'react';
import { CIcon } from '@coreui/icons-react';
import { cilBabyCarriage, cilCart, cilHeart, cilUser, cilZoom } from '@coreui/icons';
import Login from './Login'

import './Todo.css'
const Todo = () => {
  const [openModal,setOpenModal] = useState(false)
 
return  <div >   
<header>
  <div>
  <CIcon icon={cilZoom} style={{'width':'20px','height':'20px'}}/>
    <div>Search</div>
  </div>
  <div>
  <CIcon icon={cilCart} style={{'width':'40px','height':'40px'}}/>
  </div>
  <div className='logo'>
    <div onClick={() =>{
      setOpenModal(true);
    }} >
      <div>
      <CIcon icon={cilUser} style={{'width':'20px','height':'20px'}}/>
      </div>
      <div>
        login
      </div>
      
    </div>
    <div className='icon' >
    <div>
    <CIcon icon={cilHeart} style={{'width':'30px','height':'30px','position':'relative'}}/>
    </div>
    <div className='digit'>
      0
    </div>
    </div>
    <div>
    <CIcon icon={cilBabyCarriage} style={{'width':'30px','height':'30px' ,'margin': '5px'}}/>
    </div>
  </div>
  </header> 
  {openModal && <Login closeModal={setOpenModal} /> }
  </div> 
   
}

export default Todo