const database = [{
    day: 'Senin',
    list: [{
            mapel: 'PPKN',
            jam: '07.30 - 09.00'
        },{
            mapel: 'Kimia',
            jam: '09.00 - 09.45'
        },{
            mapel: 'Bhs Inggris',
            jam: '10.00 - 11.30'
        },{ 
            mapel: 'Agama',
            jam: '11.30 - 13.45'
        },{
            mapel: 'Fisika',
            jam: '17.45 - 15.15'
        },{
            mapel: 'Matematika TL',
            jam: '15.15 - 16.00'
        }]
    },{
    day: 'Selasa',
    list: [{
            mapel: 'PJOK',
            jam: '06.45 - 08.15'
        },{
            mapel: 'Bhs Indonesia',
            jam: '08.15 - 09.00'
        },{ 
            mapel: 'Bhs Inggris TL',
            jam: '09.00 - 09.45'
        },{
            mapel: 'Kimia',
            jam: '10.00 - 11.30'
        },{
            mapel: 'Seni',
            jam: '11.30 - 12.15'
        },{
            mapel: 'Sejarah',
            jam: '13.00 - 14.30'
        },{
            mapel: 'Fisika',
            jam: '14.30 - 15.15'
        }]
        },{
    day: 'Rabu',
    list: [{
            mapel: 'P5',
            jam: '06.45 - 09.45'
        },{
            mapel: 'Matematika',
            jam: '10.00 - 10.45'
        },{ 
            mapel: 'Bhs Inggris TL',
            jam: '10.45 - 12.15'
        },{
            mapel: 'Mulok',
            jam: '13.00 - 14.30'
        },{
            mapel: 'Matematika TL',
            jam: '14.30 - 16.00'
        }]
    },{
    day: 'Kamis',
    list: [{
            mapel: 'Kimia',
            jam: '06.45 - 08.15'
        },{
            mapel: 'PKWU',
            jam: '08.15 - 09.45'
        },{ 
            mapel: 'Matematika TL',
            jam: '10.00 - 11.30'
        },{
            mapel: 'Fisika',
            jam: '11.30 - 13.45'
        },{
            mapel: 'Matematika',
            jam: '13.45 - 15.15'
        },{
            mapel: 'Bhs Inggris',
            jam: '15.15 - 16.00'
        }]
    },{
    day: 'Jumat',
    list: [{
            mapel: 'P5',
            jam: '06.45 - 07.30'
        },{
            mapel: 'Bhs Indonesia',
            jam: '07.30 - 09.00'
        },{ 
            mapel: 'Bhs Inggris TL',
            jam: '09.25 - 10.55'
        }]
    }]

    
    document.querySelectorAll('.day-btn')
    .forEach((button) => {
        
        button.addEventListener('click', () => {
            const hari = button.innerHTML
                if (button.innerHTML === 'Senin') {
                    displaySchedule(hari)
                } else if(button.innerHTML === 'Selasa') {
                    displaySchedule(hari)
                } else if(button.innerHTML === 'Rabu') {
                    displaySchedule(hari)
                } else if(button.innerHTML === 'Kamis') {
                    displaySchedule(hari)
                } else if(button.innerHTML === 'Jumat') {
                    displaySchedule(hari)
                }
            
        })
    })
    
    function displaySchedule (day){
        let html = '';
        database.forEach((item) => {
            if (item.day === day) {
                item.list.forEach((list) => {
                    html += `
                    <div class="kotak">
                        <div class="mapel2">
                            <p>${list.mapel}</p>
                        </div>
                        <div class="jam2">
                            <p>${list.jam}</p>
                        </div>
                    </div>
                    `
                    document.querySelector('.mini-box2').innerHTML = html
                })
            }
        })
    }
