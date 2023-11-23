const table = document.querySelector('#result-table')
const noRecords = document.querySelector('.no-records-row')

if (table.rows.length <= 2) { // 1 to account for the header row
    noRecords.classList.remove("hidden"); // Show the message row
} else {
    noRecords.classList.add("hidden"); // Hide the message row
}
