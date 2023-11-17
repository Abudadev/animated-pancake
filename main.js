var camera = document.getElementById("camera");
console.log("Version number",ml5.version)
var prediction1 = "";
var prediction2 = "";

Webcam.set({
    width: 300,
    height:250,
    image_format:"jpeg",
    image_Quality:100
});

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src='+data_uri+' id="picture"/>'
    });
    speak1();
};


function speak1(){
    var synth = window.speechSynthesis;
    var speakdata1 = "The first prediction is"+prediction1+" ";
    var speakdata2 = "The second prediction is"+prediction2+" ";
    var utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterthis);
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oBstVlDcH/model.json",con)

function con(){
    console.info("Your model is working!!!")
}

