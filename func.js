const { jsPDF } = require("jspdf")

const group_topic = "Object Modelling"
const group_no = 13

const members = [
        ["1906069", "Shubham Shandilya", "9352091684"],
        ["1906070", "Shivam", "8545818984"],
        ["1906071", "Neeraj", "8544203880"],
        ["1906072", "Abhishek Jaiswal", "9936884474"],
        ["1906073", "Aman Kumar", "9334680526"],
        ["1906074", "Bhuvnesh", "8824915920	"],
        ["1906075", "Ayush Kumar", "9799819942"],
        ["1906077", "Rahul Jha", "9024456979"],
        ["1906079", "Deepak Kumar", "7033558158"],	
        ["1906082", "Aditya Gupta", "8882060206	"]
    ];

function create_pdf(group_no, group_topic, members) {
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.setFont("times", "normal")
    doc.text("CS4460 OOSD", 26, 15)
    doc.setFont("times", "bold")
    doc.text(`GROUP ${group_no}`, 26, 25)
    doc.setFont("times", "normal")

    const row_height = 7;
    const row_width = 164;
    doc.setDrawColor('147aad');
    doc.setFont("times", "bold")
    doc.setFontSize(13);
    doc.rect(26, 45, row_width, row_height);
    doc.text("Roll No.", 26 + 2, 45 + 5)
    doc.text("Name", 26 + 2 + row_width/4, 45 + 5)
    doc.text("Mobile", 26 + 2 + 2*row_width/4, 45 + 5)
    doc.text("Topic", 26 + 2 + 3*row_width/4, 45 + 5)
    doc.line(
            26 + row_width,
            45,
            26 + row_width,
            45 + row_height * (members.length+1)
        )
    doc.line(
        26,
        45 + row_height * (members.length+1),
        26 + row_width,
        45 + row_height * (members.length+1)
        )
    doc.setFont("times", "normal")
    doc.setFontSize(12);
    members.sort((a,b) => {
        if(a[0] < b[0]) return -1;
        else if(a[0] === b[0]) return 0;
        else return 1;
    })
    members.forEach((m, index) => {
        doc.rect(26, 45 + row_height*(index+1), 3*(row_width/4), row_height);
        doc.text(m[0], 26 + 2, 45 + 5 + (index+1)*row_height)
        doc.text(m[1], 26 + 2 + row_width/4, 45 + 5 + (index+1)*row_height)
        doc.text(m[2], 26 + 2 + 2*row_width/4, 45 + 5 + (index+1)*row_height)
    });
    doc.setFont("times", "bold")
    // doc.setFontSize()
    doc.text(group_topic, 26 + 3*(row_width/4) + 3, 45 + row_height*(members.length/2 + 1));

    return doc;
}

const pdf = create_pdf(group_no, group_topic, members)
pdf.save(`group_${group_no}.pdf`);
