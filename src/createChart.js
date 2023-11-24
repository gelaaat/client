import { Chart, registerables } from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'

// Aquesta funció s'encarrega de crear els charts
// Des dels diferents components cridem aquesta funció que retorna un chart amb les següents configuracions

export const createChart = (canvasContainer, ctx, config) => {
  // Inclou els pluguins de registrables pel bon funcionament i zoomPlugin per poder afegir
  // la configuració de fer zoom als gràfics
  Chart.register(...registerables, zoomPlugin)
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        // El simbol axuiliar és per el cas de la pressió
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
          // definim les diferents maneres de fer zoom per diferents dispositus intel·ligents
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
      maintainAspectRatio: false, // necessari per poder que els grafics omplin el contenidor pare
      aspectRatio: (canvasContainer.clientWidth) / 240,
      // Aquesta funció s'executa cada vegada que es modifiquen les dimensions del chart i calcula les
      // seves noves dimensions
      onResize: (chart, size) => {
        chart.options.aspectRatio = (canvasContainer.clientWidth) / 240
        size.width = canvasContainer.clientWidth
        size.height = 240
      }
    }
  })

  return chart
}
