<template>

  <div class="theme-config">
    <div class="theme-config-box">
      <div class="spin-icon">
        <i class="fa fa-cog fa-spin"></i>
      </div>
      <div class="skin-setttings">
        <div class="title">主题设置</div>
        <div class="setings-item">
                <span>
                        收起左侧菜单
                    </span>

          <div class="switch">
            <div class="onoffswitch">
              <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="collapsemenu">
              <label class="onoffswitch-label" for="collapsemenu">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="setings-item">
                <span>
                        固定侧边栏
                    </span>

          <div class="switch">
            <div class="onoffswitch">
              <input type="checkbox" name="fixedsidebar" class="onoffswitch-checkbox" id="fixedsidebar">
              <label class="onoffswitch-label" for="fixedsidebar">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="setings-item">
                <span>
                        固定顶部
                    </span>

          <div class="switch">
            <div class="onoffswitch">
              <input type="checkbox" name="fixednavbar" class="onoffswitch-checkbox" id="fixednavbar">
              <label class="onoffswitch-label" for="fixednavbar">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="setings-item">
                <span>
                        固定宽度
                    </span>

          <div class="switch">
            <div class="onoffswitch">
              <input type="checkbox" name="boxedlayout" class="onoffswitch-checkbox" id="boxedlayout">
              <label class="onoffswitch-label" for="boxedlayout">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="setings-item">
                <span>
                        固定底部
                    </span>

          <div class="switch">
            <div class="onoffswitch">
              <input type="checkbox" name="fixedfooter" class="onoffswitch-checkbox" id="fixedfooter">
              <label class="onoffswitch-label" for="fixedfooter">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="setings-item">
                <span>
                        RTL模式
                    </span>

          <div class="switch">
            <div class="onoffswitch">
              <input type="checkbox" name="RTLmode" class="onoffswitch-checkbox" id="RTLmode">
              <label class="onoffswitch-label" for="RTLmode">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="title">皮肤选择</div>
        <div class="setings-item default-skin">
                <span class="skin-name ">
                         <a href="#" class="s-skin-0">
                           默认皮肤
                         </a>
                    </span>
        </div>
        <div class="setings-item blue-skin">
                <span class="skin-name ">
                        <a href="#" class="s-skin-1">
                          蓝色主题
                        </a>
                    </span>
        </div>
        <div class="setings-item yellow-skin">
                <span class="skin-name ">
                        <a href="#" class="s-skin-3">
                          黄色/紫色主题
                        </a>
                    </span>
        </div>
        <div class="setings-item ultra-skin">
                <span class="skin-name ">
                        <a href="#" class="s-skin-2">
                          灰色主题
                        </a>
                    </span>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
  export default {
    name: 'v-setter'
  }
</script>

<style scoped>
  .fixed-nav .slimScrollDiv #side-menu {
    padding-bottom: 60px;
  }
</style>
