import React, { Component } from 'react'

export class Resources extends Component {

    handleLink = () => {
        window.location = "https://github.com/Leoncodes00/React-Project"
    }

    render() {
        return (
            <div className="pos-f-t">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="/home">Type & Hamsters</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/resources">Resources</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Sign out</a>
      </li>
    </ul>
  </div>
</nav>
<div className="me-img">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--3u_sBqYu--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/246456/0ff1d921-91a7-484e-b0ab-88a58c1966cf.png" class="rounded-circle" alt="Cinque Terre"></img>
</div>
<div className="button-link">
<button onClick={this.handleLink} type="button" class="btn btn-primary btn-block">Github Repo
</button>

</div>
</div>

        )
    }
}

export default Resources
