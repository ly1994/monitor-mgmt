<template>


  <div class="row">
    <div class="col-lg-12">
      <div class="wrapper wrapper-content animated fadeInUp">

        <div class="ibox">
          <div class="ibox-title">
            <h5>所有进程</h5>
            <div class="ibox-tools">
              <a href="#" class="btn btn-primary btn-xs">创建新进程</a>
            </div>
          </div>
          <div class="ibox-content">
            <div class="row m-b-sm m-t-sm">
              <div class="col-md-1">
                <button type="button" id="loading-example-btn" class="btn btn-white btn-sm"><i
                  class="fa fa-refresh"></i> 刷新
                </button>
              </div>
              <div class="col-md-11">
                <div class="input-group">
                  <input type="text" placeholder="请输入进程名称" class="input-sm form-control"> <span
                  class="input-group-btn">
                                        <button type="button" class="btn btn-sm btn-primary"> 搜索</button> </span>
                </div>
              </div>
            </div>

            <div class="project-list">

              <table class="table table-hover">
                <tbody>
                <tr v-for="article in articles">
                  <td class="project-status">
                    <span class="label label-primary">运行正常</span>
                  </td>
                  <td class="project-title">
                    <a href="#"> {{article.title}}</a>
                    <br/>
                    <small>启动于 2017.08.15 12:10:00</small>
                  </td>
                  <td class="project-completion">
                    <small>JVM消耗： 48%</small>
                    <div class="progress progress-mini">
                      <div style="width: 48%;" class="progress-bar"></div>
                    </div>
                  </td>
                  <td class="project-people">
                    <a href="#"><img alt="image" class="img-circle"
                                     src="static/img/oracle_r.png"></a>
                    <a href="#"><img alt="image" class="img-circle"
                                     src="static/img/redis_r.png"></a>

                  </td>
                  <td class="project-actions">
                    <a href="#" class="btn btn-white btn-sm"><i
                      class="fa fa-folder"></i> 详情 </a>
                    <a href="#" class="btn btn-primary btn-sm"><i
                      class="fa fa-pencil"></i> 启动 </a>
                  </td>
                </tr>
                <!--<tr>-->
                  <!--<td class="project-status">-->
                    <!--<span class="label label-default">服务关闭</span>-->
                  <!--</td>-->
                  <!--<td class="project-title">-->
                    <!--<a href="#">AMS(172.17.192.23)</a>-->
                    <!--<br/>-->
                    <!--<small>启动于 2017.08.15 12:20:15</small>-->
                  <!--</td>-->
                  <!--<td class="project-completion">-->
                    <!--<small>JVM消耗： 28%</small>-->
                    <!--<div class="progress progress-mini">-->
                      <!--<div style="width: 28%;" class="progress-bar"></div>-->
                    <!--</div>-->
                  <!--</td>-->
                  <!--<td class="project-people">-->
                    <!--<a href="#"><img alt="image" class="img-circle"-->
                                     <!--src="static/img/oracle_r.png"></a>-->
                    <!--<a href="#"><img alt="image" class="img-circle"-->
                                     <!--src="static/img/redis_r.png"></a>-->
                  <!--</td>-->
                  <!--<td class="project-actions">-->
                    <!--<a href="#" class="btn btn-white btn-sm"><i-->
                      <!--class="fa fa-folder"></i> 详情 </a>-->
                    <!--<a href="#" class="btn btn-primary btn-sm"><i-->
                      <!--class="fa fa-pencil"></i> 启动 </a>-->
                  <!--</td>-->
                <!--</tr>-->
                <tr>
                  <td class="project-status">
                    <span class="label label-warning">运行异常</span>
                  </td>
                  <td class="project-title">
                    <a href="#">CSS(172.17.192.23)</a>
                    <br/>
                    <small>启动于 2017.08.15 12:20:15</small>
                  </td>
                  <td class="project-completion">
                    <small>JVM消耗： 8%</small>
                    <div class="progress progress-mini">
                      <div style="width: 8%;" class="progress-bar"></div>
                    </div>
                  </td>
                  <td class="project-people">
                    <a href="#"><img alt="image" class="img-circle"
                                     src="static/img/oracle_r.png"></a>
                    <a href="#"><img alt="image" class="img-circle"
                                     src="static/img/redis_r.png"></a>
                  </td>
                  <td class="project-actions">
                    <a href="#" class="btn btn-white btn-sm"><i
                      class="fa fa-folder"></i> 详情 </a>
                    <a href="#" class="btn btn-primary btn-sm"><i
                      class="fa fa-pencil"></i> 启动 </a>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


  export default {
    name: "v-home",
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      });
    }


  }
</script>
