import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowTableData from "./ShowTableData";
import axios from "axios";


const DisplayPage = () => {
    const [populationSurveyData, setPopulationSurveyData] = useState([])
    console.log('populationSurveyData', populationSurveyData);
    useEffect(() => {
        handleTableData()
    }, [])

    const handleTableData = async () => {
        const tableData = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        console.log('tableData', tableData);
        setPopulationSurveyData(tableData?.data?.data)
    }

    const displayName = localStorage.getItem('displayName')
    const navigate = useNavigate()
    return (
        <>
    
            <div className="display-container"> 
                <div className="d-flex justify-content-between">
                    <h1>{displayName && `Hi,${displayName}`}</h1>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Back </button>
                </div>
                <div>
                    <ShowTableData
                        populationSurveyData={populationSurveyData}
                        setPopulationSurveyData={setPopulationSurveyData}
                    />
                </div>
            </div>
          
        </>
    )

}
export default DisplayPage