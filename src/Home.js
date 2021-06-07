import React,{useState} from 'react'
// import {Card,Row,Col} from 'antd/es/card'
import Row from 'antd/es/row/index'
import Col from 'antd/es/col/index'
import Card from 'antd/es/card/index'
import UploadOutlined from '@ant-design/icons/UploadOutlined'
import TeamOutlined from '@ant-design/icons/TeamOutlined'
import BarsOutlined from '@ant-design/icons/BarsOutlined'


import taskComplete from './undraw_completed_tasks_vs6q (1).svg'
import file from './undraw_Add_files_re_v09g (1).svg'
import People from './undraw_people_search_wctu (1).svg'
import {useTranslation} from 'react-i18next/dist/es/useTranslation'
function Home(props) {
   
// let user=localStorage.getItem('existusername')
const user = localStorage.getItem('existusername')
if (user==null) {
    props.history.push('/sign-in')
  
} 
document.title="Home"

const [existuser, setuser] = useState('')
const {t} =useTranslation()
if (props.location.state) {
    const {username} =props.location.state;
    console.log(username)
    // setuseremail(email)
    localStorage.setItem('existusername',username)
} else {
   
}


    return (
       
        <div style={{display:'grid'}}>
        <div>
           <h2>{t("hello")},{existuser.length!==0?existuser:localStorage.getItem('existusername')}</h2>
           <br/>
           <h3>{t("welcome_msg")} </h3>
           <h3>{t("introduction")} </h3>
        </div>
        <div className="home-grid" >
            <Row>
                <Col flex={'auto'}>
        <div><Card style={{gridColumn:1,}}  >
            <BarsOutlined style={{color:"cadetblue"}} />
                <h3 style={{color:"cadetblue"}}>{t("Tasks")} </h3>
                <br/>
                <h3>{t("task_card")} </h3>
             
          
            </Card></div>
            </Col>
            <Col flex={'auto'} >
            <div><img id={'callout-div-image'} src={taskComplete}/></div>
            </Col>
            </Row>
            <Row>
                <Col flex={"auto"}>
        <div><img id={'callout-div-image'} src={file}/></div>
        </Col>
        <Col flex={'auto'} >
        <div> <Card style={{gridColumn:2,}}>
            <UploadOutlined size={'10px'} style={{color:"cadetblue"}}/>
                <h3 style={{color:"cadetblue"}}>{t("Upload_document")} </h3>
                <br/>
                <h3>{t('emp_card')} </h3>
            </Card></div>
            </Col>
            </Row>
            <Row>
      <Col flex={'auto'}>
        <div> <Card style={{gridColumn:3,}} >
            <TeamOutlined style={{color:"cadetblue"}}/>
                <h3 style={{color:"cadetblue"}}>{t("People")} </h3>
                <br/>
                <h3>{t('people_card')} </h3>
            </Card></div>
            </Col>
            <Col flex={'auto'} span={10}>
            <div> <img id={'callout-div-image'} src={People}/></div>
            </Col>
            </Row>
        <div></div>
            
            
           
           
           
        </div>
        </div>
    )
}

export default Home
