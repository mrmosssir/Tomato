<template>
    <div class="mt-50">
        <div class="option-bar">FOCUS TIME</div>
        <div class="row">
            <div class="col-6 analytics-data">
                <p class="analytics-title">TODAY</p>
                <p><strong>20</strong>/TOMATO</p>
            </div>
            <div class="col-6 analytics-data">
                <p class="analytics-title">WEEK</p>
                <p><strong>108</strong>/TOMATO</p>
            </div>
        </div>
        <div class="option-bar mt-50">
            <p>CHART</p>
            <p class="analytics-date-picker">2019.7.1 - 2019.7.7</p>
        </div>
        <div class="d-flex justify-content-between">
            <div class="text-white">
                <p class="text-left">24</p>
                <p class="text-left">20</p>
                <p class="text-left">16</p>
                <p class="text-left">12</p>
                <p class="text-left">8</p>
                <p class="text-left">4</p>
            </div>
            <div>
                <div class="chart-data">
                    <div class="chart-item" style="height: 60%;"></div>
                    <div class="chart-item" style="height: 50%;"></div>
                    <div class="chart-item" style="height: 60%;"></div>
                    <div class="chart-item" style="height: 30%;"></div>
                    <div class="chart-item" style="height: 50%;"></div>
                    <div class="chart-item" style="height: 10%;"></div>
                    <div class="chart-item chart-max" style="height: 100%;"></div>
                </div>
                <div class="chart-bottom-bar">
                    <P class="text-center text-white">7/1</P>
                    <P class="text-center text-white">7/2</P>
                    <P class="text-center text-white">7/3</P>
                    <P class="text-center text-white">7/4</P>
                    <P class="text-center text-white">7/5</P>
                    <P class="text-center text-white">7/6</P>
                    <P class="text-center text-white">7/6</P>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Analytics',
};
</script>
