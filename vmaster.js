backgroundcheck();

function backgroundcheck() {
    let backgroundwork = localStorage.getItem("backgroundwork");
    console.log(backgroundwork);
    if (backgroundwork == "yes") {
        document.querySelector(".hourglassicon").style.visibility = "visible";
        document.querySelector(".inputvalue").disabled = true;
    } else if (backgroundwork == "no") {
        document.querySelector(".hourglassicon").style.visibility = "hidden";
        document.querySelector(".inputvalue").value = "";
    }
}
// document.querySelector(".timeicon").addEventListener("click", () => {
//     backgroundcheck();
//     document.querySelector(".inputvalue").setAttribute("type", "time");
//     document.querySelector(".inputvalue").style.left = "78px";
//     document.querySelector(".inputvalue").setAttribute("placeholder", "time");
// })
// document.querySelector(".membericon").addEventListener("click", () => {
//     backgroundcheck();
//     document.querySelector(".inputvalue").setAttribute("type", "number");
//     document.querySelector(".inputvalue").setAttribute("placeholder", "members");
//     document.querySelector(".inputvalue").style.left = "78px";
//     document.querySelector(".inputvalue").style.width = "90px";
// })
document.querySelector(".minutesicon").addEventListener("click", () => {
    backgroundcheck();
    document.querySelector(".inputvalue").setAttribute("type", "number");
    document.querySelector(".inputvalue").setAttribute("placeholder", "minutes");
    document.querySelector(".inputvalue").style.left = "78px";
    document.querySelector(".inputvalue").style.width = "90px";
})
document.querySelector(".tickicon").addEventListener("click", () => {
    let obj = {
        "type": document.querySelector(".inputvalue").getAttribute("type"),
        "value": document.querySelector(".inputvalue").value,
        "select": document.querySelector(".inputvalue").getAttribute("placeholder")
    }
    console.log(obj);
    // if (obj.value != "") {
        // if (obj.value < 0) {
        //     document.querySelector(".inputvalue").style.border = "2px solid red";
        //     setTimeout(() => {
        //         document.querySelector(".inputvalue").style.border = "1px solid black";
        //     }, 2000);
        // }
            obj.value = "15";
            localStorage.setItem("backgroundwork", "yes");
            document.querySelector(".inputvalue").disabled = true;
            localStorage.setItem("value", obj.value);
            localStorage.setItem("area", obj.select);
            document.querySelector(".hourglassicon").style.visibility = "visible";
            chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                var activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { "message": "tickbtnclicked", "object": obj });
            });
        
    // }
    // else {
    //     console.log("enter value");
    //     document.querySelector(".inputvalue").style.border = "2px solid red";
    //     setTimeout(() => {
    //         document.querySelector(".inputvalue").style.border = "1px solid black";
    //     }, 2000);
    // }
})
document.querySelector(".stopicon").addEventListener("click", () => {

    document.querySelector(".inputvalue").disabled = false;
    document.querySelector(".inputvalue").value = "";
    localStorage.setItem("backgroundwork", "no");
    document.querySelector(".hourglassicon").style.visibility = "hidden";
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "stopbtnclicked" });
    });
})