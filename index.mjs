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
            elRuum.style.color = 'darkred';
        } else {
            Object.entries(elemendid).forEach(([element, tegevused]) => {
                const elElement = createDetailsWithyTitle(element);
                tegevused.forEach(tegevus => {
                    const elTegevus = document.createElement('div');
                    const tegevuseTekst = document.createElement('span');
                    tegevuseTekst.innerText = tegevus.tegevus;
                    if (tegevus.abitekst) {
                        tegevuseTekst.innerText += `🖹`;
                    }
                    if (tegevus.abivideo) {
                        tegevuseTekst.innerText += `📹`;
                    }
                    elTegevus.appendChild(tegevuseTekst);
                    elElement.appendChild(elTegevus);
                });
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