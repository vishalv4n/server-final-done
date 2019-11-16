var express=require("express");
var mysql=require("mysql");
var server=express();
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'asdm'

})
var data=[];
// console.log("hello");
connection.connect();
server.get("/",function(request,response){
    query=`select * from employee`
    connection.query(query,(err,result)=>{
        if(err==null)
        {
            data=result;
            response.send(data);
        }
        else
        {
            response.send(err);
        }
    })
// response.send("welcome to server ");
})

server.post("/",function(request,response){
    // let no=parseInt(request.body.no);
    let name=request.body.name;
    console.log(name);
    let department=request.body.department;
    let salary=parseInt(request.body.salary);
    let query=`insert into employee (name,department,salary)values('${name}','${department}',${salary})`;
    connection.query(query,(err,result)=>{
        if(err==null)
        {
            data=result;
            console.log(query);
            response.send(data);
        }
        else
        {
            response.send(err);
        }
    })
})
server.put("/:id",(request,response)=>{
    let name=request.body.name;
    let no=request.params.id;
    let query=`update employee set name='${name}' where id=${no}`
    connection.query(query,(err,result)=>{
        if(err==null)
        {
            data=result;
            console.log(query);
            response.send(data);
        }
        else
        {
            response.send(err);
        }
    })
})


server.delete("/:id",(request,response)=>{
    // let name=request.body.name;
    let no=request.params.id;
    let query=`delete from employee where id=${no}`
    connection.query(query,(err,result)=>{
        if(err==null)
        {
            data=result;
            console.log(query);
            response.send(data);
        }
        else
        {
            response.send(err);
        }
    })
})
server.get("/:id",(request,response)=>{
    let id=parseInt(request.params.id);
    query=`select * from employee where id=${id}`
    connection.query(query,(err,result)=>{
        if(err==null)
        {
            data=result;
            console.log(query);
            response.send(data);
        }
        else
        {
            response.send(err);
        }
    })
})

module.exports=server;
