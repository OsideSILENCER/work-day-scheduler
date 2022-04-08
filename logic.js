var currentDay = moment();


function realtime() {
    let time = moment().format('YYYY:MMM:Do:hh:mm:ss.SS a').replace("m", "");
    document.getElementById('currentDay', 'time').innerHTML = currentDay, time;

setInterval(() => {
    currentDay, time = moment().format('YYYY:MMM:Do:hh:mm:ss.SS a');
    document.getElementById('currentDay', 'time').innerHTML = currentDay, time;
}, 0)

}

realtime();

var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    alert("You have saved this message");
});

function mySave() {
    var myContent = document.getElementById("myTextarea").value;
    localStorage.setItem("myContent", myContent);
}