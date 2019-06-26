<template>
  <div class="approve-list">
    <div class="approve-item">
      <div class="title">直接主管</div>
      <div class="personal">
        <div class="icon"></div>
        <span class="name">王东东</span>
      </div>
    </div>
    <div class="approve-item">
      <div class="title">二级主管</div>
      <div class="personal">
        <div class="icon"></div>
        <span class="name">王东东</span>
      </div>
    </div>
    <div class="approve-item">
      <div class="title">审批人</div>
      <div class="personal">
        <div class="icon"></div>
        <span class="name">王东东</span>
      </div>
    </div>
    <div class="approve-item">
      <div class="title">抄送人</div>
      <div class="personal">
        <div class="icon"></div>
        <span class="name">王东东</span>
      </div>
      <div class="personal">
        <div class="icon"></div>
        <span class="name">王东东</span>
      </div>
      <div class="personal">
        <div class="icon"></div>
        <span class="name">王东东</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.approve-list {
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    position: absolute;
    border-left: 2px solid;

    // 根据页面情况自行调整
    top: 25px;
    bottom: 25px;
    left: 4px;
  }
}
.approve-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid black;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    margin-top: -5px;
    left: -30px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: black;
  }

  .icon {
    display: block;
    margin: auto;
    width: 30px;
    height: 30px;
    border: 1px solid red;
    border-radius: 100%;
  }

  &:last-child {
    justify-content: flex-start;
  }
}
</style>
