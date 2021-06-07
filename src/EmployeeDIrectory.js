import React,{useState} from 'react'
import EmployeeDetails from './EmployeeDetails'
import {employees} from './Employees'
import Table from 'antd/es/table/index'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next/dist/es/useTranslation'
function EmployeeDIrectory(props) {


   let localemp= localStorage.getItem('employees')
   let localemployees=JSON.parse(localemp)
    console.log(JSON.parse(localemp))
   const user = localStorage.getItem('existusername')
    if (user==null) {
        // message.error('Please login')
        props.history.push('/sign-in')
    } 
    const employeeList = employees.map(employee=>{return <EmployeeDetails id={employee.id} name={employee.name} email={employee.email} />})
    const [employee, setEmployee] = useState()
    const [name, setName] = useState('John')
    const [email, setEmail] = useState('john@demo.com')
    const [id, setId] = useState('1')
   const handleClick = (text) =>{
       
     let emp=  employees.filter(employee=>{if(employee.name==text)return employee})

     
    //   console.log(employee)
        console.log(emp[0].name)
        setName(emp[0].name)
        setEmail(emp[0].email)
        setId(emp[0].id)
    }
    const {t}=useTranslation()
    // const columnTitle=t('employee_name')}
    const columns = [
        {
            title:t('employee_name'),
            dataIndex:'name',
            key:'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            render:text=>
                <Link onClick={()=>handleClick(text)} >{text}</Link>

            
        }
    ]
    const handleChange=(sortor)=>{
        console.log(sortor)
    }

    document.title="People"

    const rowSelection ={
        onChange:(selectedRowKeys,selectedRows)=>{
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
          }),
          onSelect:(record)=>{
              setName(record.name)
              setId(record.id)
              setEmail(record.email)
          },
          selectedRowKeys:employees.filter(employee=>(employee.name==name)).map(emp=>emp.key)

    }
const onClickRow = (record) => {
    return {
      onClick: () => {
       setName(record.name)
    //    console.log('in onclick')
       console.log('in onclick',record.name)
       
      },
    };
  }
  function setclassname(e) {
    console.log('in set class name',e)
       
    return name === e ? 'clickRowStyl' : '';
      }
    return (
        <div id="employee-details-container" >
           <div style={{height:'400px',overflowY:'scroll',width:'60%' ,marginLeft:'auto',marginRight:'auto',marginBottom:'auto',marginTop:'auto'}}>
             {/* <Table id={"table"} onRow={onClickRow} rowClassName={e=>setclassname(e.name)} dataSource={employees}  columns={columns} pagination={false} onChange={handleChange}/> */}
             <Table  rowSelection={{...rowSelection,type:'radio'}}  dataSource={localemployees}  columns={columns} id={"table"} pagination={false} onChange={handleChange}/>
            
             </div>
          
            <div >
           <EmployeeDetails id={id} name={name} email={email} />
           </div>
          
        </div>
    )
}

export default EmployeeDIrectory
