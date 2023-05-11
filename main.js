Varnamesofpeople = [];

function submit()
{
    var guestname = document.getelementbyid("name1").value;
    namesofpeople.push(guestname);

    console.log(guestname);

    console.log(namesofpeople);
    var lenghtofname = namesofpeople.lenght;
    console.log(lenghtofname);
    document.getElementById("displayName").innerHTML=namesOfPeople.toString();

}
function sorting()
{
    var i= namesofpeople.join("<br>");
    console.log(namesOfPeople);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sortButton").style.display="block";
}
function searching()
{
    var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<namesOfPeople.length; j++)
          {
            if(s==namesofpeople[j]){
          }
          found=found+1;
        }
 document.getelementbyid("p2").innerHTML="nome encontrado "+found+" vez(es)";
 console.log("nome encontrado "+found+" vez(es)");   
}
                                                   