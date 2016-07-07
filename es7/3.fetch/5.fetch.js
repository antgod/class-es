/**
 * Created by lihongji on 16/7/8.
 */

let fetch=({url,success,fail,method,body,headers,contentType})=>{
    window.fetch(url,{
        credentials: "same-origin",
        method:method?method:'get',
        mode:'no-cors',
        headers,
        body
    }).then(res=>{
        if(contentType=='json'){
            return res.json();
        }else{
            return res.text();
        }
    }).then(data=>{
        typeof success == 'function' && success(data);
    }).catch(e=>{
        typeof fail == 'function' && fail(e);
    })
};