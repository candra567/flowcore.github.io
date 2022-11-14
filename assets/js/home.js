 const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Visitor data per month',
      backgroundColor: ['white','lightblue','gold','cyan','red','coral'],
      borderColor: 'rgb(255, 99, 132)',
      data: [20, 10, 45, 22, 20, 30, 45],
    }]
  };

  const config = {
    
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
