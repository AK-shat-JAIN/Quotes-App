const dispQuote = document.getElementById('quote');
const dispAuthor = document.getElementById('author');
const btnClick = document.getElementById('btn');
let data;

async function getQuote(){
    try{
        const response = await fetch("https://type.fit/api/quotes");
        data = await response.json();
        console.log("Data is set")
    }
    catch(error){
        console.log(error);
    }
}
getQuote(); 

function getRandomNo(){
    return Math.ceil(Math.random()*data.length)
}

function printValues(){
    dispQuote.innerHTML = `"${data[getRandomNo()].text}"`;
    dispAuthor.innerHTML = `- ${data[getRandomNo()].author}`;
}


btnClick.addEventListener('click',printValues)