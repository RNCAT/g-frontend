<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h3>001</h3>
        <h4>ประเภท: ห้องแอร์</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, sequi alias atque</p>
        <h5>ราคา 500฿</h5>
      </div>
    </div>
    <footer class="card-footer">
      <b-button to="/booking" type="is-primary" class="card-footer-item" outlined
        >จองห้องพัก</b-button
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Room',
}
</script>
