document.addEventListener('DOMContentLoaded', () => {

  const $addNewAppointment = document.querySelector('[data-js="add-new-appointment"]');
  const $newAppointments = document.querySelector('[data-js="new-appointments"]');

  $addNewAppointment.addEventListener('click', () => {
    $newAppointments.classList.toggle('new-appointments--active');
    if ($newAppointments.classList.contains('new-appointments--active')) {
      $newAppointments.classList.remove('new-appointments--inactive');
      disableScroll();
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  });

  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }
  
  // function enableScroll() {
  //   document.body.classList.remove("stop-scrolling");
  // }
  

});