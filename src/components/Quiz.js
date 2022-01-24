import React,{useState} from 'react'

const json=[
    {
        question:'who is the father of our nation?',
        option:{
            option1 :'Mahatma Gandhi',
            option2 :'Jawarhalal Nehru',
            option3 :'Donald Trump',
            option4 :'Barack Obama'
        }
    },
    {
        question:'what is the color of leaves?',
        option:{
            option1 :'Red',
            option2 :'Green',
            option3 :'Blue',
            option4 :'Yellow'
        }
    },
    {
        question:'what color is the sky?',
        option:{
            option1 :'Blue',
            option2 :'Green',
            option3 :'Red',
            option4 :'Yellow'
        }
    },
    {
        question:'what color is the fire?',
        option:{
            option1 :'Black',
            option2 :'White',
            option3 :'Red',
            option4 :'Yellow'
        }
    },
    {
        question:'what is the capital of india?',
        option:{
            option1 :'Mumbai',
            option2 :'Chennai',
            option3 :'New Delhi',
            option4 :'Kolkata'
        }
    }
]

var i=0;
var score=0;
var time=10;
var show_score=false;
var opt='';
const answers=['Mahatma Gandhi','Green','Blue','Yellow','New Delhi']

const Quiz = () => {
    const [question,getQuestion]=useState({question:'',option:{}});
    const [answer,getAnswer]=useState();
    const [scores,getScore]=useState();
    const [baltime,balanceTime]=useState();
    
    if(opt==='option1'&& document.getElementById('option1'))
    {
        document.getElementById('option2').style.cursor='not-allowed'; 
        document.getElementById('option3').style.cursor='not-allowed'; 
        document.getElementById('option4').style.cursor='not-allowed'; 
        document.getElementById('option2').style.opacity='0.3'; 
        document.getElementById('option3').style.opacity='0.3'; 
        document.getElementById('option4').style.opacity='0.3';
        document.getElementById('startbtn').style.display='none';
    }
    else if(opt==='option2'&& document.getElementById('option2'))
    {
        console.log('hello')
        document.getElementById('option1').style.cursor='not-allowed'; 
        document.getElementById('option3').style.cursor='not-allowed'; 
        document.getElementById('option4').style.cursor='not-allowed'; 
        document.getElementById('option1').style.opacity='0.3'; 
        document.getElementById('option3').style.opacity='0.3'; 
        document.getElementById('option4').style.opacity='0.3'; 
        document.getElementById('startbtn').style.display='none';
    }
    else if(opt==='option3'&& document.getElementById('option3'))
    {
        document.getElementById('option1').style.cursor='not-allowed'; 
        document.getElementById('option2').style.cursor='not-allowed'; 
        document.getElementById('option4').style.cursor='not-allowed'; 
        document.getElementById('option1').style.opacity='0.3';  
        document.getElementById('option2').style.opacity='0.3';  
        document.getElementById('option4').style.opacity='0.3';  
        document.getElementById('startbtn').style.display='none';
    }
    else if(opt==='option4'&& document.getElementById('option4'))
    {
        document.getElementById('option1').style.cursor='not-allowed'; 
        document.getElementById('option2').style.cursor='not-allowed'; 
        document.getElementById('option3').style.cursor='not-allowed'; 
        document.getElementById('option1').style.opacity='0.3'; 
        document.getElementById('option2').style.opacity='0.3'; 
        document.getElementById('option3').style.opacity='0.3'; 
        document.getElementById('startbtn').style.display='none';
    }
    else if(document.getElementById('option4'))
    {
        document.getElementById('option1').style.cursor='pointer'; 
        document.getElementById('option2').style.cursor='pointer'; 
        document.getElementById('option3').style.cursor='pointer'; 
        document.getElementById('option4').style.cursor='pointer'; 
        document.getElementById('option1').style.opacity='1'; 
        document.getElementById('option2').style.opacity='1'; 
        document.getElementById('option3').style.opacity='1'; 
        document.getElementById('option4').style.opacity='1'; 
        document.getElementById('startbtn').style.display='none';
    }

    function finish()
    {
        show_score=true;
        console.log(score);
        document.getElementById('res1').innerHTML="your score is";
        document.getElementById('res2').innerHTML=score+"/5";
        document.getElementById('whole').style.display='none';
        document.getElementById('startbtn').style.display='block';
    }

    function timeInterval()
    {
        if(time>0)
        {
            balanceTime(time)
            time--;
            setTimeout(timeInterval,1000)
        }
        else
        {
            startquiz();
        }
    }

    function startquiz()
    { 
       
        if(i===0)
        {
            document.getElementById('whole').style.display='block';
            document.getElementById('res1').innerHTML="";
            document.getElementById('res2').innerHTML=score+"";
        }
        opt='';
        if(i<5)
        {
            time=10;
            getQuestion(json[i]);
            getAnswer(answers[i]);   
        }
        i++;
        if(i<=5)
        {
            document.getElementById("qno").innerHTML=i;
            timeInterval();
            //setTimeout(startquiz,5000)
        }
        if(i===6)
        {
            finish();
            i=0;
            score=0;
        }   
    }

    function selectOpt(data,option)
    {
        opt=option;
        answers.filter(function(value){
            if(value===data)
            {
                score++;
                getScore(score)
            }
        })
    }

    return (
        <div>
            <div className="top">
                <p className="quest">Q no : <span id="qno"></span>/5</p>
                <div className="btn" onClick={startquiz} id="startbtn"><button className="startbtn" >START NOW</button></div>
                <p className="time">{baltime}</p>
            </div>    
            <div id="whole" className="whole">   
                <div className="qa">
                    <p className="question">{question.question}</p>
                    <div className="option">
                        {question.option.option1? (<button onClick={()=>selectOpt(question.option.option1,'option1')} className="optionbtn" id="option1">
                            {question.option.option1}</button>) : null }
                        {question.option.option2? (<button onClick={()=>selectOpt(question.option.option2,'option2')} className="optionbtn" id="option2">
                            {question.option.option2}</button>) : null }
                        {question.option.option3? (<button onClick={()=>selectOpt(question.option.option3,'option3')} className="optionbtn" id="option3">
                            {question.option.option3}</button>) : null }
                        {question.option.option4? (<button onClick={()=>selectOpt(question.option.option4,'option4')} className="optionbtn" id="option4">
                            {question.option.option4}</button>) : null }
                    </div>
                </div>
            </div>
            <div className="scoreboard" id="finalscore">
                <p><span id="res1"></span> <span id="res2"></span> </p>
            </div>    
        </div>
    )
}

export default Quiz
