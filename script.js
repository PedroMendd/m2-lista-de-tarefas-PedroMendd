const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function createTaskItem(task) {
  const listItem = document.createElement('li')
  const taskContainer = document.createElement('div')
  const typeSpan = document.createElement('span')
  const taskName = document.createElement('p')
  const deleteButton = document.createElement('button')

  listItem.classList.add('task__item');
  taskContainer.classList.add('task-info__container')

  if (task.type.toLowerCase() === 'urgente') {
    typeSpan.classList.add('task-type_span-urgent')
  } else if (task.type.toLowerCase() === 'importante') {
    typeSpan.classList.add('task-type_span-important')
  } else if (task.type.toLowerCase() === 'normal') {
    typeSpan.classList.add('task-type_span-normal')
  }

  taskName.classList.add('task-info_text')
  taskName.textContent = task.title;

  deleteButton.classList.add('material-symbols-outlined')

  deleteButton.addEventListener('click', function () {
    const index = tasks.indexOf(task)
  
    if (index !== -1) {
      tasks.splice(index, 1)
      renderElements(tasks)
    }
  });

  taskContainer.appendChild(typeSpan)
  taskContainer.appendChild(taskName)
  listItem.appendChild(taskContainer)
  listItem.appendChild(deleteButton)

  return listItem
}

function renderElements(tasks) {
  const tasksList = document.querySelector('.tasks__list')

  tasksList.innerHTML = ''

  for (let i = 0; i < tasks.length; i++) {
    const taskElement = createTaskItem(tasks[i])
    tasksList.appendChild(taskElement)
  }
}

function addTask() {
  const inputName = document.querySelector('.form__input--text_input__box').value
  const selectPriority = document.querySelector('.form__input--priority_input__box').value

  if (inputName && selectPriority) {
    let newTask = {
      title: inputName,
      type: selectPriority,
    };

    tasks.push(newTask)
    renderElements(tasks)
  } else {
    alert("Por favor, preencha todos os campos antes de adicionar uma tarefa.")
  }
}

const button = document.querySelector('.form__container')

button.addEventListener('submit', function (event) {
  event.preventDefault()
  addTask()
})

renderElements(tasks)
