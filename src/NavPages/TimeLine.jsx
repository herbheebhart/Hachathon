import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import React from 'react'

export const TimeLine = () => {
  return (
    <div>
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--workspace "
    contentStyle={{color: "#D434FE",borderRadius:"0px",background:"none",borde:"none", fontSize:"24px",fontWeight:"bolder"}}
    date="November 18, 2023"
    iconStyle={{ background: '#D434FE',fontSize:"10px", }}
  >
    <h3 className="vertical-timeline-element-title text-[24px]">Hackathon Announcement</h3>
    <p className='text-white font-[400px]'>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>  
  <VerticalTimelineElement
    className="vertical-timeline-element--workspace"
    contentStyle={{color: "#D434FE",borderRadius:"0px",background:"none",borde:"none", fontSize:"24px",fontWeight:"bolder"}}
    date="November 18, 2023"
    iconStyle={{ background: '#D434FE',fontSize:"10px"}}
  >
    <h3 className="vertical-timeline-element-title text-[24px]">Hackathon Announcement</h3>
    <p className='text-white font-[400px]'>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>  
</VerticalTimeline>

   </div>
  )
}

