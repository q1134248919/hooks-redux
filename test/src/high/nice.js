import React from 'react';

const envs = {
    weixin: '微信',
    qq: 'QQ',
    baiduboxapp: '手机百度',
    weibo: '微博',
    other: '移动端'
}

function withEnvironment(BasicComponent) {
  
    
    let env = 'other';
 
  
    // 通过定义的中间组件将页面所处环境通过props传递给基础组件
    render() {
      
        return (
            <div>
           111
            </div>
        )
    }
    

   
}


export default withEnvironment;