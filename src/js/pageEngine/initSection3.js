import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

export function initSection3(el) {
  const echartsContainer = el.find('.resume-page__slide3-echarts').get(0)
  const myChart = echarts.init(echartsContainer);
  const colors = ['#00A0DF', '#00C7F0', '#00E5E8', '#82EDB9', '#FF977A', '#FE5B8C', '#F544AE', '#F780D0', '#F1B4F0', '#9165ee', '#8FBBFF']
  const lineColor = '#fff'
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Webpack', 'Gulp', '小程序', 'Vue', 'React', 'NodeJs', 'Flutter'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: lineColor
        }
      },
      axisLine: {
        lineStyle: {
          color: lineColor
        }
      }
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        textStyle: {
          color: lineColor
        }
      },
      axisLine: {
        lineStyle: {
          color: lineColor
        }
      }
    }],
    series: [{
      name: '掌握程度',
      type: 'bar',
      barWidth: '60%',
      data: [80, 80, 85, 70, 70, 70, 80, 80, 75, 65, 60],
      itemStyle: {
        // 通常情况
        normal: {
          color(params) {
            return colors[params.dataIndex]
          }
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(255, 255, 255, 1)'
        }
      }
    }]
  }
  myChart.setOption(option)
}
