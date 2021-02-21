console.log('The first API program');
var btn =document.getElementsById("button");
function getData()
{
    url="https://api.github.com/users";
    btn = fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
    console.write(data);
}
getData();
