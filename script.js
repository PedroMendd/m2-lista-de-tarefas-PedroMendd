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


function createTaskItem(title, type) {
  const listItem = document.createElement('li')
  const taskContainer = document.createElement('div')
  const typeSpan = document.createElement('span')
  const taskName = document.createElement('p')
  const deleteIcon = document.createElement('span')

  listItem.classList.add('task__item');
  taskContainer.classList.add('task-info__container')

  if (type === 'Urgente' || type === 'urgente') {
    typeSpan.classList.add('task-type_span-urgent')
  } else if (type === 'Importante' || type === 'importante') {
    typeSpan.classList.add('task-type_span-important')
  } else if (type === 'Normal'|| type === 'normal') {
    typeSpan.classList.add('task-type_span-normal')
  }

  taskName.classList.add('task-info_text')
  taskName.textContent = title

  deleteIcon.classList.add('material-symbols-outlined')

  taskContainer.appendChild(typeSpan)
  taskContainer.appendChild(taskName)
  listItem.appendChild(taskContainer)
  listItem.appendChild(deleteIcon)

  document.addEventListener('click', function(event) {
    const deleteIcon = event.target.classList.contains('material-symbols-outlined')
  
    if (deleteIcon) {
      const listItem = event.target.parentElement
  
      if (listItem && listItem.classList.contains('task__item')) {
        const taskTitle = listItem.querySelector('.task-info_text').textContent
        const index = indexOfTask(taskTitle)
  
        if (index !== -1) {
          tasks.splice(index, 1)
          renderElements(tasks)
        }
      }
    }
  })
  
  function indexOfTask(title) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title === title) {
        return i
      }
    }
    return -1
  }

  return listItem
}

function renderElements(arr) {
  const tasksList = document.querySelector('.tasks__list')
  
  tasksList.innerHTML = ''

  for (let i = 0; i < arr.length; i++) {
    const taskElement = createTaskItem(arr[i].title, arr[i].type)
    tasksList.appendChild(taskElement)
  }
}


renderElements(tasks)

const button = document.querySelector('.form__container')

button.addEventListener('submit', function(event){
    event.preventDefault()

    const inputName = document.querySelector('.form__input--text_input__box').value
    const selectPriority = document.querySelector('.form__input--priority_input__box').value

    let newActivity = {
      title: inputName,
      type: selectPriority,
    }

    tasks.push(newActivity)
    renderElements(tasks)
})