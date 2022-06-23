document.addEventListener('DOMContentLoaded', () => {

  const $addNewAppointment = document.querySelector('[data-js="add-new-appointment"]');
  const $newAppointments = document.querySelector('[data-js="new-appointments"]');

  const events = ['click', 'touchstart'];

  events.forEach(e => {
    $addNewAppointment.addEventListener(e, () => {
      $newAppointments.classList.toggle('new-appointments--active');
      if ($newAppointments.classList.contains('new-appointments--active')) {
        $newAppointments.classList.remove('new-appointments--inactive');
        disableScroll();
      } else {
        document.body.classList.remove("stop-scrolling");
      }
    });
  })
  
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

});
