/* global bootstrap: false */
(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })

  document.querySelector('#bottom-collapse').addEventListener('click', function () {
      document.querySelector('.bottomCollapse').classList.toggle('open')
    })
})()
