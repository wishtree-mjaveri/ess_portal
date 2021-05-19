import React,{useState} from 'react'

import GoogleLoginn  from 'react-google-login'
function GoogleLogin(props) {
const [username, setusername] = useState('')
const responseGoogle = (response) => {
   console.log(response.profileObj)
    
    setusername(""+response.profileObj.givenName+" "+response.profileObj.familyName)
   
  }
  const failureResponse=(response)=>{
      console.log(response)
  }

  if (username.length>0) {
    props.history.push('/menu/home',{username:username})
    
    //  props.history.push('/home',{username:username})
  } else {
      console.log('no user')
  }

    return (
        <div style={{padding:'10px'}}>
            <GoogleLoginn
             clientId='1050943144590-9sbphr2nra2v11f01c72mbjsh53jt6i7.apps.googleusercontent.com'
             
             onSuccess={responseGoogle}
             onFailure={failureResponse}
            //  cookiePolicy={'single_host_origin'}
             
            />
        </div>
    )
}

export default GoogleLogin
