import React from 'react';
import './App.css';
// import axios from 'axios';
import logo from './logo.svg';

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
        <img src={logo} style={{height: 4 + 'em',width:4+'em'}}></img>
      </div>
    );
  }
}
 
function Footer() {
  return (
    <div>我是页脚</div>
  );
}
function Root()
{
  return (
    <div>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </div>
  );
}
export  {Root,Header,Footer};
