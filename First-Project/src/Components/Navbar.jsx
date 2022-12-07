import react from "react";

export default function navbar() {
  return (
    <nav className='navbar'>
      <div className='color--div'>
        <div className='logo'>
          {/* <img src={devsignLogo} width="50px" alt="" /> */}
          <h1>Dev</h1>
        </div>
        <ul className='nav--ul'>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
        </ul>
      </div>
      <div class='inputbox'>
        <input required='required' type='text' />
        <span>Filter</span>
        <i></i>
      </div>
      <div className='log-ham'>
        <div class='button'>
          <div class='box'>B</div>
          <div class='box'>I</div>
          <div class='box'>K</div>
          <div class='box'>E</div>
          <div class='box'>S</div>
        </div>
        {/* <h1 className='login'>Login</h1> */}
      </div>
    </nav>
  );
}
