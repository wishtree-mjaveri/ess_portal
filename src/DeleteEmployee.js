import React,{useState} from 'react'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import Modal from 'antd/es/modal/Modal'
function DeleteEmployee({deleteEmployee,empkey}) {
    const [isModelVisisble, setIsModelVisisble] = useState(false)
    const showModal=()=>{
        setIsModelVisisble(true)
    }
    const handleOk=(e)=>{
        e.preventDefault()
        deleteEmployee(empkey)
        setIsModelVisisble(false)
    }
    return (
        <div>
            <DeleteOutlined onClick={showModal}/>
            <Modal visible={isModelVisisble} onOk={handleOk} onCancel={e=>setIsModelVisisble(false)}>
                Do you want to delete selected employee ? 
            </Modal>
        </div>
    )
}

export default DeleteEmployee
