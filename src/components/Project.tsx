import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import blinkit from '../assets/images/blinkit.png';
import road from '../assets/images/road.png';
import langchain from '../assets/images/langchain.png';
import bank from '../assets/images/bank.png';
import Leaf from '../assets/images/Leaf.png';


function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://drive.google.com/file/d/1vJEzq2PTtpxii607woQjah4OlUynpKiV/view?usp=sharing" target="_blank" rel="noreferrer"><img src={blinkit} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1vJEzq2PTtpxii607woQjah4OlUynpKiV/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Blinkit Data Analysis Dashboard</h2></a>
                <p>Developed a Data Analysis Dashboard handling 8,000 records and creating Insights out of those.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1mDZ4sVoovuic76bl1bAN4SpmM0N_px5g/view?usp=sharing" target="_blank" rel="noreferrer"><img src={road} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1mDZ4sVoovuic76bl1bAN4SpmM0N_px5g/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Road Accident Data Analysis</h2></a>
                <p>Designed and developed a dashboard handling 8 Lakhs records used KPI Pivot tables for Proper analysis.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Kumkum-kaushik/Langchain_QA_App" target="_blank" rel="noreferrer"><img src={langchain} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Kumkum-kaushik/Langchain_QA_App" target="_blank" rel="noreferrer"><h2>Langchain QA App</h2></a>
                <p>This project is a Question Answering (QA) system built using LangChain, FAISS, and a local FLAN-T5 model.
It retrieves information from web pages (like Wikipedia articles) and generates context-aware answers.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Kumkum-kaushik/Data_Analytics-Capstone-Project" target="_blank" rel="noreferrer"><img src={bank} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Kumkum-kaushik/Data_Analytics-Capstone-Project" target="_blank" rel="noreferrer"><h2>Bank Loan Report Data Analytics</h2></a>
                <p>The Bank Loan Report Project is designed to monitor, analyze, and assess the performance of a bank's lending activities.
By providing comprehensive insights into key loan-related metrics, this project empowers stakeholders to make data-driven decisions, evaluate the health of the loan portfolio, and identify trends that inform lending strategies.

This project includes interactive dashboards for tracking KPIs, visualizing trends, and diving into detailed loan data.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;