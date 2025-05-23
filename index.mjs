const varustus = {
    "Kabiin": {},
    "1. kapp": {},
    "2. kapp": {
        "mootorsaag": [
            {'tegevus': 'käivitus', 'abitekst': 'Käivitamise selgitav tekst', 'abivideo': true},
            {'tegevus': 'keti kontroll', 'abitekst': 'Kontrolli selgitav tekst', 'abivideo': false}
        ],
        "ketaslõikur": [
            {'tegevus': 'käivitus', 'abitekst': false, 'abivideo': false}
        ],
        "tööriistakast": [
            {'tegevus': 'komplektsuse kontroll', 'abitekst': true, 'abivideo': false}
        ],
    },
    "3. kapp": {},
    "4. kapp": {},
    "5. kapp": {},
    "6. kapp": {},
    "Pumbaruum": {},
    "Katus": {},
}


window.onload = () => {
    const app = document.querySelector('#app');
    const auto = createDetailsWithyTitle('KOMANDO 11');
    auto.setAttribute('open', true);
    app.appendChild(auto);
    Object.entries(varustus).forEach(([ruum, elemendid]) => {
        const elRuum = createDetailsWithyTitle(ruum);
        if (Object.keys(elemendid).length === 0) {
            elRuum.style.color = 'darkgrey';
        } else {
            Object.entries(elemendid).forEach(([element, tegevused]) => {
                const elElement = createTegevusDetails(element, tegevused);
                elRuum.appendChild(elElement);
            });
        }
        auto.appendChild(elRuum);
    });
}


function createDetailsWithyTitle(title) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.innerText = title;
    details.appendChild(summary);
    return details;
}

function createTegevusDetails(element, tegevused) {
    const elElement = document.createElement('details');
    const summary = document.createElement('summary');
    // not ok input
    const veateade = document.createElement('input');
    veateade.type = 'text';
    veateade.placeholder = 'Sisesta puuduse kirjeldus';
    veateade.style.display = 'none';
    // not ok
    const notOk = document.createElement('span');
    notOk.innerText = '❌';
    notOk.addEventListener('click', () => {
        summary.style.color = 'darkred';
        veateade.style.display = 'block';
        veateade.focus();
    });
    // ok
    const ok = document.createElement('span');
    ok.innerText = '✅';
    ok.addEventListener('click', () => {
        summary.style.color = 'darkgreen';
        veateade.style.display = 'none';
    });
    // ?
    const question = document.createElement('span');
    question.innerText = '🟡';
    question.addEventListener('click', () => {
        summary.style.color = 'darkorange';
        veateade.style.display = 'none';
    });

    summary.innerText = element;
    elElement.appendChild(ok);
    elElement.appendChild(question);
    elElement.appendChild(notOk);
    elElement.appendChild(veateade);
    elElement.appendChild(summary);

    tegevused.forEach(tegevus => {
        const elAlamtegevus = document.createElement('div');
        // Abitekst
        if (tegevus.abitekst) {
            const tegevuseTekst = document.createElement('span');
            tegevuseTekst.innerText = `🖹`;
            elAlamtegevus.appendChild(tegevuseTekst);
        }
        // Abivideo
        if (tegevus.abivideo) {
            const tegevuseVideo = document.createElement('span');
            tegevuseVideo.innerText = `📹`;
            elAlamtegevus.appendChild(tegevuseVideo);
        }
        // Tekst
        const tegevuseTekst = document.createElement('span');
        tegevuseTekst.innerText = ` ${tegevus.tegevus}`;
        elAlamtegevus.appendChild(tegevuseTekst);
        elElement.appendChild(elAlamtegevus);
    });

    return elElement;
}