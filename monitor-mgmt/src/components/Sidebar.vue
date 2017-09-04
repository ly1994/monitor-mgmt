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
                    <a href="#"><i class="fa fa-columns"></i> <span class="nav-label">进程状态</span><span
                            class="label label-danger pull-right">Focus</span>
                    </a>
                </li>

                <li>
                    <a href="#"><i class="fa fa-th-large"></i> <span class="nav-label">组件信息</span><span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#">组件模块列表</a>
                        </li>
                        <li><a href="#">组件API接口</a>
                        </li>
                        <li><a href="#">组件数据(库)关系</a>
                        </li>
                        <li><a href="#">组件资源信息</a>
                        </li>
                        <li><a href="#">组件版本信息</a>
                        </li>


                    </ul>
                    </a>
                </li>
                <li>
                    <a href="#"><i class="fa fa fa-globe"></i> <span class="nav-label">分析工具</span><span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#">全局依赖</a>
                        </li>
                        <li><a href="#">组件依赖</a>
                        </li>
                        <li><a href="#">错误依赖</a>
                        </li>
                        <li><a href="#">业务分析</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">领域开发</span><span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#">领域设计知识</a>
                        </li>
                        <li><a href="#">领域核心框架</a>
                        </li>
                        <li><a href="#">领域设计与开发DEMO</a>
                        </li>

                    </ul>
                </li>

                <li>
                    <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">架构设计</span><span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#">总体架构</a>
                        </li>
                        <li><a href="#">权限设计</a>
                        </li>
                        <li><a href="#">推送设计</a>
                        </li>
                        <li><a href="#">接口设计</a>
                        </li>
                        <li><a href="#">安全设计</a>
                        </li>
                    </ul>
                </li>


                <li>
                    <a href="#"><i class="fa fa-edit"></i> <span class="nav-label">开发Wiki</span><span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#">API文档</a>
                        </li>
                        <li><a href="#">设计思想</a>
                        </li>

                    </ul>
                </li>


                <li>
                    <a href="#"><i class="fa fa-laptop"></i> <span class="nav-label">配置管理</span></a>
                </li>

                <li>
                    <a href="#"><i class="fa fa-table"></i> <span class="nav-label">版本管理</span></a>

                </li>


                <li>
                    <a href="#"><i class="fa fa-comments"></i> <span class="nav-label">基础数据</span><span
                            class="label label-danger pull-right">New</span></a>
                </li>

                <li>
                    <a href="#"><i class="fa fa-cutlery"></i> <span class="nav-label">资料下载</span><span
                            class="label label-danger pull-right">New</span></a>

                </li>

                <li>
                    <a href="#"><i class="fa fa-envelope"></i> <span class="nav-label">开发者反馈</span><span
                            class="label label-warning pull-right">16</span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#">提交信息</a>
                        </li>
                        <li><a href="#">反馈信息列表</a>
                        </li>

                    </ul>
                </li>


                <li>
                    <a href="#"><i class="fa fa-sitemap"></i> <span class="nav-label">团队介绍 </span><span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="#">AAG <span class="fa arrow"></span></a>
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
