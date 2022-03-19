<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">อัปโหลดข้อมูลการชำระเงิน</p>
    </div>
    <div class="card-content">
      <section>
        <b-field horizontal label="รหัสการจอง">
          <b-input name="subject" value="001" expanded disabled></b-input>
        </b-field>

        <b-field horizontal label="ราคา">
          <b-input name="subject" value="500" expanded disabled></b-input>
        </b-field>

        <b-field horizontal label="อัปโหลด">
          <b-upload v-model="dropFiles" multiple drag-drop>
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-large"> </b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
              </div>
            </section>
          </b-upload>
        </b-field>

        <b-field horizontal>
          <p class="control">
            <b-button label="ยืนยันการชำระเงิน" type="is-primary" />
          </p>
        </b-field>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
}
</script>

<style></style>
