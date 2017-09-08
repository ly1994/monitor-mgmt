<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="wrapper wrapper-content">

        <div class="row  border-bottom white-bg dashboard-header">
          <div class="col-sm-3">
            <h2>依赖构件</h2>
            <small>ts-s-log依赖如下构件</small>
            <ul class="list-group clear-list m-t">
              <li class="list-group-item fist-item">
                            <span class="pull-right">
                                    compile
                                </span>
                <span class="label label-success">1</span> ts-s-jdbc
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    compile
                                </span>
                <span class="label label-info">2</span> cwap-s-util
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    extend
                                </span>
                <span class="label label-primary">3</span> ts-dev
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    provided
                                </span>
                <span class="label label-default">4</span> log4j
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                     provided
                                </span>
                <span class="label label-primary">5</span> slf4j
              </li>
            </ul>
          </div>

          <div class="col-sm-3">
            <h2>被依赖构件</h2>
            <small>如下构件依赖于ts-s-log</small>
            <ul class="list-group clear-list m-t">
              <li class="list-group-item fist-item">
                            <span class="pull-right">
                                    provided
                                </span>
                <span class="label label-success">1</span> ts-u-crv
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    provided
                                </span>
                <span class="label label-info">2</span> ts-u-vacation
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                     provided
                                </span>
                <span class="label label-primary">3</span> ts-u-mc
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    provided
                                </span>
                <span class="label label-default">4</span> ts-u-fxoquote
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    provided
                                </span>
                <span class="label label-primary">5</span> ts-u-cm
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    provided
                                </span>
                <span class="label label-primary">6</span> ts-u-fxcldeal
              </li>
              <li class="list-group-item">
                            <span class="pull-right">
                                    provided
                                </span>
                <span class="label label-primary">7</span> ts-u-calculate
              </li>
            </ul>
          </div>

          <div class="col-lg-6">
            <div class="ibox float-e-margins">
              <div class="ibox-title">
                <h5>依赖图</h5>
                <div class="ibox-tools">
                  <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                  </a>
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-wrench"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-user">
                    <li><a href="graph_flot.html#">选项1</a>
                    </li>
                    <li><a href="graph_flot.html#">选项2</a>
                    </li>
                  </ul>
                  <a class="close-link">
                    <i class="fa fa-times"></i>
                  </a>
                </div>
              </div>
              <div class="ibox-content">
                <div class="echarts" id="echarts-force-chart"></div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  </div>
  </div>


</template>

<script>

  import '../../static/js/demo/echarts-demo.js'

  export default {
    name: "v-service"


  }
</script>
