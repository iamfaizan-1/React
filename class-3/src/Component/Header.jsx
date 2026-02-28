
function Header(){

const Details = [
    {
        firstName:"Muhammad",
    LastName:"Faizan",
    age:21
    }
    ,
    {
        firstName:"Muhammad",
    LastName:"faraz",
    age:23
    },
     {
        firstName:"Ahmed",
    LastName:"Shehzad",
    age:23
    }
    


]
    


function getDetails(user){

    return user.firstName+" "+user.LastName;

}

return(

    <div>
<p>Hello this is a header</p>
<ul>
    {
        Details.map((user,index)=>(
            <li>{getDetails(user)} is {user.age} years old</li>
        )

        )
    }
</ul>
    </div>
)

}


export default Header