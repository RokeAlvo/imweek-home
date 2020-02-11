<template lang="pug">
  form.feedback-form(
    action="https://imweek.justclick.ru/subscribe/process?rid[0]=1571500454.2991703808&doneurl=https://imweek.ru/activation.html&doneurl2=https://imweek.ru/activation.html&doneurl2=https://imweek.ru/registration-success.html?utm_source=redirect"
    method="post"
    )
    input.feedback-form__email(
      type="email"
      placeholder="Ваш e-mail"
      required
      )
    button.feedback-form__button(type="submit") {{buttonText}}
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.feedback-form
  max-width: 288px
  &__email
    width: 100%
    height: 65px
    border: 2px solid #dc102b
    border-radius: unset
    background: inherit
    font-size: 20px
    line-height: 100%
    color: $main-text-color
    font-weight: 400
    letter-spacing: -0.18px
    padding: 8px
    margin-bottom: 10px
    &::placeholder
      text-align: center
      opacity: 1
  &__button
    width: 100%
    height: 65px
    background: $bg-accent
    border: unset
    font-family: 'Fira Sans', sans-serif
    color: $text-accent-color
    font-size: 18px
    font-weight: 400
    line-height: 30.45px
    letter-spacing: -0.16px
    cursor: pointer
  // style
</style>
