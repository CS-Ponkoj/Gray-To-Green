$.ajax({
    url:"https://api.nasa.gov/planetary/apod?api_key=zxq7Dum0PAiscGq6IbhBMkscGpvJAl0zmJBfgVbd",
    
    success:function(whatyougot){
        document.getElementById("img").innerHTML="<img src="+whatyougot.url+" style='width=100%;'/>";
        document.getElementById("copyright").innerHTML="By "+whatyougot.copyright;
        document.getElementById("title").innerHTML=whatyougot.title;
        document.getElementById("date").innerHTML=whatyougot.date;
        document.getElementById("explanation").innerHTML=whatyougot.explanation;
    }
});