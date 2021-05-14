var reviewFormHandler = (event) => {
    event.preventDefault();

    const title = document.querySelector('#review-title').value.trim();
    const safety_culture = document.querySelector('#safety-culture').value;
    const safety_training = document.querySelector('#safety-training').value;
    const hazard_id = document.querySelector('#hazard-id').value;
    const lead_emphasis = document.querySelector('#lead-emphasis').value;
    const safetyQuery = document.querySelector('#safety-manager').value;
    const contents = document.querySelector('#additional-content').value;

    console.log(safetyQuery)

    let safety_manager = managerCheck(safetyQuery)

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    if(title && safety_culture && safety_training && hazard_id && lead_emphasis && safety_manager && contents){
        const response = fetch('/query/reviews/' + id, {
            method: 'POST',
            body: JSON.stringify({ title, safety_culture, safety_training, hazard_id, lead_emphasis, safety_manager, contents }),
            headers: { 'Content-Type': 'application/json' },
          });
    }
    
}

const managerCheck = (safetyQuery) => {
    if (safetyQuery == 1){
        return safety_manager = true;
    } else if (safetyQuery == 0) {
        safety_manager = false;
    } else {
        console.log('THIS CHECK IS BROKEN');
    }
}

document
.getElementById('review-submit')
.addEventListener('click', reviewFormHandler);