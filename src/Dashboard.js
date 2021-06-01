import React,{useState} from 'react'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import {Card, Col, Row} from "antd"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from '@fortawesome/fontawesome-svg-core'

import { Animation } from '@devexpress/dx-react-chart';
import { faDesktop, faLongArrowAltUp, faMouse } from '@fortawesome/free-solid-svg-icons';
function Dashboard() {
    const data = [
        { month: 'Jan', employees: 1.0 },
        { month: 'Feb', employees: 2 },
        { month: 'Mar', employees: 0 },
        { month: 'Apr', employees: 0 },
        { month: 'May', employees: 3 },
        { month: 'Jun', employees: 4 },
        { month: 'Jul', employees: 5 },
        { month: 'Aug', employees: 4 },
        { month: 'Sep', employees: 1 },
        { month: 'Oct', employees: 5 },
        { month: 'Nov', employees: 6 },
        { month: 'Dec', employees: 6 },
     
    ];
    const [chartData, setChartData] = useState(data)
    
    return (
        <div>
            
            <div >
       <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 32 }}>
         <Col flex={'25%'}>
        <Card className="col-12" style={{borderRadius:"23px",backgroundImage:"radial-gradient(white -71px, darkorange)"}}>
        <FontAwesomeIcon icon={faMouse} style={{margin:'auto',width:"36px",height:"auto"}}/>
        <h2>2000 online</h2>

        </Card>
        </Col>
        <Col flex={'25%'}>
        <Card className="col-12"  style={{borderRadius:"23px",backgroundImage:"radial-gradient(cornsilk 48px, yellow)"}}>
        <FontAwesomeIcon icon={faLongArrowAltUp} style={{margin:'auto',width:"22px",height:"auto"}}/>
        <h2>20% growth</h2>
        </Card>
        </Col>
        <Col flex={'25%'}>
        <Card className="col-12"  style={{borderRadius:"23px",backgroundImage:"radial-gradient(white -50px ,blueviolet)"}}>
        <FontAwesomeIcon icon={faDesktop} style={{margin:'auto',width:"54px",height:"auto"}}/>
        <h2>3000 visits</h2>
        </Card>
        
        </Col>
        <Col flex={'25%'}>
        <Card className="col-12"  style={{borderRadius:"23px",backgroundImage:"radial-gradient(cornsilk 48px, yellow)"}}>
        <FontAwesomeIcon icon={faLongArrowAltUp} style={{margin:'auto',width:"22px",height:"auto"}}/>
        <h2>20% growth</h2>
        </Card>
        </Col>
        </Row>
        <div/>
       
            
        </div>
        <div >
        <Row>
          <Col flex={'auto'}>
        <div style={{margin:"10px"}}>

         
        <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={12} />

          <BarSeries
            valueField="employees"
            argumentField="month"
          />
          <Title text="Employees on leave/month" />
          <Animation />
        </Chart>
      </Paper>
     
        </div>
        </Col>
        <Col flex={'auto'}>
        <div style={{margin:"10px"}}>
          
        <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis   />
          <ValueAxis max={12} />

          <BarSeries
            valueField="employees"
            argumentField="month"
          />
          <Title text="New Employees Joining /month" />
          <Animation />
        </Chart>
      </Paper>
     
        </div>
        </Col>
        </Row>
        </div>
        </div>
    )
}

export default Dashboard
