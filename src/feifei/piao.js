import React from 'react';
// import imgURL from './img.jpg';

class Piao extends React.Component {
    constructor(props) {
      super(props);
      this.state = { top: "100", left: "100" };
    }
    
    componentDidMount(){
      this.runpiao();
    }
    runpiao(){
      let x1 = 1;
      let y1 = 1;
  
        const winwidth = document.body.offsetWidth - 100;
        const winheight = document.body.offsetHeight - 150;
  
        let aa = 6;
        let bb = 6;
        setInterval(() => {
  
          if (x1 > winwidth || x1 < 0) {
            // aa =aa + Math.random();
            aa = -aa;
          }
          x1 += aa;
  
          if (y1 > winheight || y1 < 0) {
            // bb = bb + Math.random();
            bb = -bb;
          }
  
          y1 += bb;
          this.setState({
            top: y1,
            left: x1
          })
        }, 10);
    }
  
    test(e){
      alert("点到了");
    }
    render() {
      const xx = this.state.top
      const yy = this.state.left
      return (
        <div className='Piao' id="piao" style={{ top: xx + "px", left: yy + "px" }} onClick={(e)=>{this.test(e)}}>
          {/* <img src={imgURL} /> */}
        </div>
      );
    }
  }


  export default Piao;
