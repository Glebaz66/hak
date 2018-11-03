const ctx = document.getElementById("myChart").getContext("2d");



const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            hoverBorderColor: [
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
    }
});
    const input = document.getElementById('inputNum');
    const btnSubmit = document.getElementById('btnSubmit');
    const select = document.getElementById('categories');
    function getInputValue(num) {
        num.preventDefault();
        myChart.data.datasets[0].data.push(Number(input.value)); 
        // console.log('input.value', input.value);
        // console.log(myChart.data.datasets[0].data);
        
        let sel = select.options[select.selectedIndex].textContent;
        myChart.data.labels.push(sel);
        console.log('sadfasf', myChart.data.labels);
        console.log(sel);
        for (let val of myChart.data.labels){
            // if(val ===  sel){
            //     input.value + sel
            //     console.log();
                
            // };
console.log('val', val);
console.log('myChart.data.labels', myChart.data.labels);


        }
        sel="";
        // console.log('select.value', select.option.selected = true);
        myChart.update();
        
        
    }
    btnSubmit.addEventListener('click', getInputValue);