// chart js example
 const labels = [
    'Front End',
    'BackEnd',
    'FullStack',
    'Mobile Developer',
    'DevOps',
    'AI Developer',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Students Class',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [20, 10, 5, 2, 20, 30, 45],
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
