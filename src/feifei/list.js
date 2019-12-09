import React from 'react';

//展示列表组件
class List extends React.Component{
    render(){
        const {list} = this.props;
        console.log(list)

        return(
            <div>
                {
                    list && list.map((value,index)=>{
                      return  <li key={index}>{value}</li>
                    })
                }
            </div>
        )
    }
}

//输入框组件
class Add extends React.Component{
    add = () =>{
        if(!this.cc.value){ //非空校验
            alert("没填东西")
            return
        }
        this.props.allAdd(this.cc.value); //向父级传递所输入参数
        this.cc.value = "";  
    }
    render(){
        const {lll}= this.props;
        console.log(lll,22)
        return (
            <div>
                {/* ref获取当前DOM（官方不推荐） */}
                <input type="text" ref = {(bb)=>{this.cc = bb;}}/>
                <button onClick={this.add}>加-（长{lll}）</button>
            </div>
        )
    }  
}

//父组件
class Box extends React.Component{
    state = {
        list: []
    }
    componentWillMount(){
        this.setState({
            list: ['a','b','c']
        })
    }
    add=(msgs)=>{
        //如果父组件传入子组件是函数的话 可通过变量如msgs获取子组件参数
        console.log(msgs)
        const {list} = this.state;
        list.unshift(msgs)
        this.setState({list})
    }
    render(){
        const {list} = this.state;
        const leng = list.length;
        return (
            <div>
                {/* 通过allAdd、lll与子组件交互 */}
                <Add allAdd = {this.add }  lll ={leng} /> 
                <List list = {list}/>
            </div>
        )
    }
}

export default Box;
