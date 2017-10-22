<template>
  <div class="hello">
    <Row>
        <Col span="8" push="8">
        <Form>
          <h1>Vue Messenger</h1>
          <FormItem>
          <Select v-model="model9" style="width:100%" placeholder="Pais">
              <Option value="beijing" label="北京市">
                  <span>北京</span>
                  <span style="float:right;color:#ccc">Beiing</span>
              </Option>
              <Option value="shanghai" label="上海市">
                  <span>上海</span>
                  <span style="float:right;color:#ccc">ShangHai</span>
              </Option>
              <Option value="shenzhen" label="深圳市">
                  <span>深圳</span>
                  <span style="float:right;color:#ccc">ShenZhen</span>
              </Option>
          </Select>
          </FormItem>
          <FormItem>        
          <Input v-model="value12" placeholder="Numero de Telefono" style="width:100%">
              <Select v-model="select1" slot="prepend" placeholder="Codigo" style="width: 80px">
                  <Option value="+58">+58</Option>
                  <Option value="+1">+1</Option>
              </Select>
          </Input>
          </FormItem>
          <Button type="primary" long>Siguiente</Button>
        </Form>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    console.log('The time is ', this.$MTProto);
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: [20, 50]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
