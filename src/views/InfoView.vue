<template>
  <div class="aboutBox">
    <div class="infoBox">
      <div class="echartWapper" >
        <div id="chartTemp" style="width: 20%; height: 400%; flex: 1;" class="echartDiv"></div>
        <div id="chartMemo" style="width: 20%; height: 400%; flex: 1;" class="echartDiv"></div>
      </div>
      <br>
      <div class="info">
        Temperature: <div :class="{overdue:temp>63}" style="display: inline;">{{ temp }} °C</div>
        Max Memory: <div :class="{overdue:maxMemory>5000}" style="display: inline;">{{ maxMemory }} Mb</div>
        Memory: <div :class="{overdue:memory>5000}" style="display: inline;">{{ memory }} Mb</div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';
import { markRaw } from 'vue';
var interval;

  export default {
    name: "InfoView",

    data() {
      return {
        info: {},
        temp: 0, 
        maxMemory: 0,
        memory: 0,
        chartTemp: null,
        chartMemo: null,
        timeTag: [],
        memoTag: [],
        tempTag: [],
        cnt: 0,
      }
    }, 
    
    methods: {
      renewInfo() {
        var that = this;

        // 服务器路径
        axios.get('http://'+axios.defaults.baseURL+':4560/get_temp').then(function (response) {
          // handle success
          console.log(response);
          that.info = response.data;
          that.temp = that.info.Temperature;
          that.maxMemory = that.info.Max_memory;
          that.memory = that.info.Memory;
          
          var option = {
            title: {
              text: 'Temperature: '+that.temp+'°C',
              left: 'center',
              top: 'center',
              textstyle: {fontSize: 3},
            },
            color: ['rgb(242, 72, 72)', 'rgb(128, 128, 128)'], 
            series: [
              {
                type: 'pie',
                startAngle: 270,
                data: [
                  {
                    value: that.temp,
                    name: 'A'
                  },
                  {
                    value: 100-that.temp,
                    name: 'B'
                  },
                ],
                radius: ['65%', '70%'],
                label: {
                  show: false,
                  position: 'center'
                },
                labelLine: {
                  show: false
                },
              }
            ]
          };
          
          that.chartTemp.setOption(option);

          var date = new Date();
          const recentSize = 30;
          const batchSize = 10;
          if (that.cnt==0) that.timeTag.push(date.getHours()+':'+date.getMinutes());
          if (that.timeTag.length>recentSize) that.timeTag.shift();
          if (that.cnt==0) that.memoTag.push(that.memory);
          else that.memoTag.push(Math.max(that.memoTag.pop(), that.memory));
          if (that.memoTag.length>recentSize) that.memoTag.shift();
          if (that.cnt==0) that.tempTag.push(that.temp);
          else that.tempTag.push(Math.max(that.tempTag.pop(), that.temp));
          if (that.tempTag.length>recentSize) that.tempTag.shift();
          that.cnt+=1;
          if (that.cnt==batchSize-1) that.cnt=0;

          option = {
            title: {
              text: '',
              left: 'center',
              top: 'center'
            },
            color: ['#84d7b2', 'rgb(242, 72, 72)'], 
            tooltip: {
              trigger: 'axis'
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              data: that.timeTag
            },
            yAxis: [{
              name: 'Mb',
              type: 'value',
              minInterval: 50,
              max: 10000,
              min: 0,
            },
            {
              name: '°C',
              type: 'value',
              minInterval: 5,
              alignTicks: true,
              max: 100,
              min: 40,
            }],
            series: [
              {
                name: 'Memory',
                data: that.memoTag,
                type: 'bar',
                symbol: 'none',
              },
              {
                name: 'Temperature',
                data: that.tempTag,
                type: 'line',
                symbol: 'none',
                yAxisIndex: 1,
              },
            ],
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
          };
      
      that.chartMemo.setOption(option);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      }
    },
    mounted() {
      var that = this;
      interval = setInterval(that.renewInfo, 1000);
      that.chartTemp = markRaw(echarts.init(document.getElementById('chartTemp')));
      that.chartMemo = markRaw(echarts.init(document.getElementById('chartMemo')));

      var option = {
        title: {
          text: 'Initializing',
          left: 'center',
          top: 'center'
        },
        color: ['rgb(242, 72, 72)', 'rgb(128, 128, 128)'], 
        series: [
          {
            type: 'pie',
            startAngle: 270,
            data: [
              {
                value: 0,
                name: 'A'
              },
              {
                value: 100,
                name: 'B'
              },
            ],
            radius: ['55%', '60%'],
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
          }
        ]
      };
      
      that.chartTemp.setOption(option);

      option = {
        title: {
          text: 'Initializing',
          left: 'center',
          top: 'center'
        },
        color: ['#e4f5ef', 'rgb(242, 72, 72)'], 
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: that.timeTag,
        },
        yAxis: [{
          name: 'Mb',
          type: 'value',
          minInterval: 50,
        },
        {
          name: '°C',
          type: 'value',
          minInterval: 5,
          alignTicks: true,
        }],
        series: [
          {
            data: that.memoTag,
            type: 'bar',
            symbol: 'none',
          },
          {
            data: that.tempTag,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 1,
          },
        ]
      };
      
      that.chartMemo.setOption(option);
    }, 
    unmounted() {
      clearInterval(interval);
    }
  }
</script>

<style scoped>
.aboutBox {
  width: 100%;
  height: 100%;
  background: #e4f5ef;
}

.infoBox {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.echartWapper {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.echartDiv {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0,0,0,.2);
  max-width: 400px;
  max-height: 400px;
  margin: 2.5%;
  transition: all 0.3s ease 0s;
}
.echartDiv:hover {
  box-shadow: 5px 5px 15px rgba(0,0,0,.15);
}

.info {
  display: inline;
  background: #ffffff;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,.2);
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s ease 0s;
}
.info:hover {
  box-shadow: 5px 5px 15px rgba(0,0,0,.15);
}

.overdue {
  color: red;
  font: bolder;
}
.inline {
  display: inline-block;
}

</style>