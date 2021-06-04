import { Table,Button,Divider} from "antd";
import 'antd/dist/antd.css';
import { useEffect, useState} from 'react';
// @ts-ignore
import { BrowserRouter as Router, Link } from "react-router-dom";

interface Student {
  key: number;
  name: string;
  birthday: string;
  email: string;
  rank: string;
}

const columns = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "birthday",
    title: "Birthday",
    dataIndex: "birthday",
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "rank",
    title: "Rank",
    dataIndex: "rank",
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Update</a>
    
  },
];
export default function StudentList() {
  
  const [student, setStudent] = useState([])
  const getData = async () => {
    fetch('http://localhost:12345/api/student')
        .then((res) => res.json())
        .then((student) => {
          setStudent(student.data)
        console.log(student.data)
        })
}
useEffect(() => {
    getData()
}, [])
const addStudent = async()=>{

}

  return (
    <div>
        <Divider/>
      <Button ><Link to="/add">Add student</Link></Button>
      <Divider/>
      <Table 
      columns={columns} 
      dataSource={student} />
    </div>
  );
}