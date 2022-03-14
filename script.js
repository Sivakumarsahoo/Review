const click=document.querySelectorAll("button");
const name=document.querySelectorAll("p");
const image=document.querySelectorAll("img");
let index="0";

function func()
{
    console.log(this.innerHTML);
    if(this.innerHTML=="Random")
    {
    const random=Math.floor(Math.random()*7);
    
    name[0].innerHTML=info[random].a;
    image[0].setAttribute("src",info[random].b);
    name[1].innerHTML=info[random].c;
    }
    else if(this.innerHTML=="&gt;")
    {
        index+="+1";
        let random=eval(index);
        if(random>6)
            index="6";
        console.log(random);
    name[0].innerHTML=info[random].a;
    image[0].setAttribute("src",info[random].b);
    name[1].innerHTML=info[random].c;


    }
    else if(this.innerHTML=="&lt;")
    {
        index+="-1";
        let random=eval(index);
        if(random<-1)
            index="0";
        console.log(random);
    name[0].innerHTML=info[random].a;
    image[0].setAttribute("src",info[random].b);
    name[1].innerHTML=info[random].c;


    }

    
}
for(let i=0;i<3;i++)
{
    click[i].addEventListener("click",func);
}
const info=[{a:"Sikha",b:"img1.jpg",c:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias minus consectetur, corporis ducimus quas corrupti nemo earum fugiat aliquid rem?"},
            {a:"Siva",b:"img2.jpg",c:" but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the re"},
            {a:"Roshni",b:"img3.jpg",c:"'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use fault model text, and a "},
            {a:"Patra",b:"img4.jpg",c:"consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections "},
            {a:"Rupam",b:"img5.jpg",c:"orem Ipsum generators on the Internet tend to repeat predefined chunks rator on the Internet. It uses a dictionary of over 200 Latin words, "},
            {a:"verma",b:"img6.jpg",c:" making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"},
            {a:"Sukanya",b:"img7.jpg",c:"How nice siva you are fantastic I'm speechless"}]

    // console.log(name[1].innerHTML);
    