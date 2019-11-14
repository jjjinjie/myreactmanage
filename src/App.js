import React from 'react';
import './App.css';
// import axios from 'axios';
import logo from './logo.svg';

export function Body() {
  return (
    <div>生活内容
    </div>
    
  );
}
class Logo extends React.Component
{
  render()
  {
    
  return (
    <img  className="Logo-size" src={process.env.PUBLIC_URL + '/logo.gif'} /> 
  
  );
}
}
class Header extends React.Component {

  render() {
    // axios.get('/rest/websiteconfig/siteInfo/1')
 
    //   .then(res => {
 
    //     // const posts = res.data.data.children.map(obj => obj.data);
 
    //     // this.setState({ posts });
    //     console.log(res);
    //   });
    const style = {'font-family':'arial','color':'green','font-size':'20px'};
    return (
      <div>
        <Logo></Logo>
        <span style={style}>欢迎</span>
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
