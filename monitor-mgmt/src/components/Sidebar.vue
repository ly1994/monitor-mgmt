<template>

  <nav id="m-nav" class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav" id="side-menu">
        <li class="nav-header">

          <div class="dropdown profile-element"> <span>
                            <img alt="image" class="img-circle" src="static/img/profile_small.jpg"/>
                             </span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="clear"> <span class="block m-t-xs"> <strong
                                  class="font-bold">James</strong>
                             </span> <span class="text-muted text-xs block">陈启明 <b class="caret"></b></span> </span>
            </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="#">修改头像</a>
              </li>
              <li><a href="#">个人资料</a>
              </li>
              <li><a href="#">联系方式</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">安全退出</a>
              </li>
            </ul>
          </div>
          <div class="logo-element">
            H+
          </div>

        </li>

        <li class="active">
          <a href="#"><i class="fa fa-columns"></i> <span class="nav-label">服务进程</span><span
            class="label label-danger pull-right">Focus</span>
          </a>
        </li>

        <li>
          <a href="#"><i class="fa fa-th-large"></i> <span class="nav-label">组件设计</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li>
              <router-link to="/service">服务与组件</router-link>
            </li>
            <li><router-link to="/dependency">组件依赖关系</router-link>
            </li>
            <li><a href="#">组件与数据表</a>
            </li>
            <li><a href="#">组件与SQL</a>
            </li>
            <li><a href="#">组件与API</a>
            </li>
            <li><a href="#">ST发布计划</a>
            </li>
            <li><a href="#">异常与组件</a>
            </li>
            <li><a href="#">国际化与组件</a>
            </li>
            <li><a href="#">数据字典与组件</a>
            </li>
            <li><a href="#">关键日志与组件</a>
            </li>
            <li><a href="#">组件与定时任务</a>
            </li>
            <li><a href="#">组件与业务</a>
            </li>
            <li><a href="#">组件介绍</a>
            </li>
          </ul>

        </li>


        <li>
          <a href="#"><i class="fa fa fa-comments"></i> <span class="nav-label">开发质量</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li><a href="#">代码质量(Sonar)</a>
            </li>
            <li><a href="#">开发量统计</a>
            </li>
            <li><a href="#">组件与单元测试</a>
            </li>
            <li><a href="#">开发互评</a>
            </li>
            <li><a href="#">缺陷统计</a>
            </li>
            <li><a href="#">开发规范</a>
            </li>
            <li><a href="#">问题记录</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#"><i class="fa fa fa-globe"></i> <span class="nav-label">分析工具</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li><a href="#">全局依赖</a>
            </li>

            <li><a href="#">依赖图谱</a>
            </li>
            <li><a href="#">错误依赖</a>
            </li>
            <li><a href="#">依赖分析</a>
            </li>
            <li><a href="#">新增数据</a>
            </li>

          </ul>
        </li>
        <li>
          <a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">领域设计</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li><a href="#">领域概念</a>
            </li>
            <li><a href="#">技术框架</a>
            </li>
            <li><a href="#">领域设计与开发DEMO</a>
            </li>
            <li><a href="#">CQRS</a>
            </li>
            <li><a href="#">EDA</a>
            </li>
            <li><a href="#">ACTOR</a>
            </li>


          </ul>
        </li>

        <li>
          <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">核心设计</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">

            <li><a href="#">设计思想</a>
            </li>
            <li><a href="#">权限设计</a>
            </li>
            <li><a href="#">推送设计</a>
            </li>
            <li><a href="#">接口设计</a>
            </li>
            <li><a href="#">安全设计</a>
            </li>
            <li><a href="#">日志设计</a>
            </li>
            <li><a href="#">API文档</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#"><i class="fa fa-table"></i> <span class="nav-label">版本管理</span></a>
        </li>


        <li>
          <a href="#"><i class="fa fa-cutlery"></i> <span class="nav-label">资料下载</span><span
            class="label label-danger pull-right">New</span></a>

        </li>


        <li>
          <a href="#"><i class="fa fa-envelope"></i> <span class="nav-label">王者荣耀</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li>
              <a href="#">CFETS <span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li>
                  <a href="#">陈启明</a>
                </li>
                <li>
                  <a href="#">李戬</a>
                </li>
                <li>
                  <a href="#">赵攀</a>
                </li>

              </ul>
            </li>
            <li><a href="#">华腾</a>
            </li>
            <li>
              <a href="#">翰朔</a>
            </li>

            <li>
              <a href="#">开发者反馈</a>
            </li>

          </ul>
        </li>

      </ul>

    </div>
  </nav>


</template>

<style>


</style>


<script>
  export default {
    name: 'v-sidebar'
  }
</script>
