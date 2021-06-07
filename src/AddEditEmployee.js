import React,{useState} from 'react'
// import {Modal,Input,Form, Button,Select} from 'antd'

import Button from 'antd/es/button/button'
import Modal from 'antd/es/modal/Modal'
import Form from 'antd/es/form/Form'
import Input from 'antd/es/input/index'
import Select from 'antd/es/select/index'
const {Option} =Select


function AddEditEmployee({addEmployee,edit,empkey,email,name}) {
const FormItem =Form.Item
    
    // let emp=localStorage.getItem("employees")
    // let employees=JSON.parse(emp)
    // console.log(employees)
    // let empInfo=employees.filter(emp=>emp.key===empkey)
    // console.log(email)
  
    const [employeeName, setEmployeeName] = useState('')
    const [employeeEmail, setEmployeeEmail] = useState('')
    const [designation, setDesignation] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
 
  
  console.log(employeeName)
    
//  if (empkey!=null) {
//      setvalues()
//  }


    const handleSubmit=(e)=>{
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // return re.test(String(email).toLowerCase());

        
        if (employeeName.length==0||employeeEmail.length==0||designation.length==0||!re.test(String(employeeEmail).toLowerCase())) {
          setIsModalVisible(true)
        } else {
          addEmployee(employeeName,employeeEmail,designation)
          setEmployeeName("")
          setEmployeeEmail("")
          setDesignation("")
          setIsModalVisible(false)
        }
      
    }

    function onChange(value) {
      console.log(`selected ${value}`);
      setDesignation(value)
    }
    
    function onBlur() {
      console.log('blur');
    }
    
    function onFocus() {
      console.log('focus');
    }
    
    function onSearch(val) {
      console.log('search:', val);
    }
    
    return (
        
        <div>
          <div style={{float:"right",marginTop:"-40px"}}>
            <Button  onClick={()=>{setIsModalVisible(true)}} >{edit?"Edit":"Add employee"}</Button>
            </div>
            <Modal style={{color:'cadetblue'}} title={"Add Employee"} visible={isModalVisible} onCancel={()=>setIsModalVisible(false)} footer={false} destroyOnClose closable={false}>
           <Form   name={"basic"}>
            <FormItem
            label={"Employee Name"}
            name="employeeName"
            rules={[
              {type:"string",message:"Please insert valid input"},
              { required: true, message: "Please insert employee name!" },
            ]}
            
          >
            <Input
              
              value="employeeName"
              placeholder={'Employee Name'}

              onChange={(e) => {
                setEmployeeName(e.target.value);
              }}
            />
          </FormItem>
          <FormItem
            rules={[
              { type: "email", message: "Enter valid email" },
              { required: true, message: "Please insert your E-mail!" },
             
            ]}
            label={"Email"}
            name="employeeEmail"
          >
            <Input
          
              value="employeeEmail"
              placeholder={"E-mail"}

              onChange={(e) => {
                setEmployeeEmail(e.target.value);
              }}
            />
          </FormItem>
          <FormItem
            rules={[
              
              { required: true, message: "Please select Designation" },
              // { type: "email", message: "Enter valid email" },
            ]}
            label={"Designation"}
            name="designation"
          >
            {/* <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              value={designation}
              placeholder={"Designation"}

              onChange={(e) => {
                setDesignation(e.target.value);
              }}
            /> */}
             <Select
    showSearch
  
    placeholder="Select designation"
    value={designation}
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    // onSearch={onSearch}
    // filterOption={(input, option) =>
    //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
    <Option value='QA'>QA</Option>
    <Option value="Software Engineer">Software Engineer</Option>
    <Option value="BA">BA</Option>
  </Select>
          </FormItem>
          <Button type={"primary"} htmlType="submit" className={"add-emp-btn"}  onClick={handleSubmit} >
            {"Submit"}
          </Button>
          </Form>
            </Modal>
            
        </div>
    )
}

export default AddEditEmployee
