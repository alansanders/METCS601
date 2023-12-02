var el = document.getElementById('addEducation');

async function getEducation(){
    try {
        const url = "./data/education.json";
        const response = await fetch(url);
        const data = await response.json();
        var div = document.getElementById('education');
        if (response.status == 200){
            div.innerHTML = processEducation(data);
            console.log(data)
        }

    } catch (err) {console.log(err)}
    
}

function processEducation(education){
    const educationlist = education.degrees.map(education => {
        return `
        <h2>
        ${education.school}
        </h2>
        `
    })

    return `
    ${educationlist.join('')}
    `;
}

el.addEventListener('click', getEducation, false);