window.onload = (event) => {

    dateElement = document.getElementById("dateElement");


    dateInfo = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    dateText = months[dateInfo.getMonth()] + " " + dateInfo.getDate() + ", " + dateInfo.getFullYear();

    dateElement.textContent += dateText;
}