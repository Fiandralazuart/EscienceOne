const database = [{
    day: 'Senin',
    list: [{
            mapel: 'PPKN',
            jam: '1 - 2'
        },{
            mapel: 'Kimia',
            jam: '3'
        },{
            mapel: 'Bhs Inggris',
            jam: '4 - 5'
        },{ 
            mapel: 'Agama',
            jam: '6 - 7'
        },{
            mapel: 'Fisika',
            jam: '8 - 9'
        },{
            mapel: 'Matematika TL',
            jam: '10'
        }]
    },{
    day: 'Selasa',
    list: [{
            mapel: 'PJOK',
            jam: '1 - 2'
        },{
            mapel: 'Bhs Indonesia',
            jam: '3'
        },{ 
            mapel: 'Bhs Inggris TL',
            jam: '4'
        },{
            mapel: 'Kimia',
            jam: '5 - 6'
        },{
            mapel: 'Seni',
            jam: '7'
        },{
            mapel: 'Sejarah',
            jam: '8 - 9'
        },{
            mapel: 'Fisika',
            jam: '10'
        }]
        },{
    day: 'Rabu',
    list: [{
            mapel: 'P5',
            jam: '1 - 4'
        },{
            mapel: 'Matematika',
            jam: '5'
        },{ 
            mapel: 'Bhs Inggris TL',
            jam: '6 - 7'
        },{
            mapel: 'Mulok',
            jam: '8 - 9'
        },{
            mapel: 'Matematika TL',
            jam: '10 - 11'
        }]
    },{
    day: 'Kamis',
    list: [{
            mapel: 'Kimia',
            jam: '1 - 2'
        },{
            mapel: 'PKWU',
            jam: '2 - 4'
        },{ 
            mapel: 'Matematika TL',
            jam: '5 - 6'
        },{
            mapel: 'Fisika',
            jam: '7 - 8'
        },{
            mapel: 'Matematika',
            jam: '9 - 10'
        },{
            mapel: 'Bhs Inggris',
            jam: '11'
        }]
    },{
    day: 'Jumat',
    list: [{
            mapel: 'P5',
            jam: '1'
        },{
            mapel: 'Bhs Indonesia',
            jam: '2 - 3'
        },{ 
            mapel: 'Bhs Inggris TL',
            jam: '4 - 5'
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