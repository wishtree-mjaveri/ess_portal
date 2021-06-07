import React,{useState} from 'react'
// import {Card, Table,Input} from 'antd'
import Card from 'antd/es/card/index'
import Table from 'antd/es/table/index'
import Input from 'antd/es/input/index'
import {employees} from './Employees'
import AddEditEmployee from './AddEditEmployee';

import EditEmp from './EditEmp';
import DeleteEmployee from './DeleteEmployee';

function EmployeeTable() {
    const [dataSource, setDataSource] = useState(employees);
    const [value, setValue] = useState('');
    const [isModelVisible, setisModelVisible] = useState(false)
    const showModal=()=>{
        setisModelVisible(true)
    }
    localStorage.getItem("employees",JSON.stringify(employees))
    const deleteEmployee =(key)=>{
        const data = [...dataSource]
       const newData = data.filter(emp=>emp.key!=key)
        setDataSource( data.filter(emp=>emp.key!=key))
        localStorage.setItem("employees",JSON.stringify(newData))
        setisModelVisible(false)
    }
    let i=Math.floor(Math.random() * 1000) + 1
    const addEmployee=(name,email,designation)=>{
      
        const newData=[...dataSource,{key:i++,name:name,email:email,designation:designation}]
        localStorage.setItem("employees",JSON.stringify(newData))

        setDataSource(newData)
        console.log(newData)
    }
    const editEmployee=(key,email,name,designation)=>{
    //   const emp = dataSource.filter(emp=>emp.key!=key)
      const empIndex = dataSource.findIndex(emp=>emp.key==key)

      console.log(empIndex)
      let editedemp=dataSource.splice(empIndex,1,{key:key,name:name,email:email,designation:designation})
      
      let newData=[...dataSource]
    localStorage.setItem("employees",JSON.stringify(newData))

      setDataSource(newData)
      console.log(newData)
    //   const newEmp = [...emp,{key:key,name:name,email:email,designation:designation}]
    
    //   setDataSource(newEmp)
    //   console.log(newEmp)

    }

    let emp=localStorage.getItem('employees')
    console.log(JSON.parse(emp))

   
    const FilterByNameInput = (
        <Input
          placeholder="Search By Name"
          value={value}
          onChange={e => {
            const currValue = e.target.value;
            setValue(currValue);
            const filteredData = dataSource.filter(entry =>
              entry.name.includes(currValue)
            );
            setDataSource(filteredData);
          }}
        />
      );
    const column=[{
        title:FilterByNameInput,
        dataIndex:'name',
        key:'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render:text=><h3>{text}</h3>
            

    },
    {
        title:<h3 >Designation</h3>,
        dataIndex:'designation',
        key:'designation',
        
        render:text=><h3>{text}</h3>
            

    },{
        title:<h3 >Action</h3>,
       
        dataIndex:'action',
        render:(_,record)=>dataSource.length>=1?(
            <div style={{display:"flex",justifyContent:"space-between",width:"40px"}}>
            {/* <Popconfirm title={"Are you sure you want to delete this employee ?"} onConfirm={()=>deleteEmployee(record.key)} >
                <a>delete employee</a>
            </Popconfirm> */}
           <span> <DeleteEmployee empkey={record.key} deleteEmployee={deleteEmployee} /></span>
            {/* <DeleteOutlined onClick={showModal}/>
            <Modal visible={isModelVisible} onCancel={()=>setisModelVisible(false)} onOk={()=>deleteEmployee(record.key)}>
                Do you want to delete selected employee ?
            </Modal> */}
            {/* <AddEditEmployee addEmployee={addEmployee} edit={true} empkey={record.key} name={record.name} email={record.emaild}/> */}
        <span>  <EditEmp empEmail={record.email} empName={record.name} empKey={record.key} editEmployee={editEmployee} empDesignation={record.designation}/></span>
            </div>
        ):null

    }]


    const pagination={
        pageSize:3
    }

    const handleChange=(sortor)=>{
        console.log(sortor)
    }
    return (
        <div>
            <Card style={{overflow:"auto"}}>
                <div >
                <h1 style={{float:"left",color:"cadetblue",fontSize:"18px",}}>Employee Table</h1>
                </div>
            
                <AddEditEmployee  addEmployee={addEmployee}  />
             
                <Table  dataSource={dataSource} columns={column} pagination={pagination} />
            </Card>
           
        </div>
    )
}

export default EmployeeTable
