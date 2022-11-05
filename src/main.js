import App from './App'

const uniqueID = () => Math.floor(Math.random() * Date.now())

const app = async () => {
  document.getElementById('app').appendChild(await App())
  /**
   * array
   * {
   *  key: uniqueID(),
   *  state: todo | done,
   *  content: '',
   * }
   */
  let todoList = []

  const ulElement = document.querySelector('.items')
  const inputElement = document.querySelector('.add_input')
  const buttonElement = document.querySelector('.add_btn')

  const clearInputValue = () => {
    inputElement.value = ''
  }

  const moveScrollToUlElement = () => {
    if (ulElement.scrollHeight > ulElement.clientHeight) {
      ulElement.scrollTo({ top: ulElement.scrollHeight, behavior: 'smooth' })
    }
  }

  const renderTodoList = () => {
    let toRenderTodoList = ''

    todoList.forEach((todo) => {
      toRenderTodoList += `
        <li class="item_row">
          <div data-id="${todo.key}" class="item">
            <span class="item_name">${todo.content}</span>
            <button class="item_delete_btn">삭제</button>
          </div>
        </li>
      `
    })

    ulElement.innerHTML = toRenderTodoList
    moveScrollToUlElement()
  }

  const addTodo = (value) => {
    if (value.trim() === '' || !value) {
      return alert('투두를 입력해주세요')
    }
    todoList.push({
      key: uniqueID(),
      state: 'todo',
      content: value,
    })
    todoList = [...todoList].filter((todo) => todo.state === 'todo')
    clearInputValue()
    renderTodoList()
  }

  const removeTodo = (e) => {
    if (e.target.matches('.item_delete_btn')) {
      const matchedKey = e.target.parentNode.dataset.id
      todoList = [...todoList].filter((todo) => todo.key !== +matchedKey)
      renderTodoList()
    }
  }

  // 1. 사용자가 입력한 텍스트를 받아옴
  buttonElement.addEventListener('click', () => {
    addTodo(inputElement.value)
  })

  inputElement.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      addTodo(inputElement.value)
    }
  })

  // 2. 새로운 아이템을 만들어 주세요 (텍스트 및 삭제 버튼)

  // 3. ul 안에 새로 만든 아이템을 추가해 주세요!

  // 4. 새로 추가된 아이템으로 스크롤링이 가능하도록 해주세요(옵션)!

  // 5. input 태그에 값을 넣은 후 추가된 뒤 초기화 해주세요!
  window.addEventListener('click', removeTodo)
}
// Load app
app()
