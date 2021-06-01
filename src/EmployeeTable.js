import React,{useState} from 'react'
import {Card, Table,Input,Popconfirm} from 'antd'
import {employees} from './Employees'

function EmployeeTable() {
    const [dataSource, setDataSource] = useState(employees);
    const [value, setValue] = useState('');
    
    const deleteEmployee =(key)=>{
        const data = [...dataSource]
       
        setDataSource( data.filter(emp=>emp.key!=key))
    }
    const FilterByNameInput = (
        <Input
          placeholder="Search Name"
          value={value}
          onChange={e => {
            const currValue = e.target.value;
            setValue(currValue);
            const filteredData = employees.filter(entry =>
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
        render:text=><h2>{text}</h2>
            

    },{
        title:'Action',
        dataIndex:'action',
        render:(_,record)=>dataSource.length>=1?(
            <Popconfirm title={"Are you sure you want to delete this employee ?"} onConfirm={()=>deleteEmployee(record.key)} >
                <a>delete employee</a>
            </Popconfirm>
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
                <Table  dataSource={dataSource} columns={column} pagination={pagination} />
            </Card>
        </div>
    )
}

export default EmployeeTable
