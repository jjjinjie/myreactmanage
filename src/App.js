import React from 'react';
import './App.css';

import Piao from './feifei/piao';
import Box from './feifei/list';
import ThreeMap  from './3d/earth';

// import axios from 'axios';
// import logo from './logo.svg';


export function Body() {
  const style = { 'font-family': 'arial', 'color':'#FFFFFF', 'font-size': '24px' };
    const styleya = { 'font-family': 'arial', 'color':'#FFFFFF', 'font-size': '24px' };
  return (
    <div style={{'text-align':'center'}}>
        <Logo></Logo>
        <div >
        <span style={ style }>在最后一个瞬间，总有一个以前不存在的理由——即：不可能再犹豫了。</span>
　　<br></br>
　<span style={ styleya }>　——乔治·爱略特</span>
      </div>
      <ThreeMap ></ThreeMap>
      </div>
    
  );
}
class Logo extends React.Component {
  render() {

    return (
      <img className="Logo-size" src={process.env.PUBLIC_URL + '/logo.gif'} />

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
    const style = { 'font-family': 'arial', 'color':'#FFFFFF', 'font-size': '48px' };
    const styleya = { 'font-family': 'arial', 'color':'#FFFFFF', 'font-size': '48px' };
    return (
      <div style={{'text-align':'center'}}>
        
      </div>
    );
  }
}

function Footer() {
  const style = { 'font-family': 'arial', 'color':'#FFFFFF', 'font-size': '24px' ,'text-align':'center'};
  return (
    <div style={style}><span>每个人都有他个人的神秘世界。这世界有它最美好的时节，这世界也有它最可怕的瞬息。可是这都不会为我们所知悉。
　　</span>
<br></br>
<span>——叶甫图中柯</span>
    　　</div>
  );
}


function Root() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      
      <Footer></Footer>
    </div>
  );
}
export { Root, Header, Piao, Box, Footer };
