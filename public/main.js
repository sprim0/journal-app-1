console.log('anything')

var thumbUp = document.getElementsByClassName("thumbs-up");


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(event){
        // closest goes to the 1st ancestor that matches the selector
        const date = this.closest('li').querySelector('.date').innerText
        window.location.href = `/profile?date=${encodeURIComponent(date)}` //encodedURIComponent makes the date URL friendly b/c of the '/'
        
      });
});

// completed with the help of Michael kazin

