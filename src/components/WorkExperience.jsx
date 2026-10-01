
import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { TfiCup } from "react-icons/tfi";


const expdata = [
  {
    exicon: BsEmojiSmile,
    title: "Years Experience",
    count: 3
  },
   {
    exicon: PiShoppingBagOpenDuotone,
    title: "Project Completed",
    count: 100
  },
  {
    exicon: FiUsers,
    title: "Happy Clients",
    count: 80
  },
  {
    exicon: TfiCup,
    title: "Awards Received",
    count: 10
  },
]

export const WorkExperience = () => {
  return (
    <div className='workexpercontainer'>
          <div className='stats'>
            {expdata.map((data)=>{
              const Icon = data.exicon;
              return(
                <>
                <div className='statsubcont'>
                <Icon className='staticon' />
              <div className='stattextcont'>
                 <div className='statnum'>{data.count}+</div>
                 <div className='stattext'>{data.title}</div>
                
              </div>
              </div>
                
                
                </>
              )
            })

            }
              
          </div>

    </div>
  )
}
