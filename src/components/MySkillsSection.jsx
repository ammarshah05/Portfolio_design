import React from 'react';


const skilldata = [
    {
        icon: "ps.png",
        skill: "Photoshop",
        percent: 95
    },
     {
        icon: "Ai.png",
        skill: "Illustrator",
        percent: 90
    }
    , {
        icon: "Pr.png",
        skill: "Premiere Pro",
        percent: 92
    },
     {
        icon: "Ae.png",
        skill: "After Effects",
        percent: 85
    }
    , {
        icon: "VidE.png",
        skill: "Video Editing",
        percent: 95
    }
]

export const MySkillsSec = () => {
    const percent = 50;
    return (
        <>
            <div className='skillSection' id='skills'>
                <div className="myskilltext">My Skills</div>
                <h2 className="skillExperttitle">Skills & Expertise</h2>
                <div className='Skill_container'>

                 {skilldata.map((skill)=>{
                  return(
                      <>
                      <div className='skill_item ' >
                        <div className='icon_skill'>
                            <img src={skill.icon} alt="PS" className='psimage' />
                            <div className='skillinfo'>
                                <span className='skilltext'>{skill.skill}</span>
                                <span className='percent'>{skill.percent}%</span>


                            </div>
                        </div>
                        <div className='progress'>
                            <div className='progress_bar' style={{ width: `${skill.percent}%` }}>

                            </div>

                        </div>
                    </div>
                        
                      </>
                  )
                 })

                 } 

                </div>


            </div>



        </>

    );
};