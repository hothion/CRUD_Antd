import "antd/dist/antd.css";
import  { useState } from "react";
import "./index.css";
import { Form, Input, Button, DatePicker, Select } from "antd";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 6,
  },
};
const AddStudent = { name: "", birthday: "", email: "", rank: "" };

const Student_Add = () => {
  const { Option } = Select;

  const [student, setStudent] = useState(AddStudent);
  const AddStu = async (e: any) => {
    e.preventDefault();
    const Students = {
      name: student.name,
      birthday: student.birthday,
      email: student.email,
      rank: student.rank,
    };
    console.log(student);

    fetch("http://localhost:12345/api/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Students),
    })
      .then((response) => response.json())
      .then((Students) => {
        console.log(Students.data);
        setStudent(Students);
      });
  };
  const onNameChange = async (e: any) => {
    const { name, value } = e.currentTarget;
    // @ts-ignore
    setStudent({
      ...student,
      [name]: value,
    });
  };
  const onNameChangeRank = async (e: any) => {
      
    // @ts-ignore
    setStudent({
      ...student,
      rank: e.target.value,
    });
  };

  return (
    <Form>
      <Form.Item
        {...layout}
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input value={student.name} name="name" onChange={onNameChange} />
      </Form.Item>

      <Form.Item label="BirthDay" {...layout}>
        <DatePicker>
          <Input
            value={student.birthday}
            name="birthday"
            onChange={onNameChange}
          />
        </DatePicker>
      </Form.Item>
      <Form.Item
        {...layout}
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input
          value={student.email}
          name="email"
          onChange={onNameChange}
        ></Input>
      </Form.Item>
      <Form.Item label="Rank" {...layout}>
        <Select
         value={student.rank}
         onChange={onNameChangeRank}>
          <Option value="rank1">Good</Option>
          <Option value="rank2">Quite</Option>
          <Option value="rank3">Bad</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={AddStu}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Student_Add;
