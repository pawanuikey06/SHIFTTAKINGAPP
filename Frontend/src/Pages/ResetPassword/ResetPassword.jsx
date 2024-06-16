
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './resetpass.css'
const ResetPassword = () => {
  return (

    <>
      <Navbar/>
      <div className="login-container">
            <form action="">
              <h2>Forgot Password</h2>
              <label htmlFor="">Email</label>
              <div className="password">
                <input type="text"  id ="email" name='email'/>
              </div>
              <span className="login-btn">Submit</span>
            </form>
      </div>
      <Footer/>
    </>  
  )
}

export default ResetPassword