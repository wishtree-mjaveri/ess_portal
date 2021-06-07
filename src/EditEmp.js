import React,{useState} from 'react'
// import { Button ,Modal,Form,Input,Select} from 'antd'
import Button from 'antd/es/button/index'
import Modal from 'antd/es/modal/index'
import Form from 'antd/es/form/index'
import Input from 'antd/es/input/index'
import Select from 'antd/es/select/index'
import   EditOutlined from "@ant-design/icons/EditOutlined";

function EditEmp({empEmail,empKey,empName,editEmployee,empDesignation}) {
    const {Option} = Select
    const FormItem = Form.Item
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [designation, setDesignation] = useState()
    const showModal=()=>{
        setName(empName)
            setEmail(empEmail)
            setDesignation(empDesignation)
            setIsModalVisible(true)
    console.log(email)
    console.log(name)

    }

    const handleSubmit = (e)=>{
   
        if (name.length==0||email.length==0||designation.length==0) {
            setIsModalVisible(true)
        } else {
            editEmployee(empKey,email,name,designation)
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
    return (
        
        <div>
            {/* <Button onClick={showModal} >Edit employee</Button> */}
            <EditOutlined onClick={showModal}  />
            <Modal title={"Edit Employee"} visible={isModalVisible} footer={false} closable={false} destroyOnClose onCancel={()=>setIsModalVisible(false)}>
                <Form
                initialValues={{
                    name:name,
                    email:email,
                    designation:designation
                }}
                >
                    
            <FormItem
            rules={[
              { required: true, message: "Please insert employee name!" },
            ]}
            label={"Employee Name"}
            name="name"
          >
            {/* <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              value={name}
            //   placeholder={'Employee Name'}

              onChange={(e) => {
                setName(e.target.value);
              }}
            /> */}
          <Input type={"text"} value={name} onChange={(e)=>{setName(e.target.value)}} />

          </FormItem>
          {/* <input type={"text"} value={name} onChange={e=>setName(e.target.value)} name={name} /> */}
          <FormItem
            rules={[
              { type: "email", message: "Enter valid email" },

              { required: true, message: "Please insert your E-mail!" },
            ]}
            label={"Email"}
            name="email"
          >
            <Input
            //   prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type={"email"}
              value={email}
              placeholder={"E-mail"}

              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormItem>
          <FormItem
            rules={[
              { required: true, message: "Please insert Designation!" },
            //   { type: "email", message: "Enter valid email" },
            ]}
            label={"Designation"}
            name="designation"
          >
            {/* <Input
            //   prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
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
  </Select>,
          </FormItem>
          
          <Button className={"add-emp-btn"} htmlType="submit"  onClick={handleSubmit} >
            {"Submit"}
          </Button>
          </Form>
            </Modal>
            
        </div>
    )
}

export default EditEmp
