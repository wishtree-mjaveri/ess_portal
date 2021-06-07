import React, { useState } from "react";
// import { Button, Card, Input, Form, message, Upload } from "antd";
import Button from 'antd/es/button/button'
import Card from 'antd/es/card/index'
import Input from 'antd/es/input/index'
import Form from 'antd/es/form/index'
import message from 'antd/es/message/index'
import Upload from 'antd/es/upload/index'
// import image from "./employeeThumbnail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import joi from 'joi'
function EditEmployee() {
  const FormItem = Form.Item;
  let employeeinfo = localStorage.getItem("user");
  let employee = JSON.parse(employeeinfo);

  console.log(employee);



  const [editdisable, setEditdisable] = useState(true);
  const [phone, setPhone] = useState(employee.phoneno);
  const [currentAddress, setCurrentAddress] = useState(employee.currentAddress);
  const [permanentAddress, setPermanentAddress] = useState(
    employee.permanentAddress
  );
  const [error, setError] = useState('')


  const schema = joi.object({
    phone:joi.number().required(),
    currentAddress:joi.required(),
    permanentAddress:joi.required()

  })

  const [image, setImage] = useState('')


  const  saveEdit = () => {
    if (
      phone.length == 0 ||
      permanentAddress.length == 0 ||
      currentAddress.length == 0
    ) {
      message.error("Please fill the empty spaces");
    } else {

     const result= schema.validate({phone:phone,currentAddress:currentAddress,permanentAddress:permanentAddress})
     if (result.error) {
       
      return message.error(result.error.details[0].message)
      // setError(result.error.details[0].message)
     } else {
       
     
  //   try {
  //     const value = await schema.validateAsync({ phone:phone,currentAddress:currentAddress,permanentAddress:permanentAddress });
  // }
  // catch (err) {
  //  return message.error(err)
  //  }
    // console.log(result)
      let data = {
        username: employee.username,
        phoneno: phone,
        currentAddress: currentAddress,
        permanentAddress: permanentAddress,
        image:image
      };
      localStorage.setItem("user", JSON.stringify(data));
      message.success("Edit successful");
    }
  }
  };
//  const validate = () => {
//     const options = { abortEarly: false };
//     const { error } = joi.validate(phone, schema, options);
//     if (!error) return null;

//     const errors = {};
//     for (let item of error.details) {
//       errors[item.path[0]] = item.message;
//     }
//     return errors;
//   };

//  const validateProperty = ({ name, value }) => {
//     const obj = { [name]: value };
//     const schema = { [name]: schema[name] };
//     const { error } = joi.validate(obj, schema);
//     return error ? error.details[0].message : null;
//   };

  // handleChange = (e) => {
  //   const errors = { errors };
  //   const errorMessage = validateProperty(e.target.value);
  //   if (errorMessage) errors[input.name] = errorMessage;
  //   else delete errors[input.name];

  //   const data = { ...this.state.data };
  //   data[input.name] = input.value;

  //   this.setState({ data, errors });
  // };


  const onChange=(e)=>{
   
  //  let validateProperty=(name,value,schema)=>{
  //   const obj = {
  //     [phone]: phone
  // };
  // const fieldSchema = {
  //     [phone]: schema[phone]
  // };
  //return result
  const result = schema.validate({phone: setPhone(e.target.value)},{abortEarly:true},);

  // result.error === null -> valid
  // if (result.error) {
  //   setError(result.error.details[0].message)
  // } else {
  //   return null
  // }
  //   }
  if (result.error) {
    setError(result.error.details[0].message)
  }else{
    return null

  }

  }

  const onFileChange = (event) => {
    
      setImage("")
    console.log('in on file change')
    const  file  = event.file;
    const reader = new FileReader();
    const maxSize = 2000000;
    if (file.size <= maxSize) {
      reader.onload = function (e) {
        const img = new Image();
        img.onload = () => {
          console.log('in onload')
          setImage(reader.result);
          console.log(image)
        };
        img.onerror = (error) => {
          console.log(error);
        //   setErrorimage(true);
        //   seterrorMessage('Unable to store this image');
          message.error("Unable to load this image")
        };
        
        img.src = e.target.result;
        console.log('RESULT', reader.result);
      };
    } else if (file.size > maxSize) {
    //   setErrorimage(true);
    message.error('unable to store image file greater than 2 mb');
    } else {
    //   seterrorimage(true);
    //   seterrorMessage('');
    message.error("please select another image")
    }
    if(file){
    var res = reader.readAsDataURL(file);
    }// const res = reader.readAsDataURL(file);
    console.log('asd', res);
  };

  let defaultFileList=employee.image!=""?[{uid:1,status:"done",url:employee.image}]:null;
  return (
    <div>
      <Card>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridTemplateRows: "repeat(3,1fr)",
            gridGap: "20px",
            textAlign: "left",
            overflow:"auto"
          }}
        >
          <div style={{ gridColumn: "1 / span 1", gridRow: "1 /span 2" }}>
            {/* <img src={image} alt={"Employee image"} style={{height:"180px",width:"auto"}} /> */}
            <Upload
              name="avatar"
              className="avatar-uploader"
              type="select"
              listType="picture-card"
              showUploadList={true}
              beforeUpload={()=>false}
              onChange={onFileChange}
              defaultFileList={defaultFileList}
              onRemove={()=>message.error("Image removed")}
              maxCount={1}
            >
                <FontAwesomeIcon icon={faCamera} />
                </Upload>
          </div>
          <div style={{ gridColumn: "2 /span 2", gridRow: "1 /span 1" }}>
            <h3>Name</h3>
            <hr />
            Madhav
          </div>
          <div>
            <h3>Location</h3>
            <hr />
            Pune
          </div>
          <div>
            <h3>Employeeid</h3>
            <hr />
            #ESS1019
          </div>
          <div>
            <h3>Primary Contact No</h3>
            <hr />
            <Input
              value={phone}
              type={"text"}
              maxLength={10}
              placeholder={"enter phone number"}
              onChange={onChange}
              style={{ width: "300px", margin: "3px" }}
              name="phone"
            />

            <FontAwesomeIcon icon={faPencilAlt} onClick={() => setPhone("")} />
            <br/>
            
          </div>
          <div>
            <h3>Company mail id</h3>
            <hr />
            madhav@essportal.com
          </div>
          <div>
            <h3>Extension</h3>
            <hr />
            --------------
          </div>
          <div style={{ gridColumn: "1 /span 3" }}>
            <h3>Current Address</h3>
            <hr />
            <Input.TextArea
              value={currentAddress}
              placeholder={"Enter current adress"}
              onChange={(e) => setCurrentAddress(e.target.value)}
              style={{ width: "100px", margin: "5px" }}
            />
            <span>
              <FontAwesomeIcon
                icon={faPencilAlt}
                onClick={() => setCurrentAddress("")}
              />
            </span>
          </div>
          <div style={{ gridColumn: "1 /span 3" }}>
            <h3>Permanent Address</h3>
            <hr />
            <Input.TextArea
              value={permanentAddress}
              placeholder={"Enter permanent address."}
              onChange={(e) => setPermanentAddress(e.target.value)}
              style={{ width: "100px", margin: "5px" }}
            />
            <span>
              <FontAwesomeIcon
                icon={faPencilAlt}
                onClick={() => setPermanentAddress("")}
              />
            </span>
          </div>
          <div>
            <Button onClick={saveEdit}>Save changes</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EditEmployee;
