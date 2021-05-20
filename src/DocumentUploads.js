import React,{useState} from 'react'
import {Button, Upload,Card,Steps,message,Input} from 'antd'
import validator,{isValidNumber,isValidVID} from 'aadhaar-validator'
import {useTranslation} from 'react-i18next'
// import {Upload} from '@progress/kendo-react-upload'
function DocumentUploads(props) {
  const user = localStorage.getItem('existusername')
if (user==null) {
    props.history.push('/sign-in')
  
} 
    const [current, setCurrent] = useState(0)
    const [disable, setDisable] = useState(false)
    const [addhar, setAddhar] = useState('')
    const [pan, setPan] = useState('')
    const [loading, setLoading] = useState(false)
    const [img, setImg] = useState('')
    const { Step } = Steps;
    const verifyAadhar=(number)=>{
    //   console.log("before verify aadhar ",current)
    //  if (validator.isValidNumber(number)) {
       setCurrent(current+1)
    //  } else {
    //   message.error('invalid')
    //   setAddhar('')
    //  }
    }
    const VerifyPan=(number)=>{
      // console.log("before verify pan ",current)

      // let   regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

      // if(regex.test(number)) {
        setCurrent(current + 1);

           return true;

    //   }else{
    // message.error('invalid')
    // setPan('')
    //   return false;
    // }
  }



    function beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
        return false
      }
      return true;
    }

    function getBase64(img, callback) {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
     setCurrent(current+1)
    }
    const dummyRequest = ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    };
   const handleChange = info => {
      if (info.file.status === 'uploading') {
      setLoading(true)
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          // this.setState({
          //   imageUrl,
          //   loading: false,
          // }),
          setImg(imageUrl),
          // setLoading(false)
        );
      }
    };

    const steps = [
        {
          title: 'Aadhar card',
          content: <div>
          {/* <Input type={"text"} value={addhar} onChange={(e)=>setAddhar(e.target.value)} placeholder={'enter aadhar number'}/>
          <Button onClick={()=>verifyAadhar(addhar) }>Verify Addhar</Button> */}
            <Upload
              // defaultFileList={[{uid:-1,status:"success",url:img}]}

             accept={'image/*'}
            beforeUpload={beforeUpload}
          onChange={handleChange}
          customRequest={dummyRequest}
            >
              <Button >Upload aadhar card</Button>
            </Upload> 
        </div>,
        },
        {
          title: 'Pan card',
          content: <div>
            {/* <Input type={"text"} value={pan} onChange={(e)=>setPan(e.target.value)} placeholder={'enter pan number'}/>
            <Button onClick ={()=>VerifyPan(pan)}>Verify Pan</Button> */}
              <Upload
              // defaultFileList={[{uid:-1,status:"success",url:img}]}

             accept={'image/*'}
            beforeUpload={beforeUpload}
          onChange={handleChange}
          customRequest={dummyRequest}
            >
              <Button >Upload pan card</Button>
            </Upload> 
          </div>,
        },
        {
          title: 'Bank Statement',
          content: <div>
             <Upload
              // defaultFileList={[{uid:-1,status:"success",url:img}]}

             accept={'image/*'}
            beforeUpload={beforeUpload}
          onChange={handleChange}
          customRequest={dummyRequest}
            >
              <Button >Upload bank statement</Button>
            </Upload> 
        
             {/* <Upload
      batch={false}
      restrictions={{
        allowedExtensions: [".jpg", ".png"],
        maxFileSize:4000000
      }}
      defaultFiles={[]}
      withCredentials={false}
      saveUrl={"http://localhost:3000/menu/document-upload"}
      removeUrl={"http://localhost:3000/menu/document-upload"}
    /> */}
          </div>
        },
        {
          title: 'Completed',
          content: <div>
            <h2>Document upload completed</h2>
          </div>
        },
      ];

      console.log(steps.length)
      // const next = () => {
      //   // if (current==2) {
          
      //   // } else {
          
      //   // }
      //   setCurrent(current + 1);
      //   console.log('current'+current)
      // };
    
      const prev = () => {
        setCurrent(current - 1);
      };

      const submittedAll=()=>{
          message.success("Documents uploaded successfully !!!")
        setDisable(true)
      }

      const {t} =useTranslation()

      document.title="Document upload"

    return (
        
        <div>
            <Card id={"card"} title={t("Upload_document")}>
                <h2>
                    Upload Aadhar card,Pancard,last month's bank statement for employee verification.
                </h2>
                <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
            {/* <Upload beforeUpload={()=>false} onRemove={prev} disabled={disable}> */}
                <div className={'steps-action'}>
                {/* <Button onClick={()=>next}>Upload documents</Button> */}
                <div className="steps-content">{steps[current].content}</div>
                {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} style={{color:"white",background:"cadetblue"}}>
            Next
          </Button>
        )} */}
        {/* {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )} */}
         {current === steps.length && (
            <Button type="primary" style={{color:"white",background:"cadetblue"}} onClick={submittedAll}>
            Done
          </Button>
       
        )} 
       
                </div>
            {/* </Upload> */}
           
            </Card>
        </div>
    )
}

export default DocumentUploads
