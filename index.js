import {Component} from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosLock } from "react-icons/io"

import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/6fad/2083/8855997d164dd88d885fad87bdfa3be6?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRzs0NgjfwnOwqv9731cmwpVju79wiJBz7fvbGefjxeErAYOVTCFwh6eDp~SExh-85SyT6KahU70BRoZD3803XvGM8HcK-RO3z-OzoredvQlmLk3xvDgm0nwBZoDM40yX~-va2IiGu1D~JtUyqXR~3EVsSqp19qNv6lYdqG~2PXeJwy9BlCLsBqok9FA9526exb2zhJZqYIPEYdfB8q35SaB~ewBiRv8A6pzV1W31tuqXckkVc2iJJlczCeEFKzJXPe1IdFHQiVJ6c3-HIDt7UKsm1M5uzJ12jMYrU8ZXKeq1tcbyGJl416Kib1OQrBiij4TboFhDEONLp5GN~gRvQ__"
            alt="logo mart"
            className="logo-mart"
          />
          <form>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              className="user-input"
              <CgProfile />
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              className="password-input"
              <IoIosLock />
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Login
