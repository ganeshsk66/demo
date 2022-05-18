function start() {
    var xml = new XMLHttpRequest();
    xml.onload = function() {
        document.getElementById("s1").innerHTML = this.response
    }
    xml.open("GET", "index.txt", true)
    xml.send()
}