import '../Tournament/MY_Matches.css'
import React from 'react'
import Match from './Match.js'
import backarrow from '../asset/up arrow 2.png'
import opBadge from '../asset/opBadge.svg'
import detail from '../asset/detail.svg'
import congratulation from '../asset/congratulation.svg'
import teamx from '../asset/Teamx.svg'
import vs from '../asset/teamVS.svg'
import teamy from '../asset/teamy.svg'
import team_member from '../asset/team_member.svg'

export const MY_Matches = () => {
  return (
    <div className='Appp'>

      <div className='back'>
        <div className='back_space'>
        <img className='back_arrow' src={backarrow} alt="" />
        <span className='completed'>Completed</span>
        </div>
      </div>

    <div className='congratulation_wrapper'> 
   
    <img className='congratulation_badge' src={congratulation} alt="" />
    <div  className='heading'>
  <span className='cong_size'>Congratulation</span>
  <span className='cong_won_size'>You won 500 in 3 contest</span>
  </div>
  
        </div>

        <div className='opsquad'>
          
          <div className='squad_top_wrap'>
     <div>  <span className='opBadge'><img src={opBadge} alt="" /></span></div>
     <h3 className='opsquad_heading'>Op Squad</h3>
     <div> <span className='opsquad_detail'><img src={detail} alt="" /></span></div>
       </div>

       <div className="team-member_wrapper">
            <div className="team-data_align">
              <img src={team_member} alt="" />
              <small>Zoho</small>
              <span>Pts:240</span>
            </div>

            <div className="team-data_align">
            <img src={team_member} alt="" />
              <small>Zoho</small>
              <span>Pts:240</span>
            </div>
            <div className="team-data_align">
            <img src={team_member} alt="" />
              <small>Zoho</small>
              <span>Pts:240</span>
            </div>
            <div className="team-data_align">
            <img src={team_member} alt="" />
              <small>Zoho</small>
              <span>Pts:240</span>
            </div>
            <div className="team-data_align">
            <img src={team_member} alt="" />
              <small>Zoho</small>
              <span>Pts:240</span>
            </div>
          </div>

        </div>

{/* vs */}

        <div className='team_wrapper_vs'>
          
            <div className='data_align'>
            <img src={teamx} alt="" />
            <span>Team X</span>
            </div>
            <img src={vs} alt="" />

            <div className='data_align'>
              <span className='team_y'>Team Y</span>
              <img src={teamy} alt="" />
            </div>
          
        </div>
 

        <Match/>

 

     </div>
  )
}
