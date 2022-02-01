var alertPlaceholder = document.getElementById('alertPlaceholder')
var alertTrigger = document.getElementById('resetAlertBtn')

function resetfunction(){
  document.getElementById("RecruitmentForm").reset();
}

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<br><input class="btn btn-danger btn-sm px-4 mx-3 mt-3" type="reset" onclick="resetfunction()" data-dismiss="alert" value="YES"><button type="button" class="btn btn-danger btn-sm px-4 mx-3 mt-3" data-dismiss="alert" aria-label="Close">NO</button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Do you really want to reset the form?', 'danger')
  })
}
