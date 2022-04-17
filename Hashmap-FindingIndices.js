const listify = (words) => {
  let listed = '[';
  let first_pass = true;
  if (words.length > 0) {
    for (letter of words) {
      if (!first_pass) {
        listed += ' '
      }

      listed += '\'' + letter + '\',';
      first_pass = false;
    }
    listed = listed.slice(0, -1) + ']'
    return listed;
  }
  else {
    return '';
  }
}

const updateDetails = () => {
  const hash_string = document.getElementById('string').value
  const string_length = parseInt(document.getElementById('array-length').value)

  let codes = []
  for (let i = 0; i < hash_string.length; i++) {
    codes.push(hash_string.codePointAt(i))
  }

  const hash_value = codes.reduce((a, b) => a + b, 0) % (string_length + 1)

  if (hash_value) {
    document.getElementById('array-index').value = hash_value
  }
}