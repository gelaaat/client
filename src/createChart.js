import { Chart, registerables } from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'

export const createChart = (canvasContainer, ctx, config) => {
  Chart.register(...registerables, zoomPlugin)
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: config.simbolAuxiliar ? `${config.label} ${config.simbolAuxiliar}` : config.label,
        tension: 0.5,
        fill: true
      }]

    },
    options: {
      interaction: {
        mode: 'x'
      },
      plugins: {
        legend: {
          display: false
        },
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
              modifierKey: 'shift'
            },
            drag: {
              enabled: false
            },
            pinch: {
              enabled: true
            },
            mode: 'x'
          },
          pan: {
            enabled: true,
            mode: 'x'
          }
        }
      },
      scales: {
        y: {
          ticks: {
            stepSize: 2
          },
          // grace: '2%',
          display: true,
          title: config.label
        }
        /* x: {
          type: 'time'
           time: {
            unit: 'hour'
          }
        } */

      },
      responsive: true, // necessari per poder que els grafics puguin modificar les dimensions
      maintainAspectRatio: false, // necessari per poder que els grafics omplin el container pare, perquè aplica el que vol el navegador
      aspectRatio: (canvasContainer.clientWidth) / 240,
      onResize: (chart, size) => {
        chart.options.aspectRatio = (canvasContainer.clientWidth) / 240
        size.width = canvasContainer.clientWidth
        size.height = 240
      }
    }
  })

  return chart
}
