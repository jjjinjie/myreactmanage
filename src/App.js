import React from 'react';
import './App.css';
// import axios from 'axios';
import logo from './logo.svg';
import imgURL from './aaaaa.jpg';

export function Body() {
  return (
    <div>内容11</div>
  );
}
class Header extends React.Component {

  render() {
    // axios.get('/rest/websiteconfig/siteInfo/1')

    //   .then(res => {

    //     // const posts = res.data.data.children.map(obj => obj.data);

    //     // this.setState({ posts });
    //     console.log(res);
    //   });
    return (
      <div>
        <img src={logo} style={{ height: 4 + 'em', width: 4 + 'em' }}></img>
      </div>
    );
  }
}

function Footer() {
  return (
    <div>我是页脚</div>
  );
}



let onflag = true;


class Piao extends React.Component {
  constructor(props) {
    super(props);
    this.state = { top: "1", left: "1" };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    let x1 = 1;
    let y1 = 1;
    
    console.log(32)
    if (onflag) {
      onflag = false;
      // let box= document.getElementById("html");
      console.log(window.screen.width,222)
      let winwidth = document.body.offsetWidth - 100;
      let winheight = document.body.offsetHeight - 150;

      let aa = 1;
      let bb= 1;
      setInterval(() => {
       
        if(x1 > winwidth || x1 < 0){
          // aa =aa + Math.random();
          aa= -aa;
        }
        x1 += aa;
        
        if(y1 > winheight || y1 <  0){
          // bb = bb + Math.random();
          bb = -bb;
        }
       
        y1 += bb;
        this.setState({
          top: y1,
          left: x1
        })
      }, 1);
    }
  }

  render() {
    let xx = this.state.top
    let yy = this.state.left

    // alert(xx)
    return (
      <div className='Piao' style={{ top: (xx) + "px", left: (yy) + "px" }} onClick={this.handleClick}> 
        
        <img src={imgURL } />

      </div>
    );
  }
}










function Root() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Piao></Piao>
      <Footer></Footer>
    </div>
  );
}
export { Root, Header, Piao, Footer };
