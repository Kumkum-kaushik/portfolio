import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2025 - May 2025"
            iconStyle={{ background: '#000000ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mega Group</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Data Analysis, Backend Integration, UI Designing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 - Jan 2025"
            iconStyle={{ background: '#000000ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Avalon Information Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi, India</h4>
            <p>
              Product Designing, Excel, Data Analysis, DFA(Company's Dashboard), Python Data Preprocessing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - Aug 2024"
            iconStyle={{ background: '#000000ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IBM SkillsBuild</h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi, India</h4>
            <p>
              Data Analysis, Data Preprocessing, documentation, python
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - Oct 2023"
            iconStyle={{ background: '#000000ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Escorts Kubota Limited</h3>
            <h4 className="vertical-timeline-element-subtitle">Faridabad, India</h4>
            <p>
              Data annotation, Excel, Open AI, Streamlit, CNN image processing            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;