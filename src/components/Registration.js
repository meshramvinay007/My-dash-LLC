import React from 'react';
import Calender from './Calender';
import Form from './Form';

export default function Registration({setRegistered}) {
  return (
   <>
        <Calender />
       <Form setRegistered={setRegistered} />
   </>
  )
}
