import React,{useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import { StudentContext } from '../App';
function Showuser() {
  let navigate=useNavigate();
  let context=useContext(StudentContext)
  let handleDelete=(i)=>{
   
    let newArray=[...context.students]
    newArray.splice(i,1)
    context.setStudents(newArray)
  }
  return <>
   <div className='row'>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Session Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            context.students.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.batch}</td>
                    <td>{e.sessionTime}</td>
                    <td>
                        <Button variant='primary' 
                        onClick={()=>navigate(`/edituser/${i}`)}> 
                        <i className="fas fa-fw fa-pen"></i> Edit
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant='danger' onClick={()=>handleDelete(i)}> <i className="fas fa-fw fa-trash"></i> Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
    </Table>
  </div>
  </>
}

export default Showuser