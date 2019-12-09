import React from 'react';
//import {CardList} from '.\card-list.component';
import './search-box.styels.css';


export const SearchBox = ({placeholder, handelchange}) => (

                  <div className='search'>
                    <input type='search'
                    placeholder={placeholder} 
                    onChange={handelchange}/>
           	       </div>
           	       
           );

