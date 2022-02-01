let damage = 0;

function eleMaker(name,val){
    let ele = document.createElement("div")
    ele.innerHTML=name;
    ele.addEventListener("click",function (){
        if(val) {
            increase(val);
        }

    });
    document.body.querySelector(".main").appendChild(ele);
}
function increase(val){
    damage=damage+val;
    document.body.querySelector(".damage").innerHTML=damage;
}

function resetDamage(){
    damage = 0;
    document.body.querySelector(".damage").innerHTML = "";
    let childNod = document.body.querySelector(".main");
    // let removeMe = (childNod.lastChild);
    // childNod.removeChild(removeMe);
    // let anotherRemoveMe = childNod.lastChild;
    // childNod.removeChild((anotherRemoveMe))
    while(childNod.hasChildNodes()){
        childNod.removeChild(childNod.lastChild);
    }
}

document.body.querySelector(".reset").addEventListener("click", resetDamage)
document.body.querySelector(".IronMan").addEventListener("click",function (){
    eleMaker("CatchPhase: I AM IRON MAN ")
    eleMaker("Damage deals to Thanos",10);

});

document.body.querySelector(".spiderMan").addEventListener("click",function (){
    eleMaker("CatchPhase: with great power comes great responsibility")
    eleMaker("Damage deals to Thanos",5);

});


document.body.querySelector(".CaptainAmerican").addEventListener("click",function (){
    eleMaker("CatchPhase: Avengers Assemble")
    eleMaker("Damage deals to Thanos",7);

});

document.body.querySelector(".Hawkeyes").addEventListener("click",function (){
    eleMaker("CatchPhase: Whosoever, be he worthy, shall have the power")
    eleMaker("Damage deals to Thanos",3);

});











