
import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";

export const WorkExperience = () => {
  return (
    <div className='workexpercontainer'>
          <div className='stats'>
              <div className='statsubcont'>
                <BsEmojiSmile className='staticon' />
              <div className='stattextcont'>
                 <div className='statnum'>3+</div>
                 <div className='stattext'>Years Experience</div>
                
              </div>
              </div>

              <div className='statsubcont'>
                <BsEmojiSmile className='staticon' />
              <div className='stattextcont'>
                 <div className='statnum'>100+</div>
                 <div className='stattext'>Project Completed</div>
                
              </div>
              </div>

              <div className='statsubcont'>
                <BsEmojiSmile className='staticon' />
              <div className='stattextcont'>
                 <div className='statnum'>80+</div>
                 <div className='stattext'>Happy Clients</div>
                
              </div>
              </div>

              <div className='statsubcont'>
                <BsEmojiSmile className='staticon' />
              <div className='stattextcont'>
                 <div className='statnum'>10+</div>
                 <div className='stattext'>Awards Received</div>
                
              </div>
              </div>
          </div>

    </div>
  )
}
