import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SimpleCard from './Card';

export function Example() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://www.sjs.co.nz/api/v1/elasticsearch/job/0/10/refreshed/DESC?`, {
        params: {
          regions_id: '443+2665',
          category_id: '205+274+337',
          active: true
        }}).then(function(response){
            setData(response.data.documents)
        }
    );
  },[])
    
  var divStyles = {
    display: 'flex',
    flexwrap: 'wrap',
    margintop: '10px',
    backgroundcolor: 'inherit',
    marginright: '20px'
  }

  return (
    <div style={divStyles}>
        {
            data.map(d => 
                <SimpleCard 
                    name={d.name} 
                    applicants={d.applicationCount} 
                    places={d.vacancyCount} 
                    location={d.suburbs[0].title} 
                    description={d.shortDescription}
                    id={"https://www.sjs.co.nz/job/" + d.id}
                />
            )
        }
    </div>
  );
}