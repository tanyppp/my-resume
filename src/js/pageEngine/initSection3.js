import echarts from 'echarts/dist/echarts'

export function initSection3(el) {
  const echartsContainer = el.find('.resume-page__slide3-echarts').get(0)
  console.log(echartsContainer, echarts)
  const myChart = echarts.init(echartsContainer);
  const option = {
    angleAxis: {},
    radiusAxis: {
      type: 'category',
      data: ['技术栈', 'HTML5', 'CSS3', 'JavaScript', 'JQuery', '小程序', 'Vue', 'React', 'NodeJs'],
      z: 10
    },
    polar: {},
    series: [{
      type: 'bar',
      data: [100, 0, 0, 0, 0, 0, 0, 0, 0],
      coordinateSystem: 'polar',
      name: '技术栈',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 70, 0, 0, 0, 0, 0, 0, 0],
      coordinateSystem: 'polar',
      name: 'HTML5',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 0, 80, 0, 0, 0, 0, 0, 0],
      coordinateSystem: 'polar',
      name: 'CSS3',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 0, 0, 90, 0, 0, 0, 0, 0],
      coordinateSystem: 'polar',
      name: 'JavaScript',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 0, 0, 0, 80, 0, 0, 0, 0],
      coordinateSystem: 'polar',
      name: 'JQuery',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 0, 0, 0, 0, 80, 0, 0, 0],
      coordinateSystem: 'polar',
      name: '小程序',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 0, 0, 0, 0, 0, 80, 0, 0],
      coordinateSystem: 'polar',
      name: 'Vue',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 0, 0, 0, 0, 0, 0, 75, 0],
      coordinateSystem: 'polar',
      name: 'React',
      stack: 'a'
    }, {
      type: 'bar',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 60],
      coordinateSystem: 'polar',
      name: 'NodeJs',
      stack: 'a'
    }],
    legend: {
      show: true,
      data: ['技术栈', 'HTML5', 'CSS3', 'JavaScript', 'JQuery', '小程序', 'Vue', 'React', 'NodeJs']
    }
  }
  myChart.setOption(option)
}
