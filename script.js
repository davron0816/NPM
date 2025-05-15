new TypeIt("#animated-text", {
    speed: 60,
    waitUntilVisible: true
  })
  .type("Salom, Azim aka!", { delay: 300 })
  .break()
  .type("Qachon oshga boramiz?")
  .pause(500)
  .break()
  .type("Xoxlasangiz xozir boramiz", )
  .go();