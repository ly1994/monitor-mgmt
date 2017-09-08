<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="wrapper wrapper-content">

        <div class="row">
          <div class="col-lg-9">
            <div class="ibox float-e-margins">
              <div class="ibox-title">
                <h5>服务与组件的关系</h5>
                <div class="ibox-tools">
                  <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                  </a>
                  <a class="dropdown-toggle" data-toggle="dropdown" href="index_4.html#">
                    <i class="fa fa-wrench"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-user">
                    <li><a href="#">设置选项1</a>
                    </li>
                    <li><a href="#">设置选项2</a>
                    </li>
                  </ul>
                  <a class="close-link">
                    <i class="fa fa-times"></i>
                  </a>
                </div>
              </div>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-sm-9 m-b-xs">
                    <div data-toggle="buttons" class="btn-group">
                      <label class="btn btn-sm btn-white">
                        <input type="radio" id="option1" name="options">DQS</label>
                      <label class="btn btn-sm btn-white active">
                        <input type="radio" id="option2" name="options">AMS</label>
                      <label class="btn btn-sm btn-white">
                        <input type="radio" id="option3" name="options">JSS</label>
                      <label class="btn btn-sm btn-white">
                        <input type="radio" id="option4" name="options">CSS</label>
                      <label class="btn btn-sm btn-white">
                        <input type="radio" id="option5" name="options">FCS</label>
                      <label class="btn btn-sm btn-white">
                        <input type="radio" id="option6" name="options">MC</label>
                      <label class="btn btn-sm btn-white">
                        <input type="radio" id="option7" name="options">DPS</label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" placeholder="服务" class="input-sm form-control"> <span
                      class="input-group-btn">
                                        <button type="button" class="btn btn-sm btn-primary">搜索</button> </span>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                    <tr>
                      <th>组件</th>
                      <th>类型</th>
                      <!--<th>接口数</th>-->
                      <th>更新日期</th>
                      <th>状态</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>ts-s-jdbc</td>
                      <td><span class="pie">IS</span>
                      </td>
                      <!--<td>3</td>-->
                      <td>2017.09.07</td>
                      <td><a href="#"><i class="fa fa-check text-navy"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>ts-s-redis</td>
                      <td><span class="pie">IS</span>
                      </td>
                      <!--<td>14</td>-->
                      <td>2017.08.10</td>
                      <td><a href="#"><i class="fa fa-check text-navy"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>ts-u-crv</td>
                      <td><span class="pie">AU</span>
                      </td>
                      <!--<td>120</td>-->
                      <td>2017.08.10</td>
                      <td><a href="#"><i class="fa fa-check text-navy"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>ts-u-job</td>
                      <td><span class="pie">DU</span>
                     </td>
                      <!--<td>16</td>-->
                      <td>2017.08.10</td>
                      <td><a href="#"><i class="fa fa-check text-navy"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>ts-s-ric</td>
                      <td><span class="pie">DS</span>
                      </td>
                      <!--<td>12</td>-->
                      <td>2017.08.30</td>
                      <td><a href="#"><i class="fa fa-check text-navy"></i></a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="ibox float-e-margins">
              <div class="ibox-title">
                <h5>组件共享</h5>
              </div>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-xs-4">
                    <small class="stats-label">ts-s-jdbc</small>

                  </div>

                  <div class="col-xs-8">
                    <small class="stats-label">AMS DQS MC JSS DPS CSS</small>

                  </div>

                </div>
              </div>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-xs-4">
                    <small class="stats-label">ts-u-crv</small>

                  </div>

                  <div class="col-xs-8">
                    <small class="stats-label">AMS DQS JSS DPS CSS</small>

                  </div>

                </div>
              </div>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-xs-4">
                    <small class="stats-label">ts-u-job</small>

                  </div>

                  <div class="col-xs-8">
                    <small class="stats-label">JSS</small>

                  </div>

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


  export default {
    name: "v-service"


  }
</script>
