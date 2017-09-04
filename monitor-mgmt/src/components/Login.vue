<template>

  <div class="middle-box text-center loginscreen  animated fadeInDown">
    <div>
      <div>

        <h1 class="logo-name">CFETS</h1>

      </div>
      <h3>欢迎访问辅助交易开发监控管理系统</h3>

      <form class="m-t" role="form">
        <div class="form-group">
          <input class="form-control" placeholder="用户名" required="" v-model="username">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="密码" required="" v-model="password">
        </div>
        <button @click="isLogin" class="btn btn-primary block full-width m-b">登 录</button>


        <p class="text-muted text-center"> <a href="#"><small>忘记密码了？</small></a> | <a href="#">申请开通</a>
        </p>

      </form>
    </div>
  </div>

</template>


<script>
  export default {
    data() {
      return {
        username:'',
        password:'',
        error:''
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods:{
      isLogin:function() {
        this.$http.get('http://localhost:8080/users?username='+this.username+'&password='+this.password).then((response) => {
          //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
          //注意这里是个难点，Vuex与Vue-Resource结合使用。
          if(response.body != null & response.body.length > 0){
          this.$store.commit('isLogin',response.body[0]);
          this.username=''
          this.password= ''
          this.$router.push({ path: 'main' })
        }else{
          alert('请输入正确的用户名和密码！！！');
          this.username=''
          this.password= ''
        }

      }).then((error)=> this.error = error)
      }
    }
  }
</script>

<style scoped>

</style>
