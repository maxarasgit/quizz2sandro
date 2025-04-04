document.getElementById('submit').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
  if (name === '' || email === '' || age === '') {
    alert('Please fill in all fields');
    return; 
  }
    if (!email.includes('@')) {
      alert('Email must contain @ symbol');
      return;
    }
    if (age < 1) {
      alert('Age must be over 0');
      return;
    }
    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<p>Name: ' + name + '</p><p>Email: ' + email + '</p><p>Age: ' + age + '</p>';
    document.getElementById('submissionsList').appendChild(newDiv);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
  });
  