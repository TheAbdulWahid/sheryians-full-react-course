import React from 'react'
import { useParams } from 'react-router-dom';

const SingleCourse = () => {
    let params = useParams();
    console.log(params);
  return (
    <div>
        <h1><span className='capitalize'>{params.courseId}</span> Course Details</h1>
    </div>
  )
}

export default SingleCourse