import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Example() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://www.sjs.co.nz/api/v1/elasticsearch/job/0/10/refreshed/ASC?`, {
        params: {
          regions_id: '443',
          category_id: '205+274',
          active: true
        }}).then(function(response){
            setData(response.data.documents)
        }
    );
  },[])
    
  

  return (
    <div>
        {
        data.map(d => <div>{d.name}</div>)
        }
    </div>
  );
}