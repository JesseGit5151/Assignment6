// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector("#addForm")
let id = form.querySelector("#id")
let empName = form.querySelector("#name")
let extension = form.querySelector("#extension")
let email = form.querySelector("#email")
let department = form.querySelector("#department")
let table = document.querySelector("#employees")
let employeeCount = document.querySelector("#empCount")
console.log(form)
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0
employeeCount.innerHTML = `(${count})`
// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault()
  // GET THE VALUES FROM THE TEXT BOXES
  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  let row = table.insertRow()
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let cellId = row.insertCell()
  let cellName = row.insertCell()
  let cellExt = row.insertCell()
  let cellEmail = row.insertCell()
  let cellDept = row.insertCell()
  let delBtn = row.insertCell()

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  let cellIdText = document.createTextNode(id.value)
  cellId.append(cellIdText)
  let cellNameText = document.createTextNode(empName.value)
  cellName.append(cellNameText)
  let cellExtText = document.createTextNode(extension.value)
  cellExt.append(cellExtText)
  let cellEmailText = document.createTextNode(email.value)
  cellEmail.append(cellEmailText)
  let cellDeptText = document.createTextNode(department.value)
  cellDept.append(cellDeptText)
  // CREATE THE DELETE BUTTON
  let btn = document.createElement("button")
  btn.innerText = "X"
  btn.className = "btn btn-danger"
  delBtn.append(btn)
  // RESET THE FORM
  form.reset()
  // SET FOCUS BACK TO THE ID TEXT BOX
  id.focus()
  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  count++
  employeeCount.innerHTML = `(${count})`
})

// DELETE EMPLOYEE
table.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    if (
      confirm(
        `Are you sure you want to delete this employee?`
      )
    ) {
    table.deleteRow(e.target.parentElement.parentElement.rowIndex)
      count--
      employeeCount.innerHTML = `(${count})`
    }
  }
})
