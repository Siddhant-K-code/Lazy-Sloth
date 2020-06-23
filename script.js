(() => {
  gsap.to('#bear', {
    right: 0,
    duration: 10,
  });

  gsap.to('.trail', {
    duration: 10,
    delay: 1,
    width: '90%',
  });
})();
