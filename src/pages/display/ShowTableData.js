import React, { useState } from "react";
import '../../style.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ShowTableData = ({ populationSurveyData ,setPopulationSurveyData}) => {
    const [showBtn,setShowBtn] = useState("down");

   const handleSort = (type,action) => {
    setShowBtn(action)
    if (showBtn=="YUp") {
       const filterDataDown =  populationSurveyData.sort((a,b)=>b[type] - a[type])
         setPopulationSurveyData(filterDataDown)
        }
    else if (showBtn == "Up") {
        const filterDataDown =  populationSurveyData.sort((a,b)=>b[type] - a[type])
        setPopulationSurveyData(filterDataDown)
    
    }
    else     {
        setShowBtn(action)
        const filterDataUp =  populationSurveyData.sort((a,b)=>a[type] - b[type])
          setPopulationSurveyData(filterDataUp)

    }
   }  
    
    return (<>
 <div className=" mt-3">
    {populationSurveyData ?
        <table>
            <tr>
                <th>ID</th>
                <th>Nation</th>
                <th>Year
            {showBtn == "Ydown" ?  <ArrowDownwardIcon onClick={()=>handleSort("ID Year", "YUp")}/>: <ArrowUpwardIcon onClick={()=>handleSort("ID Year","Ydown")}/>}
                
                </th>
                <th>Population
                {showBtn == "down" ?  <ArrowDownwardIcon onClick={()=>handleSort("ID Year", "Up")}/>: <ArrowUpwardIcon onClick={()=>handleSort("ID Year","down")}/>}</th>
             <th>Slug Nation</th>
            </tr>

            {populationSurveyData?.map((populationData,index) => {
                return (
                    <>
                        <tr key={index}>
                            <td>{populationData?.['ID Nation']}</td>
                            <td>{populationData?.Nation}</td>
                            <td>{populationData?.['ID Year']}</td>
                            <td>{populationData?.Population}</td>
                            <td>{populationData?.["Slug Nation"]}</td>
                        </tr>
                    </>
                )
            })}

        </table>
        : 
        <h5>Loading....</h5>
    }
        </div>

    </>)
}
export default ShowTableData;