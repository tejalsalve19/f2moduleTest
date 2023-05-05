fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
  .then(response => response.json())
  .then(data => {
    // Work with the data here
    console.log(data);
  });
  
// Assuming the JSON data is stored in a variable called `students`
const table = document.createElement('table');

// Add table headers
const headers = ['Name', 'Email', 'Marks', 'Passing', 'Class'];
const headerRow = document.createElement('tr');
headers.forEach(header => {
  const th = document.createElement('th');
  th.textContent = header;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Add table rows
students.forEach(student => {
  const tr = document.createElement('tr');

  // Add student name column with image
  const tdName = document.createElement('td');
  const img = document.createElement('img');
  img.src = student.image;
  img.alt = `${student.first_name} ${student.last_name}`;
  tdName.appendChild(img);
  tdName.appendChild(document.createTextNode(`${student.first_name} ${student.last_name}`));
  tr.appendChild(tdName);

  // Add other columns
  const tdEmail = document.createElement('td');
  tdEmail.textContent = student.email;
  tr.appendChild(tdEmail);

  const tdMarks = document.createElement('td');
  tdMarks.textContent = student.marks;
  tr.appendChild(tdMarks);

  const tdPassing = document.createElement('td');
  tdPassing.textContent = student.passing ? 'passing' : 'failed';
  tr.appendChild(tdPassing);

  const tdClass = document.createElement('td');
  tdClass.textContent = student.class;
  tr.appendChild(tdClass);

  table.appendChild(tr);
});

// Add the table to the document
document.body.appendChild(table);


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const filterValue = searchInput.value.toLowerCase();
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    const name = row.querySelector('td:first-child').textContent.toLowerCase();
    const email = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
    if (name.includes(filterValue) || email.includes(filterValue)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});