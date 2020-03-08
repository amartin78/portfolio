$(document).ready(function () {

    let obj = [
        {
            route: 'rwd',
            label: 'Responsive Web Design',
            links: ['landing-page', 'technical-documentation-page', 'survey']
        },
        {
            route: 'fel',
            label: 'Front End Libraries',
            links: ['javascript-calculator', 'drum-machine', 'random-quote-machine', 'markdown-previewer', 'pomodoro-clock']
        },
        {
            route: 'dv',
            label: 'Data Visualisation',
            links: ['bar-chart', 'scatterplot-graph', 'heat-map', 'choropleth-map', 'treemap-diagram']
        },
        {
            route: 'apms',
            label: 'Apis and Microservices',
            links: [
                ['opposite-pyramid','Timestamp MS'], 
                ['peppermint-piranha','Header Parser MS'],
                ['wandering-risk','Url Shortener MS'], 
                ['expensive-song','Exercise Tracker'],
                ['rune-lily','File Metadata MS']
            ]
        },
        {
            route: 'isqa',
            label: 'Information Security and Quality Assurance',
            links: [
                ['mesquite-koi-i6xqlou20m','Metric-Imp Converter']
            ]
        },
        {
            route: 'other',
            label: 'Other Projects',
            links: [
                ['theadventuretraveller','The Adventure Traveller'], 
                ['carehome-app-test', 'Carehome App']
            ]
        },
    ]

    obj.forEach((o1, i) => {
    
        let c = "";
        c   +=      `<div id="carouselSlide${i+1}" class="carousel slide" data-ride="carousel">` +
                        `<div class="carousel-inner">`;

        o1['links'].forEach((o2, j) => {

            let state = j === 0 ? 'active' : '';
            let link =  i < 3 ? `https://amartin78.github.io/fcc-${o2}` 
                              : i < 5 ? `https://${o2[0]}.glitch.me` 
                                      : `https:${o2[0]}.herokuapp.com`;
            let alt_text = i < 3 ? o2.split('-').map(c => c[0].toUpperCase() + c.slice(1)).join(' ')
                                 : o2[1];

            c +=    `<div class="carousel-item ${state}">` +
                        `<a href="${link}/" target="_blank">` + 
                            `<img src="images/${o1['route']}/img-${j+1}.png" class="d-block w-100" alt="${alt_text}"/>` + 
                        `</a>` +
                    `</div>`;
        });
        c   +=      `</div>`+
                    `<div id="label">` +
                        `<p>${o1['label']}</p>` +
                    `</div>`;

        if (i !== 4) {
            c   +=      `<a class="carousel-control-prev" href="#carouselSlide${i+1}" role="button" data-slide="prev">` +
                            `<span class="carousel-control-prev-icon" aria-hidden="true"></span>` +
                            `<span class="sr-only">Previous</span>` +
                        `</a>` +
                        `<a class="carousel-control-next" href="#carouselSlide${i+1}" role="button" data-slide="next">` +
                            `<span class="carousel-control-next-icon" aria-hidden="true"></span>` +
                            `<span class="sr-only">Next</span>` +
                        `</a>` +
                    `</div>`
        }
    
        $('#projects').append(c);
        $('.carousel').carousel({interval: false});
    });
});






